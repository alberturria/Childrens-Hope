const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sqlDbFactory = require("knex");
const process = require("process");

let sqlDb;

function initSqlDB() {
	if (process.env.TEST) {
		sqlDb = sqlDbFactory({
			client: "sqlite3",
			debug: true,
			connection: {
			filename: "./locationsdb.sqlite"
			},
			useNullAsDefault: true
		});
	} else {
		sqlDb = sqlDbFactory({
			debug: true,
			client: "pg",
			connection: process.env.DATABASE_URL,
			ssl: true
		});
	}
}

function initDb() {
	return sqlDb.schema.hasTable("locations").then(exists => {
		if (!exists) {
			sqlDb.schema
			.createTable("locations", table => {
				table.increments();
				table.string("name");
				table.string("img");
				table.string("description");
			})
			.then(() => {
				return Promise.all(
				_.map(locationsList, p => {
					delete p.id;
					return sqlDb("locations").insert(p);
				})
				);
			});
		} else {
			return true;
		}
	});
}

const _ = require("lodash");

let serverPort = process.env.PORT || 5000;

let locationsList = require("./locationstoredata.json");

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/locations/:id", function(req, res) {
	let id = parseInt(req.params.id);
	let myQuery = sqlDb("locations").where("id",id);

	myQuery
	.then(result => {
		res.send(JSON.stringify(result));
	});
});

app.set("port", serverPort);

initSqlDB();
initDb();

/* Start the server on port 3000 */
app.listen(serverPort, function() {
	console.log(`Your app is ready at port ${serverPort}`);
});

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
			filename: "./childrensHopeDb.sqlite"
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
	let result;
	result = sqlDb.schema.hasTable("locations").then(exists => {
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

	if (result){
		result = sqlDb.schema.hasTable("events").then(exists => {
			if (!exists) {
				sqlDb.schema
				.createTable("events", table => {
					table.increments();
					table.string("name");
					table.string("description"),
					table.string("img"),
					table.date("date");
				})
				.then(() => {
					return Promise.all(
					_.map(eventsList, p => {
						delete p.id;
						return sqlDb("events").insert(p);
					})
					);
				});
			} else {
				return true;
			}
		});
	}else
		return false;

	if (result){
		result = sqlDb.schema.hasTable("news").then(exists => {
			if (!exists) {
				sqlDb.schema
				.createTable("news", table => {
					table.increments();
					table.string("tittle");
					table.string("body"),
					table.string("img"),
					table.date("date");
				})
				.then(() => {
					return Promise.all(
					_.map(newsList, p => {
						delete p.id;
						return sqlDb("news").insert(p);
					})
					);
				});
			} else {
				return true;
			}
		});
	}else
		return false;
}

const _ = require("lodash");

let serverPort = process.env.PORT || 5000;

let locationsList = require("./locationstoredata.json");
let eventsList = require("./eventstoredata.json");
let newsList = require("./newstoredata.json");

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

app.get("/news", function(req, res) {
	let myQuery = sqlDb("news");

	myQuery
	.then(result => {
		res.send(JSON.stringify(result));
	});
});

app.get("/events", function(req, res) {
	let myQuery = sqlDb("events");

	myQuery
	.then(result => {
		res.send(JSON.stringify(result));
	});
});

app.get("/events/:id", function(req, res) {
	let id = parseInt(req.params.id);
	let myQuery = sqlDb("events").where("id",id);

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

--------------FRONT-END PART--------------

We developed a web page of an association devoted to help children.

Distribution of work:
We make together all the design diagrams, data base diagram and the scenarios.
Francisco Coca Cruz: He has developed the index pages for services, people, news and locations.
Alberto Herrera Vargas: He has developed the description service and location description pages and part of the home page.
Joaquín León Martínez: He has developed the pages of people profile and several of the java script files.

The Back-End part has been split equitably between the developers. Each of one of us has linked three pages more or less to Heroku.

Client-side languages:
HTML, CSS and javascript

Template used: http://www.templatemo.com/tm-488-classic

Main problems:
We have had problems with the uploud of the project to bitBucket, and to Heroku.
We made the app initially in GitHub, so we import the project from GitHub to BitBucket, hence the commits are done with our user account of GitHub, this are the equivalences between the accounts and our real name/code person:
Paco - Francisco Coca Cruz / 10623424
Alberturria - Alberto Herrera Vargas / 10623443
Joaquin (Buzzles) - Joaquín León Martínez / 10618125

--------------BACK-END PART--------------

NOTE: The Heroku server doesn't load all the data of table "events" when creates the 
database (it only creates 2 of the 5 events), testing it in local works correctly.

NOTE: We have faced some problems with the names in bitbucket, because of this we have several names (are indicated below).

# General information about the team and the web application 

Heroku URL: https://polimi-hyp-2018-team-10623424.herokuapp.com/
Bitbucket repo URL: https://bitbucket.org/polimihyp2018team10623424/polimi-hyp-2018-project/src/master/
Team administrator: Francisco, Coca Cruz, 10623424, polimi-hyp-2018-10623424 (Francisco Coca Cruz and Paco)
Team member n.2: Alberto, Herrera Vargas, 10623443, polimi-hyp-2018-10623443 (Alberto Herrera Vargas and alberturria)
Team memeber n.3: Joaquín, León Martínez, 10618125, polimi-hyp-2018-10618125 (Joaquin, Joaquin Leon, Joaquin Leon Martinez and JoaquinBuzzles96)

#Description of the REST API:

* /locations/:id (:id = identifier of the location in the database)

* /locations (get the list of locations from the database)

* /news (get the list of news from the database)

* /services (get the list of services from the database)

* /services/:id (:id = identifier of the service in the database)

* /people (get the list of people from the database)

* /people/numberPeople (get number of people in the database)

* /people/:id (:id = identifier of the person in the database)

* /events (get the list of events from database)

* /events/:id (:id = identifier of the person in the database)

* /locations/:id_l/services (:id_l = identifier of the location in the database, get service placed in location id_l )

* /services/:id_s/locations (:id_s = identifier of the service in the database, get locations in which service id_s is placed)

* /people/:id_p/services (:id_p = identifier of the person in the database, get services in wich person id_p participates)

* /services/:id_s/people (:id_s = identifier of the service in the database, get people who participates in service id_s)



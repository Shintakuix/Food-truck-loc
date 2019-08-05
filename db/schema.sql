DROP DATABASE trucks_db;
CREATE DATABASE trucks_db;
#DROP TABLE trucks;
#DROP TABLE menu;
USE trucks_db;

CREATE TABLE trucks
(
	id int NOT NULL	AUTO_INCREMENT,
	name varchar (255) NOT NULL,
	location varchar (255) not null,
    type_food varchar (255) not null,
	approved BOOLEAN DEFAULT true,
    dish_name varchar (255) not null,
	dish_price varchar (255) not null,
    submitted BOOLEAN DEFAULT false,
	PRIMARY KEY	(id)
);




 # select * from trucks;
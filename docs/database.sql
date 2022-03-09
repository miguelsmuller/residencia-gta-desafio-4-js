-- Create news table
CREATE TABLE news (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(500) NOT NULL,
    newsUrl varchar(500) NOT NULL,
    subtitle varchar(500) NOT NULL,
    imageUrl varchar(500) NOT NULL,
    relatedNews varchar(500) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    personalDocument varchar(14) NOT NULL,
    birthday DATE NOT NULL,
    password varchar(200),
    PRIMARY KEY (id),
    CONSTRAINT UC_users_email UNIQUE (email),
    CONSTRAINT UC_users_personalDocument UNIQUE (personalDocument)
);
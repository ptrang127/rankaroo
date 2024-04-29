DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS subjects CASCADE;
DROP TABLE IF EXISTS comparisons CASCADE;


CREATE TABLE IF NOT EXISTS categories (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS subjects (
	id BIGSERIAL PRIMARY KEY,
	category_id integer REFERENCES categories,
	name varchar NOT NULL,
	score integer DEFAULT 0
);

CREATE TABLE IF NOT EXISTS comparisons (
	id BIGSERIAL PRIMARY KEY,
	category_id integer REFERENCES categories,
	first_subject_id integer REFERENCES subjects,
	second_subject_id integer REFERENCES subjects,
	first_subject_votes integer,
	second_subject_votes integer
);

INSERT INTO categories (name) VALUES ('Video Games');

INSERT INTO subjects (category_id, name) VALUES (1, 'The Legend of Zelda: Breath of the Wild');
INSERT INTO subjects (category_id, name) VALUES (1, 'Super Mario Odyssey');
INSERT INTO subjects (category_id, name) VALUES (1, 'The Witcher 3: Wild Hunt');
INSERT INTO subjects (category_id, name) VALUES (1, 'Red Dead Redemption 2');
INSERT INTO subjects (category_id, name) VALUES (1, 'God of War');
INSERT INTO subjects (category_id, name) VALUES (1, 'League of Legends');
INSERT INTO subjects (category_id, name) VALUES (1, 'Valorant');

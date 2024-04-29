DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS subjects CASCADE;
DROP TABLE IF EXISTS comparisons CASCADE;


CREATE TABLE IF NOT EXISTS categories (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS subjects (
	id SERIAL PRIMARY KEY,
	category_id integer REFERENCES categories,
	name varchar NOT NULL,
	wins integer DEFAULT 0,
	losses integer DEFAULT 0
);

CREATE TABLE IF NOT EXISTS comparisons (
	id SERIAL PRIMARY KEY,
	category_id integer REFERENCES categories,
	first_subject_id integer REFERENCES subjects,
	second_subject_id integer REFERENCES subjects,
	first_subject_votes integer,
	second_subject_votes integer,
	UNIQUE (first_subject_id, second_subject_id)
);

INSERT INTO categories (name) VALUES ('Video Games');

INSERT INTO subjects (category_id, name) VALUES (1, 'The Legend of Zelda: Breath of the Wild');
INSERT INTO subjects (category_id, name) VALUES (1, 'Super Mario Odyssey');
INSERT INTO subjects (category_id, name) VALUES (1, 'The Witcher 3: Wild Hunt');
INSERT INTO subjects (category_id, name) VALUES (1, 'Red Dead Redemption 2');
INSERT INTO subjects (category_id, name) VALUES (1, 'God of War');
INSERT INTO subjects (category_id, name) VALUES (1, 'League of Legends');
INSERT INTO subjects (category_id, name) VALUES (1, 'Valorant');
INSERT INTO subjects (category_id, name) VALUES (1, 'Counter-Strike: Global Offensive');
INSERT INTO subjects (category_id, name) VALUES (1, 'Fortnite');
INSERT INTO subjects (category_id, name) VALUES (1, 'Among Us');
INSERT INTO subjects (category_id, name) VALUES (1, 'Minecraft');
INSERT INTO subjects (category_id, name) VALUES (1, 'World of Warcraft');
INSERT INTO subjects (category_id, name) VALUES (1, 'Overwatch');
INSERT INTO subjects (category_id, name) VALUES (1, 'Apex Legends');
INSERT INTO subjects (category_id, name) VALUES (1, 'Call of Duty: Warzone');
INSERT INTO subjects (category_id, name) VALUES (1, 'Cyberpunk 2077');
INSERT INTO subjects (category_id, name) VALUES (1, 'Assassin''s Creed Valhalla');
INSERT INTO subjects (category_id, name) VALUES (1, 'Rocket League');
INSERT INTO subjects (category_id, name) VALUES (1, 'Animal Crossing: New Horizons');
INSERT INTO subjects (category_id, name) VALUES (1, 'Pokémon Sword and Shield');
INSERT INTO subjects (category_id, name) VALUES (1, 'Super Smash Bros. Ultimate');
INSERT INTO subjects (category_id, name) VALUES (1, 'Hades');
INSERT INTO subjects (category_id, name) VALUES (1, 'Genshin Impact');
INSERT INTO subjects (category_id, name) VALUES (1, 'Phasmophobia');
INSERT INTO subjects (category_id, name) VALUES (1, 'Among Us');

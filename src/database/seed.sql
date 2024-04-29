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

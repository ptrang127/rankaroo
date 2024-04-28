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
	subject_1_id integer REFERENCES subjects,
	subject_2_id integer REFERENCES subjects,
	votes_1 integer,
	votes_2 integer
);
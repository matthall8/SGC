BEGIN;


DROP TABLE IF EXISTS cohorts CASCADE;

CREATE TABLE cohorts (
cohort_id SERIAL PRIMARY KEY,
cohort_name VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(400) NOT NULL,
  password VARCHAR(400) NOT NULL
);


DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE posts (
post_id SERIAL PRIMARY KEY,
  post_type VARCHAR(800) NOT NULL ,
  content VARCHAR(1200) NOT NULL,
  cohort_id INTEGER REFERENCES cohorts(cohort_id),
  user_id INTEGER REFERENCES users(user_id)
);


DROP TABLE IF EXISTS voting CASCADE;

CREATE TABLE voting (
 voting_id SERIAL PRIMARY KEY,
 vote_type INTEGER NOT NULL,
 post_id INTEGER REFERENCES posts(post_id),
 user_id INTEGER REFERENCES users(user_id)
);




INSERT INTO users (username,password) VALUES ('Tufee' ,'nasser1995');
INSERT INTO users (username,password) VALUES ('Mattatata' ,'hunululuu4');
INSERT INTO cohorts (cohort_name) VALUES ('Naz');
INSERT INTO cohorts (cohort_name) VALUES ('London');
INSERT INTO cohorts (cohort_name) VALUES ('GAZA');
INSERT INTO posts (post_type,content) VALUES ('Stop','Stop smoking around');
INSERT INTO posts (post_type,content) VALUES ('Go','Smoke somewhere else');
INSERT INTO posts (post_type,content) VALUES ('Continue','Smoking away huh');




COMMIT;

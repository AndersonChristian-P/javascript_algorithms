-- // USERS // --
CREATE TABLE users (
  user_id SERIAL PRIMARY Key,
  fistname VARCHAR(50),
  lastname VARCHAR(50),
  email VARCHAR(75)
);

INSERT INTO users (firstname, lastname, email)
VALUES (
  'Christian',
  'Anderson',
  'ca@seemail.com'
);

-- password is not included in users table - we capture hash via bcryptjs

-- // USER LOGIN // --

CREATE TABLE user_login (
  login_id SERIAL PRIMARY KEY,
  email VARCHAR(75),
  user_password TEXT
);

INSERT INTO user_login (email, user_password)
VALUES (
  'ca@seemail.com',
  'password'
);

-- // USER ADDRESSES // --

CREATE TABLE user_addresses (
  address_id SERIAL PRIMARY KEY,
  street VARCHAR(150),
  city VARCHAR(50),
  user_state VARCHAR(2),
  zip VARCHAR(10),
  user_id INTEGER references users
);

INSERT INTO user_addresses (street, city, user_state, zip, user_id)
VALUES (
  '123 Elm',
  'Lehi',
  'VT',
  '00501',
  1
), (
  '567 Cutty',
  'Felton',
  'PA',
  '17322',
  1
);
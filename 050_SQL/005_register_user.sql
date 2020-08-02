INSERT INTO user_login (email, user_password)
VALUES (
  ${email},
  ${hash}
) returning email, user_password;

INSERT INTO users (firstname, lastname, email)
VALUES (
  ${firstname},
  ${lastname},
  ${email}
);

-- Adding this code below to send back as part of the response --
SELECT ul.email, firstname, lastname, login_id
FROM user_login ul
JOIN users u
ON ul.email = u.email
WHERE u.email = ${email};
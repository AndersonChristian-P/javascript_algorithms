INSERT INTO addresses (street, city, user_state, zip, user_id)
VALUES (
  ${street},
  ${city},
  ${user_state},
  ${zip},
  ${id}
) returning address_id;
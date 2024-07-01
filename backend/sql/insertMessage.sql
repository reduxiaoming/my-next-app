INSERT INTO messages (content, user_id, timestamp)
VALUES ($1, $2, $3)
RETURNING *;
CREATE TYPE task_status AS ENUM (
  'OPEN',
  'IN_PROGRESS',
  'DONE'
);

CREATE TABLE task (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  status task_status NOT NULL
);

INSERT INTO task (title, description, status)
VALUES ('Test Task', 'This is a test', 'OPEN');
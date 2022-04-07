# drop table candidate;
# drop table interviewer;
# drop table interview;

SET GLOBAL default_storage_engine = 'InnoDB';


-- Insert mock Candidate
INSERT INTO candidate(first_name, last_name, phone, email) SELECT 'Sarah', 'Smith', '0760821214','sarah.smith@gmail.com'
WHERE NOT EXISTS( SELECT email FROM candidate WHERE email = 'sarah.smith@gmail.com');
INSERT INTO candidate(first_name, last_name, phone, email) SELECT 'Ivie', 'Sharp', '0761831264','ivie.sharp@gmail.com'
WHERE NOT EXISTS( SELECT email FROM candidate WHERE email = 'ivie.sharp@gmail.com');


-- Insert mock Interviewer
INSERT INTO interviewer(first_name, last_name, email, department) SELECT 'Ruxandra', 'Bragadireanu','ruxandra.bragadireanu@gmail.com', 'it'
WHERE NOT EXISTS( SELECT email FROM candidate WHERE email = 'ruxandra.bragadireanu@gmail.com');
INSERT INTO interviewer(department, email, first_name, last_name) SELECT 'it','grigore.andreea.e@gmail.com','Andreea','Grigore'
WHERE NOT EXISTS( SELECT email FROM candidate WHERE email = 'grigore.andreea.e@gmail.com');


-- Insert mock Interview
INSERT INTO interview(date, reserved_room, score, type, candidate_id, interviewer_id) VALUES
('2020.05.01', 'Green Room', 1, 'HR Interview', 1, 1);
INSERT INTO interview(date, reserved_room, score, type, candidate_id, interviewer_id) VALUES
('2020.05.02', 'Black forest Room', 1, 'Technical Interview', 1, 1);
INSERT INTO interview(date, reserved_room, score, type, candidate_id, interviewer_id) VALUES
('2020.05.11', 'Green Room', 1, 'HR Interview', 2, 1);
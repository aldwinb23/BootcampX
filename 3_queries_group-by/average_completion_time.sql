
-- Get currently enrolled students' average assignment completion time.

SELECT students.name as student, avg(assignment_submissions.duration) as average_assignment_duration
FROM students
JOIN assignment_submissions ON student_id = students.id
WHERE end_date IS NULL
GROUP BY student
ORDER BY average_assignment_duration DESC;


-- -- NICE TRY!!--
-- SELECT students.name AS student, AVG(assignment_submissions.duration) AS average_assignment_duration
-- FROM students
-- JOIN assignment_submissions ON students.id = student_id
-- WHERE students.end_date != NULL
-- ORDER BY average_assignment_duration DESC;


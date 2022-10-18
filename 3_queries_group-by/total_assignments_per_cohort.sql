
-- Get the total number of assignment submissions for each cohort.

SELECT cohorts.name as cohort, count(assignment_submissions.*) as total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohorts.name
ORDER BY total_submissions DESC;


-- -- NICE TRY!!--
-- SELECT cohorts.name as cohort_name, count(assignment_submissions.*) AS total_submissions 
-- FROM cohorts
-- JOIN assignment_submissions ON cohorts.id = (
--   SELECT cohort_id
--   FROM students
-- )
-- GROUP BY cohort_name 
-- ORDER BY total_submissions DESC;

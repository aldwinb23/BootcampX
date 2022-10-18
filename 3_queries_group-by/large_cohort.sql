
-- Get all cohorts with 18 or more students.

SELECT cohorts.name as cohort_name, count(students.*) AS student_count 
FROM cohorts
JOIN students ON cohorts.id = cohort_id
GROUP BY cohort_name 
HAVING count(students.*) >= 18
ORDER BY student_count;


-- -- NICE TRY!! --
-- SELECT name AS cohort_name, COUNT(students) AS student_count
-- FROM cohorts
-- JOIN students ON students.cohort_id = cohorts.id
-- HAVING COUNT(students) > 18
-- ORDER BY COUNT(students);
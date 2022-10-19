
-- Get the name of all teachers that performed an assistance request during a cohort.

SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
ORDER BY teacher;


-- -- NICE TRY --
-- SELECT teachers.name AS teacher, cohort.name AS cohort
-- FROM teachers
-- JOIN assistance_requests ON teachers.id = teacher_id
-- JOIN cohorts ON cohorts.id = assistance_requests.cohort_id
-- WHERE cohort.name ='JUL02'
-- GROUP BY teacher
-- ORDER BY teacher;

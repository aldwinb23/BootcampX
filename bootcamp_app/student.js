
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'aldwinbautista'
});



// const cohortName = process.argv[2] || 'JUL02';
// const queryString = 
// SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
// FROM teachers
// JOIN assistance_requests ON teacher_id = teachers.id
// JOIN students ON student_id = students.id
// JOIN cohorts ON cohort_id = cohorts.id
// WHERE cohorts.name = $1
// ORDER BY teacher;
// ;

// pool
// .query(queryString, [cohortName])
// .then(res => {
//   res.rows.forEach(row => {
//     console.log(${row.cohort}: ${row.teacher});
//   })
// })
// .catch(err => console.error('query error', err.stack));



////
const cohortName = process.argv[2] || 'JUL02';
const limit = process.argv[3] || '5';
// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`, limit];

const queryString = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;

pool
  .query(queryString, values)
  .then(res => {
    res.rows.forEach(row => {
      console.log(`${row.name} has an id of ${row.student_id} and was in the ${row.cohort} cohort`);
    })
  })
  .catch(err => console.error('query error', err.stack));




  


// pool.query(`
// SELECT students.id as student_id, students.name as name, cohorts.name as cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// WHERE cohorts.name LIKE '%${process.argv[2]}%'
// LIMIT ${process.argv[3] || 5};
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
//   })
// }).catch(err => console.error('query error', err.stack));




// pool.query(`
// SELECT students.id as student_id, students.name as name, cohorts.name as cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// LIMIT 5;
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
//   })
// });






// pool.query(`
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
//   })
// });





// pool.query(`
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `)
// .then(res => {
//   console.log(res.rows);
// })
// .catch(err => console.error('query error', err.stack));







// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'labber',
//   password: 'labber',
//   host: 'localhost',
//   database: 'bootcampx'
// });

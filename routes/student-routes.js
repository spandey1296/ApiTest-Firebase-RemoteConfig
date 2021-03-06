const express = require('express');
const {addStudent, 
       getAllStudents, 
       getStudent,
       updateStudent,
       deleteStudent,
      
      } = require('../controllers/studentController');

const router = express.Router();

router.get('/students', getAllStudents);  //show all
router.get('/student/:id', getStudent);   //SHow by id
router.post('/student', addStudent);   //create
router.put('/student/:id', updateStudent); //update
router.delete('/student/:id', deleteStudent);  //delete


module.exports = {
    routes: router
}

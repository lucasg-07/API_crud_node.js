const pool = require('../../db')
const queries = require('./queries')
const getStudents = (req,res)=>{

    pool.query(queries.getStudents,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })

};

const getOneStudent = (req,res)=>{
    const id = parseInt(req.params.id)

    pool.query(queries.getOneStudent,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const addStudent = (req,res)=>{
    const {name,email,age,dob} = req.body;

    pool.query(queries.checkEmailExist,[email],(error,results)=>{
        if(results.rows.length){
             res.send("Email already exists");
        }
        pool.query(queries.addStudent,[name,email,age,dob], (error,results)=>{
            if(error) throw error;
             res.status(201).send("Student created sucessfuly");
        });
    });
};

const deleteStudent = (req,res)=>{
    const id = parseInt(req.params.id)

    pool.query(queries.getOneStudent,[id],(error,results)=>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student does't exist in the database")
        }
        pool.query(queries.deleteStudent,[id],(error,results)=>{
            if(error) throw error;
            res.status(200).send("Student removed sucessfuly");
        });
    });
};

const updateStudent = (req,res)=>{
    const id = parseInt(req.params.id);
    const {name} = req.body;

    pool.query(queries.getOneStudent,[id],(error,results)=>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student does't exist in the database");
        }
        pool.query(queries.updateStudent,[name,id],(error,results)=>{
            if(error) throw error;
            res.status(200).send("Student updated sucessfuly")
        });

    });
};

module.exports = {
    getStudents,
    getOneStudent,
    addStudent,
    deleteStudent,
    updateStudent,
}
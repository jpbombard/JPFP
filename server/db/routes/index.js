const { Student, Campus } = require('../index');
const router = require('express').Router();

// grabs all 
router.get('/', async (req,res,next)=>{
    try{
        const schools = await Campus.findAll();
        const students = await Student.findAll();
        res.send([...schools, ...students]);
    }catch(error){
        next(error)
    }
})

// grabs all students
router.get('/students', async (req,res,next)=>{
    try{
        const students = await Student.findAll()
        res.send(students);
    }catch(error){
        next(error)
    }
})

//grabs student by id
router.get('/students/:id', async (req,res,next)=>{
    try{
        const student = await Student.findByPk(req.params.id, {
            include: [Campus]
        })
        res.send(student)
    }catch(error){
        next(error)
    }
})

// post new student 
router.post('/students', async(req, res, next) => {
    try {
      const student = await Student.create(req.body.student);
      res.send(student)
    }catch(error) {
      next(error)
    }
})

//update student 
router.put('/students/:id', async(req, res, next) => {
    try {
        const student = await Student.findByPk(req.params.id)
        const edit = {};
        for (const prop in student.dataValues) {
            if (req.body[prop] == null || req.body[prop] === "") {
                edit[prop] = student.dataValues[prop]
            } else {
                edit[prop] = req.body[prop]
            }
        }
        await student.update(edit)
        res.send(student);
    } catch (error) {
        next(error)
    }
})

//deletes student
router.delete('/students/:id', async (req,res,next)=>{
    try {
        const student = await Student.findByPk(req.params.id)
        await student.destroy();
        res.send(student);
    } catch (error) {
        next(error)
    }
})

// grabs all campuses
router.get('/campuses', async (req,res,next)=>{
    try{
        const campuses = await Campus.findAll();
        res.send(campuses);
    }catch(error){
        next(error)
    }
})

//grabs campus by id
router.get('/campuses/:id', async (req,res,next)=>{
    try{
        const campus = await Campus.findByPk(req.params.id)
        res.send(campus)
    }catch(error){
        next(error)
    }
})

// post new campus 
router.post('/campuses', async(req, res, next) => {
    try {
     const campus = await Campus.create(req.body.campus);
     res.send(campus)
    }catch(error) {
      next(error)
    }
})

//update campus
router.put('/campuses/:id', async(req, res, next) => {
    try {
        const campus = await Campus.findByPk(req.params.id)
        console.log("test", campus.dataValues.imageUrl)
        const edit = {};
        for (const prop in campus.dataValues) {
            if (req.body[prop] == null || req.body[prop] === "") {
                edit[prop] = campus.dataValues[prop]
            } else {
                edit[prop] = req.body[prop]
            }
        }
        console.log("EDIT", edit)
        await campus.update(edit)
        res.send(campus);
    } catch (error) {
        next(error)
    }
})

//delete campus
router.delete('/campuses/:id', async (req,res,next)=>{
    try {
        const campus = await Campus.findByPk(req.params.id)
        await campus.destroy();
        res.send(campus);
    } catch (error) {
        next(error)
    }
})



module.exports = router;
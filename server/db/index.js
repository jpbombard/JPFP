const db = require('./database');
const { Student, Campus } = require('./models/school')

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
    db,
    Student,
    Campus
}
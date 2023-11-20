const {db} = require('./server/db')
const {Student, Campus} = require('./server/db/models/school');
const { faker } = require('@faker-js/faker')

const schools = [{
    name: 'Tulane University', 
    imageUrl: 'https://tulane.edu/sites/default/files/inline-images/campus_aerial533.jpg',
    address: '6823 St Charles Ave, New Orleans, LA 70118',
    description: 'Extremely fun private university located in the heart of New Orleans'
}, {
    name: 'University of California',
    imageUrl: 'https://i0.wp.com/calmatters.org/wp-content/uploads/2022/03/UC-Berkeley.jpg?fit=1200%2C800&ssl=1',
    address: '110 Sproul Hall, Berkeley, CA 94720',
    description: 'Large public school located in the Berkeley hills'
}, {
    name: 'University of Southern California',
    imageUrl: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/2XIMXTGKWBLERFTSKXINK3NJVQ.jpg',
    address: '3551 Trousdale Pkwy, Los Angeles, CA 90089',
    description: 'Competitive private university located in south-central LA'
}, {
    name: 'California Polytechnic State University',
    imageUrl: 'https://www.collegetransitions.com/wp-content/uploads/2022/04/cal-poly-1024x670.png',
    address: '1 Grand Ave, San Luis Obispo, CA 93407',
    description: 'Inland state school close to beaches and nature '
}]

const TOTAL_STUDENTS = 100;

const createFakeStudents = () => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    imageUrl: faker.image.url({
      height: 400,
      width: 400
    }),
    email: faker.internet.exampleEmail(),
    gpa: faker.number.float({
      max: 4.0,
      min: 0.0,
      precision: 0.1
    })
  }
}

const fakeStudents = faker.helpers.multiple(createFakeStudents, {
  count: TOTAL_STUDENTS,
})

const seed = async () => {
    try {
      await db.sync({force: true})
 
      const createdCampuses = await Promise.all(schools.map(school => {
        return Campus.create(school);
      }));

      const createdStudents = await Promise.all(fakeStudents.map(student => {
        return Student.create(student);
      }));

      

  
      console.log('Seeding success!')
      db.close()
    }
    catch (err) {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
      db.close()
    }
}
 

seed();


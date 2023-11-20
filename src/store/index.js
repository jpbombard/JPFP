/* Here is where you will configure the store 

*/ 

import { configureStore } from "@reduxjs/toolkit";
import campuses from "../reducers/campuses";
import students from "../reducers/students";
import singleStudent from "../reducers/singleStudent";
import singleCampus from "../reducers/singleCampus";


const store = configureStore({
  reducer: {
    campuses: campuses,
    students: students,
    singleStudent: singleStudent,
    singleCampus: singleCampus
  }
});

export default store;
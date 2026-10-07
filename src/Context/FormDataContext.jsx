import { createContext, useState } from "react";


export const FormDataContext = createContext();



const FormDataProvider = ({children}) => {


  const [courses,setCourses] = useState([]);



  const addCourse = (course)=>{


    setCourses(prev => [

      ...prev,

      {
        id:Date.now(),
        ...course
      }

    ]);


  };



  const deleteCourse = (id)=>{


    setCourses(prev =>

      prev.filter(course =>
        course.id !== id
      )

    );


  };



  const updateCourse = (id,data)=>{


    setCourses(prev =>

      prev.map(course =>

        course.id === id

        ?

        {
          ...course,
          ...data
        }

        :

        course

      )

    );


  };



  return (

    <FormDataContext.Provider

      value={{
        courses,
        addCourse,
        deleteCourse,
        updateCourse
      }}

    >

      {children}

    </FormDataContext.Provider>

  );


};


export default FormDataProvider;
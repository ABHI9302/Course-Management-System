import { useContext, useState } from "react";
import { FormDataContext } from "../Context/FormDataContext";


const Form = () => {


  const { addCourse } = useContext(FormDataContext);



  const [course,setCourse] = useState({

    name:"",
    trainer:"",
    duration:""

  });



  const handleChange = (e)=>{

    setCourse({

      ...course,

      [e.target.name]:e.target.value

    });

  };



  const handleSubmit = (e)=>{

    e.preventDefault();


    if(
      !course.name ||
      !course.trainer ||
      !course.duration
    ){

      alert("Fill all fields");

      return;

    }



    addCourse(course);



    setCourse({

      name:"",
      trainer:"",
      duration:""

    });


  };



  return (

    <div>


      <h2 className="text-2xl font-bold mb-5">
        Add Course
      </h2>



      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >


        <input

          type="text"

          name="name"

          placeholder="Course Name"

          value={course.name}

          onChange={handleChange}

          className="w-full border p-3 rounded"

        />



        <input

          type="text"

          name="trainer"

          placeholder="Trainer Name"

          value={course.trainer}

          onChange={handleChange}

          className="w-full border p-3 rounded"

        />



        <input

          type="text"

          name="duration"

          placeholder="Duration"

          value={course.duration}

          onChange={handleChange}

          className="w-full border p-3 rounded"

        />



        <button

          type="submit"

          className="bg-blue-600 text-white px-5 py-2 rounded"

        >

          Add Course

        </button>


      </form>


    </div>

  );

};


export default Form;
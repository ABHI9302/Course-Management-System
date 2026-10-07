import { useContext } from "react";
import { FormDataContext } from "../Context/FormDataContext";


const CourseData = () => {


  const {
    courses,
    deleteCourse
  } = useContext(FormDataContext);



  return (

    <div>


      <h2 className="text-2xl font-bold mb-5">
        Course Data
      </h2>



      <table className="w-full border">


        <thead>

          <tr className="bg-gray-200">


            <th className="border p-2">
              Course
            </th>


            <th className="border p-2">
              Trainer
            </th>


            <th className="border p-2">
              Duration
            </th>


            <th className="border p-2">
              Action
            </th>


          </tr>

        </thead>



        <tbody>


        {
          courses.map((course)=>(

            <tr key={course.id}>


              <td className="border p-2">
                {course.name}
              </td>


              <td className="border p-2">
                {course.trainer}
              </td>


              <td className="border p-2">
                {course.duration}
              </td>


              <td className="border p-2">


                <button

                  onClick={()=>
                    deleteCourse(course.id)
                  }

                  className="bg-red-500 text-white px-3 py-1 rounded"

                >

                  Delete

                </button>


              </td>


            </tr>


          ))
        }


        </tbody>


      </table>


    </div>

  );

};


export default CourseData;
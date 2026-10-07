import Form from "./Form";
import CourseData from "./CourseData";


const CourseContainer = () => {

  return (

    <div className="min-h-screen bg-gray-100 p-8">


      <h1 className="text-3xl font-bold text-center mb-8">
        Course Management System
      </h1>


      <div className="grid md:grid-cols-2 gap-6">


        <div className="bg-white p-6 rounded shadow">

          <Form />

        </div>



        <div className="bg-white p-6 rounded shadow">

          <CourseData />

        </div>


      </div>


    </div>

  );

};


export default CourseContainer;
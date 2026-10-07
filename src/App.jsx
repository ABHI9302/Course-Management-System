import CourseContainer from "./components/CourseContainer";
import FormDataProvider from "./Context/FormDataContext";


function App(){

  return (

    <FormDataProvider>

      <CourseContainer />

    </FormDataProvider>

  );

}


export default App;
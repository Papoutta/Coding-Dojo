import {createContext, useState} from "react";
import Navbar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper";


const UserContext = createContext()
export { UserContext }


function App() {

  const [name, setName] = useState("Bob Smith");
  

  return (
    <UserContext.Provider value={{
      name,
      setName
    }}>
      <Navbar />
      <FormWrapper />
    </UserContext.Provider>
  );
}


export default App;
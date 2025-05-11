import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import UserList from "./components/Userlist";
import Adduser from "./components/Adduser";

const App = () => { 
  return(
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="userlist" element={<UserList />} />
          <Route path="add-user" element={<Adduser />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
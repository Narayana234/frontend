
import {BrowserRouter,Routes,Route} from "react-router-dom";


import EditPage from "./components/EditPage";
import ViewTable from "./components/ViewTable";

import Login from "./components/Login";

import SignUp from './components/SignUp';

import './App.css';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/" element = {<SignUp/>}/>
      <Route path="/view" element={<ViewTable />} />
      <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
      </BrowserRouter>
    </div>
      
    );
}

export default App;

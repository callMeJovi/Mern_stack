import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import RequireAuth from "./Components/RequireAuth";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import Layout from "./Components/Layout";
import Editor from "./Components/Editor";
import Admin from "./Components/Admin";
import TeamLeader from "./Components/TeamLeader";
import TeamMem from "./Components/TeamMem";
import Missing from "./Components/Missing";
import Unauthorized from "./Components/Unauthorized";
import LinkPage from "./Components/LinkPage";

function App() {
  // const [currentForm, setCurrentForm]=useState('login');
  // const toggleForm=(formName)=>{
  //   setCurrentForm(formName);

  //}
  return (
    // <div className='App'>

    //     <Routes>
    //       <Route path='/login'>
    //         <Login />
    //       </Route>
    //       <Route path="/dashboard">
    //         <Dashboard />
    //       </Route>
    //       {/* <Route path='/dashboard' element={<Dashboard />} /> */}
    //       {/* <div className="App">
    //         {
    //           currentForm ==="login"? <Login onFormSwitch={toggleForm} />:<Register onFormSwitch={toggleForm} />
    //         }

    //       </div> */}
    //     </Routes>

    // </div>

    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* routes to be protected */}
        {/* <Route element={<RequireAuth />}> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="editor" element={<Editor />} />
        <Route path="admin" element={<Admin />} />
        <Route path="teamLeader" element={<TeamLeader />} />
        <Route path="teamMember" element={<TeamMem />} />
        {/*   */}

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
      {/* <Route path='/dashboard/:userID' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<ErrorPage />} /> */}
    </Routes>
  );
}

export default App;

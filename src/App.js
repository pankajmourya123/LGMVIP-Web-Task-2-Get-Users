import React, { useState } from "react";
import Loading from "./components/Loading";
import Data from "./components/Data";
import Header from "./components/Header"

function App() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadUsers=async()=> {
    
    const res = await fetch('https://reqres.in/api/users?page=1');
    const resJson = await res.json();
    setLoading(true)
    setTimeout(()=>{
      setUser(resJson.data)
      setLoading(false)
    }, 800)    
  }

  return (
    <>
    <Header data={loadUsers}/>
      {loading ? <Loading /> : <Data user = {users}/>}
    </>
  );
}

export default App;
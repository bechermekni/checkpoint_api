import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
   const [users, setUsers] = useState([]);
   useEffect(() => {
     axios
       .get("https://jsonplaceholder.typicode.com/posts")
       .then((users) => setUsers(users.data))
       .catch((err) => console.log(err));
   }, [users]);
  return (
    <div className="App">
      {users.map((user) => (
        <div className="container slide-fwd-center ">
          <h1>{user.title}</h1>
          <p>{user.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

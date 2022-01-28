import { useState, useEffect } from "react";
import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Content />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;


// 
// react - firebase practice
// source: https://www.youtube.com/watch?v=jCY6DH8F4oc
// import { useState, useEffect } from "react";
// import './App.css';
// import { db } from './firebase-config';
// import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

// function App() {
//   const [newName, setNewName] = useState("");
//   const [newAge, setNewAge] = useState(0);
//   const [users, setUsers] = useState([]);
//   const usersCollectionRef = collection(db, "users")

//   useEffect(() => {

//     const getUsers = async () => {
//       const data = await getDocs(usersCollectionRef);
//       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     }

//     getUsers();
//   }, []);

//   const creatUsers = async () => {
//     await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) })
//   }

//   const updateUser = async (id, age) => {
//     const userDoc = doc(db, "users", id)
//     const newField = { age: Number(age) + 1 }
//     await updateDoc(userDoc, newField)
//   }

//   const deleteUser = async (id) => {
//     const userDoc = doc(db, "users", id)
//     await deleteDoc(userDoc)
//   }

//   return (
//     <div className="App">

//       <input placeholder="name" onChange={(event) => { setNewName(event.target.value) }} />
//       <input placeholder="age" type="number" onChange={(event) => { setNewAge(event.target.value) }} />
//       <button onClick={creatUsers} >Create user</button>

//       {users.map((user) => {
//         return (
//           <div>
//             <p>{user.name}</p>
//             <p>{user.age}</p>
//             <button onClick={() => { updateUser(user.id, user.age) }}>Increase age</button>
//             <button onClick={() => { deleteUser(user.id) }}>Delete user</button>
//           </div>
//         )
//       })}

//     </div>
//   );
// }

// export default App;

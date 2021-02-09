import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

function App() {
  const [user, setUser] = useState({
    displayName: "Jack -z",
    email: "actionjacks22@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL:
      "https://avatars.githubusercontent.com/u/56847035?s=460&u=cd7f31cb12a42e16a095422ac21d24e5f8bbbc6e&v=4",
  });

  return (
    <div className="App">
      <Header userPhoto={user.photoURL} />
      <Sidebar />
    </div>
  );
}

export default App;

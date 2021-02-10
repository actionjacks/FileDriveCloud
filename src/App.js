import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import FilesView from "./components/filesView/FilesView";
import { auth, provider } from "./firebase";

function App() {
  const [user, setUser] = useState({
    displayName: "Jack -z",
    email: "actionjacks22@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL:
      "https://avatars.githubusercontent.com/u/56847035?s=460&u=cd7f31cb12a42e16a095422ac21d24e5f8bbbc6e&v=4",
  });
  const handleLogin = () => {
    if (!user) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
          console.log(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (user) {
      auth
        .signOut()
        .then(() => {
          setUser(null);
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <div className="app">
      {
        user ? (
          <>
            <Header userPhoto={user.photoURL} />
            <div className="app__main">
              <Sidebar />
              <FilesView />
            </div>
          </>
        ) : null
        // <div className="app__login">
        //   <img src={GDriveLogo} alt="Google Drive" />
        //   <button onClick={handleLogin}>Log in to Google Drive</button>
        // </div>
      }
    </div>
  );
}

export default App;

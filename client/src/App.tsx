import { Route, Routes, useNavigate } from "react-router-dom";
import { Home, Courses, Features, Tutorials, Login, Profile } from "./pages";
import { Header } from "./components/index";
import { useState, useEffect } from "react";
import axios from "axios";

const headerLinks = [
  {
    id: "header_1",
    linkName: "Home",
    linkTo: "",
    isActive: true,
  },
  {
    id: "header_2",
    linkName: "Features",
    linkTo: "features",
    isActive: true,
  },
  {
    id: "header_3",
    linkName: "Tutorials",
    linkTo: "tutorials",
    isActive: true,
  },
  {
    id: "header_4",
    linkName: "Courses",
    linkTo: "courses",
    isActive: true,
  },
];

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      console.log({ persons });
      console.log("app started");
    });
  }, []);

  const handleLogin = (emailValue: string, passwordValue: string) => {
    if (emailValue === "" && passwordValue === "") {
      alert("Please enter your email and password.");
      return;
    }

    // log user in the data base or create new user
    console.log("Log in", emailValue, passwordValue);

    setLoggedIn(true);
    navigate("");
  };

  const handleLogOut = () => {
    console.log("Log out");

    setLoggedIn(false);
    navigate("");
  };

  const handleStartForFree = () => {
    console.log("Handle trial");
  };

  return (
    <>
      <Header
        loggedIn={loggedIn}
        handleStartForFree={handleStartForFree}
        headerElements={headerLinks}
      />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="courses" element={<Courses />} />
        <Route path="tutorials" element={<Tutorials />} />
        <Route path="login" element={<Login onLogIn={handleLogin} />} />
        <Route path="profile" element={<Profile onLogOut={handleLogOut} />} />
      </Routes>
    </>
  );
}

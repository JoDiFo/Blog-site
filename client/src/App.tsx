import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Home,
  Courses,
  Features,
  Tutorials,
  Login,
  Register,
  Profile,
} from "./pages";
import { Header } from "./components/index";
import { useState, useEffect } from "react";

const SERVER_PORT = "http://localhost:8000/";

type HeaderElement = {
  id: string;
  linkName: string;
  linkTo: string;
  isActive: boolean;
};

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [headerLinks, setHeaderLinks] = useState<HeaderElement[]>([
    { id: "0", linkName: "", linkTo: "", isActive: true },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    getHeaderElements();
  }, []);

  const getHeaderElements = async () => {
    const url = SERVER_PORT + "headers";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setHeaderLinks(data))
      .catch((err) => console.log(err));
  };

  // const handleLogin = async (emailValue: string, passwordValue: string) => {
  //   if (emailValue === "" && passwordValue === "") {
  //     alert("Please enter your email and password.");
  //     return;
  //   }

  //   const url = SERVER_PORT + "login";

  //   await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email: emailValue, password: passwordValue }),
  //   })
  //     .then((res) => {
  //       console.log(res.status);
  //     })
  //     .catch((err) => console.log(err));

  //   setLoggedIn(true);
  //   navigate("");
  // };

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
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile onLogOut={handleLogOut} />} />
      </Routes>
    </>
  );
}

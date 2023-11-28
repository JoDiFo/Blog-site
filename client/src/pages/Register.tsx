import { useState } from "react";

const SERVER_PORT = "http://localhost:8000/";

async function handleRegister(email: string, password: string) {
  if (email === "" && password === "") {
    alert("Please enter your email and password.");
    return;
  }

  const url = SERVER_PORT + "register";

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((res) => {
      console.log(res.status);
    })
    .catch((err) => console.log(err));
}

function Register() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="w-1/3 h-3/4 border rounded-lg flex flex-col justify-evenly items-center shadow-md border-blue-500 px-20">
        <div className="w-fit">
          <h3 className="text-3xl font-bold">Register</h3>
        </div>
        <div className="w-full">
          <input
            type="text"
            className="border rounded-md w-full h-12 text-lg pl-1 border-gray-300 outline-blue-500 bg-gray-100"
            placeholder="Email"
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            className="border rounded-md w-full h-12 text-lg pl-1 border-gray-300 outline-blue-500 bg-gray-100"
            placeholder="Password"
            onChange={(e) => {
              setPasswordValue(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className="rounded-md bg-blue-500 px-6 py-2 text-white"
            onClick={() => handleRegister(emailValue, passwordValue)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;

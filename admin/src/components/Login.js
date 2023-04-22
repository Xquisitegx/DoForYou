import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");

    const postData = () => {
        axios.post("http://localhost:8000/api/admin/login", {
            username: username,
            password: password,
        },
        ).then((response) => {
            navigate("/view")
        }).catch(error => {
            console.log(error)
            if (!error.response.data.status) {
                setLogin("Invalid username or password!")
            }
        });
    }

    return (
        <div class="relative flex min-h-screen text-accent antialiased flex-col justify-center overflow-hidden bg-primary py-6 sm:py-12">
            <div class="relative py-3 sm:w-96 mx-auto text-center">
                <span class="text-2xl">ADMIN PANEL</span>
                <div class="mt-4 bg-primary shadow-xl border-secondary border border-solid rounded-lg text-left">
                    <div class="px-8 py-6 ">
                        <label class="block font-semibold"> Username </label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" class="text-primary border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <label class="block mt-3 font-semibold"> Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" class="text-primary border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />
                        <p className="text-red-400">{login}</p>
                        <div class="flex justify-between items-baseline">
                            <button onClick={postData} type="submit" class="mt-4 bg-secondary border text-white py-2 px-6 rounded-md hover:bg-primary hover:border">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
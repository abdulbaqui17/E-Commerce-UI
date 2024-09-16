import { Headers } from "../components/Headers";
import React, { useState } from "react";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import { cn } from "../lib/Utils";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const handleSubmit =async (e) => {
        e.preventDefault();
        const userData = {
            email,
            password
        }
    const response=await axios.post("http://localhost:3000/api/v1/users/signin",userData)
    try{
        console.log(response)
        if(response.data.token){
            console.log("sign in Successful:",response.data.token)
            localStorage.setItem("Token",response.data.token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            toast.success("Success message");
            navigate("/")
        }
        else{
            console.log("sign in error token:",response.data.message)
            toast.success(response.data.message)
        }
    }catch(err){
        console.error("error ",err)
        toast.success(err)
    }
    };

    return (
        
        <div className="bg-black text-white min-h-screen">
            <ToastContainer />
            {/* <Headers /> */}
            <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
                <h2 className="font-bold text-xl text-white">Welcome to Product Review</h2>
                <p className="text-white text-sm max-w-sm mt-2">
                    Sign in to Product Review if you do have an account to login
                </p>
                <form className="my-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email" className="text-white">Email Address</Label>
                        <Input
                            id="email"
                            placeholder="projectmayhem@fc.com"
                            type="email"
                            className="font-semibold text-black"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password" className="text-white">Password</Label>
                        <Input
                            id="password"
                            placeholder="••••••••"
                            type="password"
                            className="font-semibold text-black"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </LabelInputContainer>

                    <div className="bg-gradient-to-r from-transparent font-semibold text-black bg-white to-transparent my-8 h-[1px] w-full" />


                    <button
                        className="bg-white relative group/btn w-full text-black rounded-md h-10 font-medium shadow-md"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Sign in &rarr;
                        <BottomGradient />
                    </button>
                </form>
                <p>If you don't have an account ?<Link to={"/signup"} className="hover:underline hover:text-slate-300"> Sign up</Link></p>
            </div>
        </div>
    );
};

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({ children, className }) => {
    return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

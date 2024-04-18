import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from '../assets/DP.jpg'
import NavOpen from "./nav-open";
import CheckAuth from "../auth/checkauth";
import toast from "react-hot-toast";
import axios from "axios";

const Nav = () => {
    const {auth} = CheckAuth()
    const [open,setOpen] = useState(false);
    const navigate = useNavigate();
    const logouthandler = () => {
        axios.get("http://localhost:3000/api/auth/logout", { withCredentials: true }).then((res) => {
            if (res.data == 'Logout sucessfull') {
                const toastId = toast.success(res.data);
                localStorage.clear();
                setTimeout(() => {
                    toast.dismiss(toastId);
                    navigate('/login');
                }, 1000);
            }
        })
    }
    return(
        <div className="bg-primary h-[80px] min-w-full flex justify-between items-center md:px-[50px] px-5 sticky top-0">
            <Link to={"/"} className="font-semibold text-[19px] md:text-[21px] text-white">Blogger</Link>
            <ul className="flex items-center gap-[3rem] text-[16px] md:text-[19px] text-white">
                {
                    !auth ? 
                    <>
                    <Link to="/login" className="cursor-pointer">Login</Link>
                    <Link to='/signup' className="cursor-pointer">Signup</Link>
                    </>
                    : 
                    <>
                    <Link to={"/"}>Home</Link>
                    <Link onClick={logouthandler}>Logout</Link>
                    <img onClick={()=>setOpen(preVal => !preVal)} className="w-[40px] h-[40px] object-cover rounded-full cursor-pointer" src={img} alt="" />
                    </>
                }
            </ul>
            {open && <NavOpen setOpen={setOpen} logouthandler={logouthandler}/>}
        </div>
    )
}

export default Nav;
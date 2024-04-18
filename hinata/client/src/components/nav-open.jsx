import  { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const NavOpen = ({ setOpen , logouthandler }) => {
    const navclose = () => {

        setOpen(false)

    }

    
    return (
        <div className="absolute top-[90px] right-[50px] bg-secondary pt-5 w-[170px] rounded-md duration-500 flex flex-col gap-5">
            <Toaster />
            <Link className="px-5" to="/" onClick={navclose} >Home</Link>
            <Link className="px-5" to="/create" onClick={navclose} >Create</Link>
            <Link className="px-5" to="/pfp" onClick={navclose} >Profile</Link>
            <button onClick={logouthandler} className="bg-red-500 py-[10px] text-white duration-300 hover:bg-red-500/80 ">Logout</button>
        </div>
    )
}

export default NavOpen;
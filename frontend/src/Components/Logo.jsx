import { useNavigate } from "react-router-dom"


export const Logo = ()=>{
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/");
    }
    return (
        <p onClick={handleClick} className="text-lg lg:text-3xl cursor-pointer text-red-500 font-bold pr-4"> <span className="text-orange-400 underline">BURUD</span> BANDHAN</p>
    )
}
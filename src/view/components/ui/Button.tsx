import { Link } from "react-router-dom";
import { ButtonProps } from "../../../@types/button";


const Button:React.FC<ButtonProps>=({text,to,className,onClick,type="button"})=>{
    return(
        <div className="py-4">
            <Link to={`${to}`} className={className} onClick={onClick} type={type}>
                {text}
            </Link>
        </div>
    )
}

export default Button;
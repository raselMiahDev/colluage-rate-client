import { ImageConstants } from "../../../../constants/image.constants";
import { EmployeeCardProps } from "../../../../@types/profile.type";
import { Link } from "react-router-dom";

export default function Card(props:EmployeeCardProps){
    const {name,currentRole,company,rating,reviews}=props
    return(
        <div className="border bg-white rounded-lg p-5">
            <div className="flex gap-4">
                <img src={ImageConstants.Avater} alt="Profile Image" />
                <div className="text-slate-600 text-md">
                    <h2>Name : {name}</h2>
                    <p>Role : {currentRole}</p>
                    <p>Company : {company}</p>
                    <p>Rating : {rating}</p>
                    <p>Reviews : {reviews}</p>

                    <Link to={`/single-profile/${props.id}`} className="text-blue-500 hover:underline">
                        View Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}
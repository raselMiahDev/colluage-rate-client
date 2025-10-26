import { ImageConstants } from "../../../../constants/image.constants";
import { EmployeeCardProps } from "../../../../@types/profile.type";
import Button from "../../../components/ui/Button";

export default function Card(props:EmployeeCardProps){
    const {name,currentRole,company,rating,reviews}=props
    return(
        <div className="border bg-white rounded-lg p-5">
            <div className="block md:flex gap-4">
                <img src={ImageConstants.Avater} alt="Profile Image" />
                <div className="text-slate-600 text-lg">
                    <div>
                    <h2 className="font-bold">Name : {name}</h2>
                    <p>Role : {currentRole}</p>
                    <p>Company : {company}</p>
                    <p>Rating : {rating}</p>
                    <p>Reviews : {reviews}</p>
                    </div>
                    
                    <Button text="View Profile" className="px-5 py-2 bg-blue-400 hover:bg-blue-500 transition duration-200 ease-in-out text-white rounded-md" to={`/single-profile/${props.id}`}/>
                
                </div>
            </div>
        </div>
    )
}
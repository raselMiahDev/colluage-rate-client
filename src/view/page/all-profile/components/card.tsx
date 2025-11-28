import { EmployeeCardProps } from "../../../../@types/profile.type";
import Button from "../../../components/ui/Button";

export default function Card(props:EmployeeCardProps){
    const {name,image,currentRole,company,rating,reviews}=props
    return(
        <div className="border bg-white rounded-lg p-5">
            <div className="flex gap-4">
                <img src={image} alt="Profile Image" className="rounded-lg"/>
                <div className="text-slate-700">
                    <div>
                    <h2 className="font-bold text-sm md:text-lg text-green-700">{name}</h2>
                    <p className="text-md">Role : {currentRole}</p>
                    <p className="text-md">Company : {company}</p>
                    <p className="text-md">Rating : {rating}</p>
                    <p className="text-md">Reviews : {reviews}</p>
                    </div>
                    
                    <Button text="View Profile" className="px-5 py-2 bg-blue-400 hover:bg-blue-500 transition duration-200 ease-in-out text-white rounded-md" to={`/single-profile/${props.id}`}/>
                
                </div>
            </div>
        </div>
    )
}
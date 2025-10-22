import { ImageConstants } from "../../../../constants/image.constants";

export default function Card(props:any){
    const {name,currentRole,company,rating,reviews}=props.userData
    return(
        <div className="border bg-white rounded-lg p-5">
            <div className="flex gap-4">
                <img src={ImageConstants.Avater} alt="Profile Image" />
                <div>
                    <h2>{name}</h2>
                    <p>{currentRole}</p>
                    <p>{company}</p>
                    <p>{rating}</p>
                    <p>{reviews}</p>
                </div>
            </div>
        </div>
    )
}
import { useState } from "react";


function AnimalCard(props) {
    
    const animal_class = props.animal_class;
    const animal_img = props.animal_img;
    return(    
    <>
        <div className="card" style={{"width": "18rem"}}>
            <img src={"data:image/jpeg;base64,"+ animal_img} alt="Base64 Image" className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{animal_class}</h5>
            </div>
        </div>
    </>
    )
}

export default AnimalCard;

function AnimalCard(props) {
    
    const animal_class = props.animal_class;
    const animal_img = props.animal_img;
    return(    
    <>
        <div className="card" style={{"width": "300px", "marginLeft": "10px", "marginRight" : "10px", "marginTop" : "10px","float":"left", padding:"30px", backgroundColor:"#ffffba", borderRadius:"20px"}}>
            <img src={"data:image/jpeg;base64,"+ animal_img} alt="Base64 Image" className="card-img-top" style={{marginBottom:"10px"}}/>
            <div className="card-body" style={{"color": "black"}}>
                <h5 className="card-title">Type: {animal_class}</h5>
                <h5 className="card-title" style={{"fontSize": "1em"}}>{props.animal_time && "Time Spotted: " + props.animal_time}</h5>
                <h5 className="card-title" style={{"fontSize": "1em"}}>{props.animal_location && "Location Spotted: " + props.animal_location}</h5>
            </div>
        </div>
    </>
    )
}

export default AnimalCard;
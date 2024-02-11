
function AnimalCard(props) {
    
    const animal_class = props.animal_class;
    const animal_img = props.animal_img;
    return(    
    <>
        <div className="card" style={{"width": "1000px", "marginLeft": "10px", "marginRight" : "10px", "marginTop" : "10px","float":"left"}}>
            <img src={"data:image/jpeg;base64,"+ animal_img} alt="Base64 Image" className="card-img-top"/>
            <div className="card-body" style={{"background": "	#baffc9", "color": "#ffb3ba"}}>
                <h5 className="card-title">{animal_class}</h5>
                <h5 className="card-title" style={{"fontSize": "1em"}}>{props.animal_longitude && "Longitude: " + props.animal_longitude}</h5>
                <h5 className="card-title" style={{"fontSize": "1em"}}>{props.animal_latitude  && "Latitude: " + props.animal_latitude}</h5>
                <h5 className="card-title" style={{"fontSize": "1em"}}>{props.animal_time && "Time Spotted: " + props.animal_time}</h5>
            </div>
        </div>
    </>
    )
}

export default AnimalCard;
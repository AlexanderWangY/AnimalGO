import AnimalCard from "./AnimalCard";
import './AnimalGroup.css';
// {items:[], heading: string}


function AnimalGroup(props) {
    return (
        <div className="animal-group">
            {props.items.map(item => (
                <AnimalCard 
                    animal_class={item["class"]} 
                    animal_img={item["image"]} 
                    animal_location={item["location"]} 
                    animal_time={item["time"]}
                    key={item["_id"]} 
                />
            ))}
        </div>
    );
}

export default AnimalGroup;
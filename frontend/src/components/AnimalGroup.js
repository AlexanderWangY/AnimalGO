import { useState } from "react";
import AnimalCard from "./AnimalCard";
// {items:[], heading: string}


function AnimalGroup(props) {

    return(    
    <>
        <h1>LIST</h1>
        <ul className="list-group">
            {props.items.map(item => <AnimalCard animal_class = {item["class"]} animal_img = {item["image"]} key = {item["_id"]}></AnimalCard>)}
        </ul>;
    </>
    )
}

export default AnimalGroup;
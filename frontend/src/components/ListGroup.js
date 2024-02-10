import { useState } from "react";
// {items:[], heading: string}


function ListGroup(props) {

    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return(    
    <>
        <h1>LIST</h1>
        <ul className="list-group">
            {props.items.map((item, index) => <li className ={selectedIndex === index? 'list-group-item active' : 'list-group-item'} key={item} onClick={() => {setSelectedIndex(index);props.onSelectItem(item);}}>{item}</li>)}
        </ul>;
        
    </>
    )
}

export default ListGroup;
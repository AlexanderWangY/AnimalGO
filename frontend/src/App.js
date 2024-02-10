import logo from './logo.svg';
import './App.css';
import ListGroup from "./components/ListGroup";
import AnimalCard from "./components/AnimalCard";
import AnimalGroup from "./components/AnimalGroup";
import { useState, useEffect} from "react";
function App() {

  const [animal_items, setAnimalList] = useState([]);
  const [inputText, setInputText] = useState([]);
  const handleClick = async () => {
    try {
      // Make the API call
      let url = 'http://localhost:3000/get-data?';
      url = url + "class="+inputText;

      const response = await fetch(url);
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      // Parse the JSON response
      const jsonData = await response.json();
      
      // Log the fetched data to the console
      console.log('Fetched data:', jsonData);
      setAnimalList(jsonData);
      setInputText("");
      // Add your logic to handle the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleInputText = (event) =>{
    setInputText(event.target.value);
  };

  return (<>

        <input
        type="text"
        value={inputText}
        onChange={handleInputText}
        placeholder="Enter text here"
      />
    <button onClick={()=>{handleClick();}}>Query</button>
    <div>{animal_items.length !== 0 && <AnimalGroup items={animal_items} ></AnimalGroup>}
    </div>
    </>
  );
}

export default App;

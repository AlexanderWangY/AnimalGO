
import './App.css';
import AnimalGroup from "./components/AnimalGroup";
import { useState } from "react";
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

  return (<><div class="wrapper">
  <h1>
  ANIMAL GO DATABASE PORTAL
</h1>
  </div>


  <div class="wrapper">
        <input
        type="text"
        value={inputText}
        onChange={handleInputText}
        placeholder="Enter text here"
        className="input"
      />
    <button onClick={()=>{handleClick();}}></button>
    </div>
        <div>{animal_items.length !== 0 && <AnimalGroup items={animal_items} ></AnimalGroup>}
      </div>
    </>
  );
}

export default App;

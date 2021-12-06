import "./styles.css";
import {useEffect, useState, useContext} from 'react';
import { petItem } from "../../petItem";
import PetsOrderContext from "../../../context/petsOrderContext";

export const PetsHomePage = () => {
  
  const [pets, setPets] = useState([]);

  const globalstate = useContext(PetsOrderContext);

  useEffect(
    () => {
      getPets();
    }, []
  );

const getPets = async() => {
  try{
    const response = await fetch ('https://firestore.googleapis.com/v1/projects/pets-api-40916/databases/(default)/documents/pets/');
    const data = await response.json();
    console.log(data);
    const formattedData = data.documents.map((item) => {
      return item.fields
    });

  console.log(formattedData);

  setPets(formattedData);

  globalstate.initalizePets(formattedData);

  }catch(err){
    console.log (err)
  }
}

  return (
    <div className="pets-page">
      <h1 className="pets-title">All Pets</h1>
      <div className="pets-container">
        {pets.map((pet) => (
          <petItem image = {petItem.image.stringValue} name={petItem.name.stringValue} age={petItem.age.stringValue} type={petItem.type.stringValue}></petItem>
        ))}
      </div>
      All Pets
    </div>
  );
};

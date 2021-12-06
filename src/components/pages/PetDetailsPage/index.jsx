import './styles.css';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import PetsOrderContext from '../../../context/petsOrderContext';

export const  PetDetailsPage = (props) =>{
    const {id} = useParams();

    const globalstate = useContext(PetsOrderContext);

    const [pet, setPet] = useState ({});

    useEffect(() => {
        const pet = globalstate.pets.find(
            (pet) => pet.id.stringValue === id
        );
        setPet(pet);
    }, [])

    if (pet) {
        return(
            <div className="pets-page">
                <h1 className="pets-title"> {pet.name?.stringValue} </h1>
                <img src={pet.image?.stringValue} alt = "pet-photo"/>
            </div>
        )
    }else {
        return <p> No Pet with this id </p>
    }

}

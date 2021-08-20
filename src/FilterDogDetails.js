import React from "react";
import { useParams, Redirect } from "react-router-dom";
import DogDetails from "./DogDetails";

function FilterDogDetails({dogs}){
    
    const { name } = useParams();
    if(name){
        let currentDog = dogs.find(d => (
            d.name.toLowerCase() === name.toLowerCase()
        ))
            return <DogDetails dog={currentDog} />;
    }

    return null;

};

export default FilterDogDetails;
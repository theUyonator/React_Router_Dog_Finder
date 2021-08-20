import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./DogList.css";

function DogList({dogs}){
    if(!dogs) return <Redirect to="/dogs"/>
    return (
        <div className=" row DogList">
            <h1>Take a look at our dogs:</h1>
            <ul>
                {dogs.map(dog => (
                   <li key={dog.name}>
                       <img src={dog.src} alt={dog.name} />
                       <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                    </li>
                ))}
            </ul>
           
            <Link to="/dogs">Go Back</Link>
        </div>
    );

};

export default DogList;
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState ([
     {
        name: "Papa Smurf",
        url:"https://toppng.com/uploads/preview/papa-smurf-11530967122hcf0e9svcu.png",
     },

     {
      name: "Smurfette",
      url:"https://img.favpng.com/9/10/13/papa-smurf-smurfette-gargamel-the-smurfs-png-favpng-mPvKHhccR6GCYygDNR8gMHp5t.jpg",
   },

   {
    name: "Brainy Smurf",
    url:"https://toppng.com/uploads/preview/brainy-smurf-11530967243erjt7w2cpq.png",
 },

 {
  name: "Clumsy Smurf",
  url:"https://static.wikia.nocookie.net/smurfs/images/5/58/Clumsy_Smurf_2017Movie.png/revision/latest?cb=20161016004824",
},

{
  name: "Grouchy Smurf",
  url:"https://static.wikia.nocookie.net/smurfs/images/0/0c/Grouchy_Smurf_2021_TV_Series_%282%29.png/revision/latest?cb=20210625113609",
},

    ]);

    const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete);
      
    };

    const outOfFrame = (name) => {
      console.log(name + " left the screen!");   
    };



  return (
     <div className="tinderCards">
     <div className="tinderCards_cardContainer">
      {people.map((person) => ( 
      <TinderCard 
        className="swipe"
        key={person.name}
        preventSwipe={["up", "down"]}
        onSwipe={(dir) => swiped(dir, person.name)}
        onCardLeftScreen={() => outOfFrame(person.name)}>

      <div
           style={{ backgroundImage: 'url(${person.url})'}}
            className="card">
           
           <h3>{person.name}</h3>
           
           </div>   
      </TinderCard>
      
    ))}

     </div>
     </div>
  );
  
}

export default TinderCards;
import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({mainData, searchInput, newArray}) {



  const planeteers = newArray.map((planeteer) => {
    return (<Planeteer
    key={planeteer.id}
    name={planeteer.name}
    fromUSA={planeteer.fromUSA}
    born={planeteer.born}
    bio={planeteer.bio}
    quote={planeteer.quote}
    image={planeteer.pictureUrl}
    twitter={planeteer.twitter}
    />)
  })

  return (
    <ul className="cards">
      {planeteers}
    </ul>
  );
}

export default PlaneteersContainer;

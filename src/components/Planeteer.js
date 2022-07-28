import React, {useState} from "react";

// key={planeteer.id}
// name={planeteer.name}
// fromUSA={planeteer.fromUSA}
// born={planeteer.born}
// bio={planeteer.bio}
// quote={planeteer.quote}
// image={planeteer.pictureUrl}
// twitter={planeteer.twitter}

function Planeteer({name, fromUSA, born, bio, quote, image, twitter}) {

  const [bioDisplay, setBioDisplay] = useState(true)

  const toggleBioQuote = () => {
    setBioDisplay(!bioDisplay)
    // console.log(bioDisplay)
  }


  return (
    <li className="cards__item">
      <div className="card">
        <img
          onClick = {toggleBioQuote}
          src={image}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          {bioDisplay ? (<p className="card__text">Bio: {bio}</p>):(<p className="card__text">Quote: {quote}</p>)
          }
          <div className="card__detail">
            <p>{twitter}</p> <br/>
            <p>
              {
                fromUSA ? "From the US!" : "From Abroad!"
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;

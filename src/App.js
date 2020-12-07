import React from "react";
import "./styles.css";
import { useState } from "react";

const foodLibrary = {
  Breakfast: [
    { name: "Vidyarthi Bhavan ,Gandhi Bazar", rating: "4.5/5" },
    { name: "Central Tiffen Room (CTR) ,Malleshwaram", rating: "4/5" }
  ],

  Lunch: [
    {
      name: "Go Native ,Jayanagar 4th Block",
      rating: "3.5/5"
    },
    {
      name: "Burma Burma, Indiranagar",
      rating: "4.5/5"
    }
  ],
  Cafe: [
    {
      name: "Dyu Art Cafe ,Kormangla",
      rating: "4.4/5"
    },
    {
      name: "Yogisthaan, Indiranagar",
      rating: "4.4/5"
    }
  ],
  Beverages: [
    {
      name: "Hard Rock Cafe, MG Road",
      rating: "3/5"
    },
    {
      name: "Tipsy Bull, JP Nagar",
      rating: "4.1/5"
    }
  ],
  Dinner: [
    {
      name: "NH8 , Indiranagar",
      rating: "3/5"
    },
    {
      name: "Patio 805 , Jayanagar",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Dinner");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Bangalore FoodGuide </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        I have lived in Bangalore for over 20 years and this is my suggestion to{" "}
        <br /> experience a gastronomical delight around the city!!{" "}
      </p>

      <div>
        {Object.keys(foodLibrary).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#D2B48C",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodLibrary[selectedGenre].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

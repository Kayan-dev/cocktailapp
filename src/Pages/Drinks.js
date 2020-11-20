import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Details() {
  const [detail, setDetail] = useState([]);
  const params = useParams();

  console.log("PAAR", params);

  useEffect(() => {
    const getDetailsByName = async () => {
      const strDrink = params.strDrink;
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`
      );
      console.log("RESPD", response);
      setDetail(response.data.drinks);
    };
    getDetailsByName();
  }, [params.strDrink]);
  console.log("DRINKS", detail);

  if (!detail) return <div>Loading... or non-existent</div>;

  return (
    <div>
      <h1>Also TEST</h1>
      {detail.map((drink, index) => {
        return (
          <div key={drink.idDrink}>
            <h2>{drink.strDrink}</h2>
            <h2>{drink.strAlcoholic}</h2>
            <img alt={drink.strDrinkThumb} src={drink.strDrinkThumb}></img>
          </div>
        );
      })}
    </div>
  );
}

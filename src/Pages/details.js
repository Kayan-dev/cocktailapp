import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Details() {
  const [detail, setDetail] = useState([]);
  const params = useParams();
  console.log("par", params);

  useEffect(() => {
    const getDetailsByName = async () => {
      const idDrink = params.idDrink;
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
      );
      console.log("Responding", response);
      setDetail(response.data.drinks);
    };
    getDetailsByName();
  }, [params.idDrink]);
  console.log("DETAILS", detail);

  if (!detail) return <div>Loading...</div>;

  return (
    <div>
      <h1>TESTING</h1>
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

import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Images() {
  const [filtered, setFiltered] = useState(null);
  const params = useParams();
  console.log("PARA", params);

  useEffect(() => {
    const getCategorybyName = async () => {
      const categoryDrink = params.categoryDrink;
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryDrink}`
      );
      console.log("RESPONSE", response);
      setFiltered(response.data.drinks);
    };
    getCategorybyName();
  }, [params.categoryDrink]);

  if (!filtered) return <div>Loading... or non-existent</div>;

  return (
    <div>
      {filtered.map((drink, index) => {
        return (
          <Link key={index} to={`/details/${drink.idDrink}`}>
            <div>
              <h2>{drink.strDrink}</h2>
              {/* <img alt={drink.strDrinkThumb} src={drink.strDrinkThumb}></img> */}
            </div>
          </Link>
        );
      })}
    </div>
  );

  // <div>
  //   {/*Make a link so you can send the user to a details page */}
  //   {filtered.map((drink) => {
  //     return (
  //     <Link>
  //       <div>
  //           {/* <img alt="cocktail image" src={drink.strDrinkThumb}></img> */}
  //           <h2>{drink.strDrink}</h2>
  //           );
  //       </div>
  //     </Link>
  //   }
  //   </div>

  //     )
}

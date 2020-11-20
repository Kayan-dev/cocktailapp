import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Cocktail() {
  const [searchText, set_searchText] = useState([]);
  const [searchState, set_searchState] = useState("idle");
  const [cocktailState, set_cocktailState] = useState([]);

  const params = useParams();
  const history = useHistory();

  console.log("PARAMS", params);
  console.log("SEARCH", searchText);

  const search = async (e) => {
    console.log("HEY!");
    e.preventDefault();
    const routeParam = encodeURIComponent(searchText);
    history.push(`/details/${routeParam}`);
    console.log("HISTORY:", history);
    console.log("Test Param:", routeParam);
  };

  useEffect(() => {
    async function fetchCocktails() {
      const queryParam = encodeURIComponent(params.searchtext);

      set_searchState("Status: searching");

      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );

      console.log("what is the result", response);
      set_searchState("Status: done!");
      set_cocktailState(response.data.drinks);
    }
    fetchCocktails();
  }, [params]);

  const setSearchUrl = async (e) => {
    e.preventDefault();
    const parsedTerm = encodeURIComponent(searchText);
    history.push(`/drinks/${parsedTerm}`);
  };

  return (
    <div classname="Category">
      <h1>List of cocktail categories</h1>
      <div>{searchState}</div>

      <form onSubmit={setSearchUrl}>
        <input
          type="text"
          value={searchText}
          placeholder="Search now"
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        <h1>TEST</h1>
        {cocktailState.map((tail, index) => {
          return (
            <Link key={index} to={`/images/${tail.strCategory}`}>
              <div>
                <h1>{tail.strCategory}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

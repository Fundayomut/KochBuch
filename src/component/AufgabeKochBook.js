import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyModal from "./ModalMy";
import ModalMy from "./ModalMy";


export default function AufgabeKochBook() {
  const APP_ID = '8b8e8a1e';
  const APP_KEY = '5fc119115d877bf753b2f99f094b7eb1';

  const [inputValue, setInputValue] = useState("");
  const [recipie, setRecipe] = useState([]);
  //const [select, setSelect] = useState("");


  /*
  https://api.edamam.com/search?q=${inputValue}&app_id=${APP_ID}&app_key=${APP_KEY}
  https://www.themealdb.com/api/json/v1/1/filter.php?c=${inputValue}
  */
  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${inputValue}&app_id=8b8e8a1e&app_key=5fc119115d877bf753b2f99f094b7eb1`)
      .then((res) => res.json())
      .then((json) => {
        setRecipe(json.hits);
      });
  }, [inputValue]);

  console.log("recipe list",recipie)

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

/*
  const handleSelect = (promtselect) => {
    setSelect(promtselect);
  };
  */
  

  return (
    <div>
      <h1>Koch Book</h1>
      <label>Search Meal:</label>
      <input type="text" onChange={handleChange} value={inputValue} placeholder="Zb: Pasta..." />
      <div className="maincontainer">
        {recipie &&
          recipie.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  id={item.recipie}
                  className="card"
                 
                >
                  <Card.Img
                    variant="top"
                    src={item.recipe.image}
                    style={{ width: "300px" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.recipe.label}</Card.Title>
                    <Card.Link href={item.recipe.url}>Go to rezept</Card.Link>
                    <ModalMy name={item.recipe} />
                    {/*<Button 
                      key={index}
                      className="cardbutton"
                      variant="primary"
                      onClick={() => handleSelect(item)}
                    >
                      Go Recipie
                    </Button>*/}
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
}

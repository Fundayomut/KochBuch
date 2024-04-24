import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyModal from "./ModalMy";
import ModalMy from "./ModalMy";


export default function AufgabeKochBook() {
  //const APP_ID = '8b8e8a1e';
  //const APP_KEY = '5fc119115d877bf753b2f99f094b7eb1';

  const [inputValue, setInputValue] = useState("");
  const [recipie, setRecipe] = useState([]);
  const [select, setSelect] = useState("");


  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${inputValue}`)
      .then((res) => res.json())
      .then((json) => {
        setRecipe(json.meals);
      });
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  console.log("recipie liste", recipie);


/*
  const handleSelect = (promtselect) => {
    setSelect(promtselect);
  };
  */
  console.log(select);

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
                  id={item.idMeal}
                  className="card"
                  style={{ width: "18rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={item.strMealThumb}
                    style={{ width: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.strMeal}</Card.Title>
                    <Card.Link href={item.strMealThumb}>link</Card.Link>
                    <Card.Text>{item.strInstructions}</Card.Text>
                    <ModalMy name={item.strMeal} />
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

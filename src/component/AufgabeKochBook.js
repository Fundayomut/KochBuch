import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyModal from "./ModalMy";
import ModalMy from "./ModalMy";
import { CardText } from "react-bootstrap";
import Header from "./Header";
import RandomMeal from "./RandomMeal";


export default function AufgabeKochBook() {
  const APP_ID = '8b8e8a1e';
  const APP_KEY = '5fc119115d877bf753b2f99f094b7eb1';

  const [inputValue, setInputValue] = useState("");
  const [recipie, setRecipe] = useState([]);


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


  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="maindiv">
      <h1>Koch Buch</h1>
      <label>Search Meal:</label>
      <input type="text" onChange={handleChange} value={inputValue} placeholder="Zb: Pasta..." />
      <div className="container">
      <div>
      <RandomMeal/>
      </div>
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
                  
                    <CardText style={{marginTop:"10px"}}>
                      <h5>{item.recipe.dishType}</h5>
                      <h6>{item.recipe.cuisineType}</h6>
                      <h6>{item.recipe.dietLabels} / Calorie :{parseInt(item.recipe.calories)} </h6>
                      </CardText>
                  </Card.Body>
                  <Card.Footer style={{padding:"0px" , borderTop:"none"}}>
                  <ModalMy name={item.recipe.label}
                    health={item.recipe.healthLabels}
                    type={item.recipe.mealType}/>
                  </Card.Footer>
                  <Card.Link  href={item.recipe.url}>Go to rezept</Card.Link>
                </Card>
              </div>
            );
          })}
          </div>
      </div>
    </div>
    </div>
  );
}

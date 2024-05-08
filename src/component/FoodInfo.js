import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { CardText } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Detail from "./Detail";
import ModalMy from "./ModalMy";


export default function FoodInfo() {
  const [recipes, setRecipe] = useState([]);
  const { inputValue } = useParams();
  const [selectRecipes,setSelectRecipes]=useState()

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${inputValue}&app_id=8b8e8a1e&app_key=5fc119115d877bf753b2f99f094b7eb1`
    )
      .then((res) => res.json())
      .then((json) => {
        setRecipe(json.hits);
      });
  }, [inputValue]);

  console.log("recipes foodinfo ", recipes);

  {/*
  const handleSelect =(selectRecipes)=>{
  setSelectRecipes(selectRecipes)}
  console.log("selecRecipes-->",selectRecipes)*/}

  return (
    <div>
      <div className="maincontainer">
        {recipes &&
          recipes.map((item, index) => {
            console.log("label-->",item.recipe.label)
          console.log("item-->", item)
            return (
              <div key={index}>
                <Card id={item.recipe.label} className="card" /*onClick={()=>handleSelect(item.recipe)}*/>
                  <Card.Img
                    variant="top"
                    src={item.recipe.image}
                    style={{ width: "300px" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.recipe.label}</Card.Title>
                    <CardText style={{ marginTop: "10px" }}>
                      <h5>{item.recipe.dishType}</h5>
                      <h6>{item.recipe.cuisineType}</h6>
                      <h6>
                        {item.recipe.dietLabels} / Calorie :
                        {parseInt(item.recipe.calories)}{" "}
                      </h6>
                    </CardText>
                  </Card.Body>
                  <Card.Footer
                    style={{ padding: "0px", borderTop: "none" }}
                  ></Card.Footer>
                  <ModalMy
                  name={item.recipe.label}
                  health={item.recipe.healthLabels}
                  type={item.recipe.mealType}
                />
                  {/*<Card.Link href={item.url}>Go to rezept</Card.Link>
                  <Link to={`/FoodInfo/Detail/${item.recipe.label}`}>
                    <Button > Go to Information</Button></Link>
                     <Detail recipe={selectRecipes} />*/}
                     <Card.Link href={item.recipe.url}>Go to rezept</Card.Link>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
}

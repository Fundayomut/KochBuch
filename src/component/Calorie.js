import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { CardText } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalMy from "./ModalMy";

export default function Calorie() {

  const [calorie, setCalorie] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (calorie !== "") {
      fetch(
        `https://api.edamam.com/search?q=${calorie}&app_id=8b8e8a1e&app_key=5fc119115d877bf753b2f99f094b7eb1`
      )
        .then((res) => res.json())
        .then((json) => {
          setData(json.hits);
        });
    }
  }, [calorie]);

  console.log("data", data);

  return (
    <div>
      <div className="typeheaderdiv">
        <input
          type="number"
          onChange={(e) => setCalorie(e.target.value)}
          value={calorie}
          placeholder="Search Under Calorie Zb:3000 "
        />
      </div>
      <div className="typemaindiv">
        {data.map((item) => {
          const recipe = item.recipe;
          if (recipe && parseInt(recipe.calories) < parseInt(calorie)) {
            return (
              <Card className="card">
                <Card.Img
                  variant="top"
                  src={recipe.image}
                  style={{ width: "300px" }}
                />
                <Card.Body>
                  <Card.Title>{recipe.label}</Card.Title>
                  <CardText style={{ marginTop: "10px" }}>
                    <h5>Calorie: {parseFloat(recipe.calories).toFixed(0)}</h5>
                    <hr />
                    <div className="caloriecardtext">
                      <h6>{recipe.dishType}</h6>
                      <h6>Total Ingredients: {recipe.ingredients.length}</h6>
                      <h6>{recipe.cuisineType}</h6>
                    </div>
                  </CardText>
                </Card.Body>
                <Card.Footer
                  style={{ padding: "0px", borderTop: "none" }}
                ></Card.Footer>
                <ModalMy name={item.recipe.label}
                    health={item.recipe.healthLabels}
                    type={item.recipe.mealType}/>
                <Card.Link href={recipe.url}>Go to rezept</Card.Link>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
}

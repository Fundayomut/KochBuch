import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ModalMy from "./ModalMy";
import { CardText } from "react-bootstrap";


export default function Breakfast() {

  const [breakfast, setBreakfast] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&mealType=Breakfast&app_id=8b8e8a1e&app_key=5fc119115d877bf753b2f99f094b7eb1`
    )
      .then((res) => res.json())
      .then((json) => {
        setBreakfast(json.hits);
      });
  }, []);

  console.log("breakfast", breakfast);
  return (
    <div className="typeheaderdiv">
      <h1 className="typeheader">Breakfast</h1>
      <div className="typemaindiv">
        {breakfast.map((item, index) => {
          return (
            <Card key={index} className="card">
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
              <Card.Footer style={{ padding: "0px", borderTop: "none" }}>
                <ModalMy
                  name={item.recipe.label}
                  health={item.recipe.healthLabels}
                  type={item.recipe.mealType}
                />
              </Card.Footer>
              <Card.Link href={item.recipe.url}>Go to rezept</Card.Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import { CardText } from "react-bootstrap";

export default function RandomMeal() {

  const [meal, setMeal] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&mealType=Dinner&app_id=8b8e8a1e&app_key=5fc119115d877bf753b2f99f094b7eb1`
    )
      .then((res) => res.json())
      .then((json) => {
        setMeal(json.hits);
      });
  }, []);

  const randomIndex = Math.floor(Math.random() * meal.length);

  console.log("random", randomIndex);

  return (
    <div>
      <Button className="rundombutton" variant="primary" onClick={handleShow}>
        Random Selection
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Rundom Meal</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {meal.length > 0 && (
            <div>
              <Card className="card">
                <Card.Img
                  variant="top"
                  src={meal[randomIndex]?.recipe.image}
                  style={{ width: "300px" }}
                />
                <Card.Body>
                  <Card.Title>{meal[randomIndex]?.recipe.label}</Card.Title>

                  <CardText style={{ marginTop: "10px" }}>
                    <h5>{meal[randomIndex]?.recipe?.dishType}</h5>
                    <h6>{meal[randomIndex]?.recipe?.cuisineType}</h6>
                  </CardText>
                </Card.Body>
                <Card.Footer
                  style={{ padding: "0px", borderTop: "none" }}
                ></Card.Footer>
                <Card.Link href={meal[randomIndex]?.recipe?.url}>
                  Go to rezept
                </Card.Link>
              </Card>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

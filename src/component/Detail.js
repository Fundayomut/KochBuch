/*import { useParams } from 'react-router-dom';
import Card from "react-bootstrap/Card";

export default function Detail({recipe}) {
  const { label }=useParams();
  console.log("detail select rezept-->",recipe)

  return (
    <div className="maincontainer">
    <div>
       <Card >
       <Card.Header>
        <Card.Title>{recipe.label}</Card.Title>
        </Card.Header>
         <Card.Body>
          <h4>Mealtime :</h4>
          <ul className="type">
            {recipe.dishType.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h4>Healty Information :</h4>
          <ul>
            {recipe.dietLabels.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          </Card.Body>
        <Card.Footer>
          </Card.Footer>
          </Card>
    </div>
  </div>
)
  
}*/
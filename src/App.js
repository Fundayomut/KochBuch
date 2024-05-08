import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AufgabeKochBook from "./component/AufgabeKochBook";
import Navigation from "./component/Navigation";
import Breakfast from "./component/Breakfast";
import Dinner from "./component/Dinner";
import Snack from "./component/Snack";
import Calorie from "./component/Calorie";
import FoodInfo from "./component/FoodInfo";
import Detail from "./component/Detail";
import ModalMy from "./component/ModalMy";
import React, { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AufgabeKochBook />} />
          <Route
            path="/AufgabeKochBook/FoodInfo/:inputValue"
            element={<FoodInfo />}
          />
          <Route path="/FoodInfo/Detail/:label" element={<Detail />} />
          <Route path="/Breakfast" element={<Breakfast />} />
          <Route path="/Dinner" element={<Dinner />} />
          <Route path="/Snack" element={<Snack />} />
          <Route path="/AufgabeKochBook/Calorie" element={<Calorie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

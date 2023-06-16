import { Fragment } from "react";
import BMRCalculatorApp from "./components/BMR Calculator/BMRCalculatorApp";
import CustomDiet from "./components/Custom Diet Suggestor/CustomDietApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Welcome from "./components/Sign Up/Welcome";
import SignUp from "./components/Sign Up/SignUp";
import WorkoutPlan from "./components/Workout Plan/WorkoutPlan";
import WorkoutList from "./components/Workout Plan/WorkoutList";

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Welcome" element={<Welcome/>}/>
          <Route path="/BMRCalculator" element={<BMRCalculatorApp />} />
          <Route path="/customDiet" element={<CustomDiet />} />
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/Workout" element={<WorkoutPlan/>}/>
          <Route path="/workoutList" element={<WorkoutList/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

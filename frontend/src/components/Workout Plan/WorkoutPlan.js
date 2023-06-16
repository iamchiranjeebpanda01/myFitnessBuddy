import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

const WorkoutPlan = () => {
  const navigate = useNavigate();
  
  const clickHandler = () => {
    navigate("/workoutList");
  };

  return (
    <div className="offset-3 col-6 mt-5">
      <h1 className="mb-5">Beginner’s workout routine</h1>
      <p className="lead text-justify">
        Starting out in the gym can seem intimidating, but with proper guidance,
        the process becomes more approachable — and even invigorating.
      </p>

      <p className="lead text-justify">
        As a beginner, you can progress very quickly because almost any exercise
        promotes muscle and strength gains. Still, it’s important to avoid
        overexertion, which can lead to injuries or decreased performance.
      </p>

      <p className="lead text-justify">
        This workout routine has you in the gym 3 days per week (such as Monday,
        Wednesday, and Friday), with full-body sessions completed each day. This
        allows you to get used to new movements, focus on proper form, and take
        time to recover.
      </p>

      <p className="lead text-justify">
        You can add reps and sets as needed as you progress.
      </p>

      <p className="lead text-justify">
        The beginner phase should last as long as you continue to improve. Some
        people may plateau at around 6 months, whereas others may continue to
        see results for more than a year.
      </p>

      <p className="lead text-justify">
        <span className="fw-bold">Equipment required</span>: Fully Equipped Gym
      </p>

      <p className="lead text-justify">
        <span className="fw-bold">Rest periods:</span> 90–180 seconds for main
        movements, 60–90 seconds for accessories
      </p>

      <p className="lead text-justify mb-5">
        <span className="fw-bold">Intensity:</span> Select a weight that allows
        you to complete the prescribed reps while leaving about 2 solid reps in
        the tank.
      </p>

      <Button
        className="d-grid gap-2 mt-3"
        buttonAtr={{
          className: "btn btn-primary",
          type: "button",
          onClick: clickHandler,
        }}
      >
        Get Workout Regime
      </Button>
    </div>
  );
};

export default WorkoutPlan;

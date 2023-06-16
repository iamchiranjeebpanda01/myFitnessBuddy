import Day1JSX from "./Day1JSX";
import Day2JSX from "./Day2JSX";
import Day3JSX from "./Day3JSX";

const WorkoutList = () => {
    return (
        <div className="col-8 offset-2">
            <Day1JSX/>
            <Day2JSX/>
            <Day3JSX/>
        </div>
    );
};

export default WorkoutList;
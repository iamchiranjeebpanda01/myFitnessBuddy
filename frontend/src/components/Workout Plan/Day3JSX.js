import {useState} from 'react';

const Day3 = () => {

  const [ExerciseListDay3, setExerciseListDay3] = useState([]);

  fetch("http://localhost:5000/workout/3")
  .then((res) => res.json())
  .then((res) => {
    setExerciseListDay3(res)
  })
  
  return (
    <div className="card mt-5">
        <div className="card-header">Day 3</div>
        {ExerciseListDay3?.map((item, index) => {
          return (
              <div className="card-body border" key={index}> 
                <h5 className="card-title">{item.exercise}</h5>
                <p className="card-text">{item.muscle}</p>
                <p className="small fw-light mb-0">{item.sets}</p>
              </div>
          );
        })}
    </div>
  );
};

export default Day3;

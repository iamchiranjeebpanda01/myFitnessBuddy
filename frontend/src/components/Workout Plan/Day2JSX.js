import {useState} from 'react';

const Day2 = () => {
  const [ExerciseListDay2, setExerciseListDay2] = useState([]);

  fetch("http://localhost:5000/workout/2")
  .then((res) => res.json())
  .then((res) => {
    setExerciseListDay2(res)
  })
  
  return (
    <div className="card mt-5">
      <div className="card-header">Day 2</div>
      {ExerciseListDay2?.map((item, index) => {
        return (
          <div className="card-body border" key={index}>
            <h5 className="card-title">{item.exercise}</h5>
            <p className="card-text">
              {item.muscle}
            </p>
            <p className="small fw-light mb-0">
              {item.sets}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Day2;

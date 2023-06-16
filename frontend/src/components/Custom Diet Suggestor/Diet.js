import {useState} from 'react';

//*List to be rendered for less than 1800 kcals
const Diet = (props) => {
  const [dietSuggestion, setDietSuggestion] = useState([]);

  fetch("http://localhost:5000/diet/" + props.chart)
    .then((res) => res.json())
    .then((res) => {
      setDietSuggestion(res);
    });

  return (
    <ul className="list-unstyled">
      {dietSuggestion?.map((food, index) => {
        return (
          <li key={index}>
            <div className="card w-100 mb-3 lead">
              <div className="card-body">
                <h5 className="card-title">{food.item}</h5>
                <p className="card-text">{food.amount}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Diet;

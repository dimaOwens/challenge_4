import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import reportWebVitals from './reportWebVitals';
import Circle from './Circle';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
  "#85FFC7", "#297373", "#FF8552", "#A40E4C"];

var renderData = [];

for (var i = 0; i < colors.length; i++) {
  var color = colors[i];
  renderData.push(<Circle key={i + color} bgColor={color} />);
}

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    {renderData}
  </div>,
  destination
);
// const wrapper = document.getElementById("root");
// ReactDOM.render(<Circle />, wrapper)
//wrapper ? ReactDOM.render(<Test />, wrapper) : false;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

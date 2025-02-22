import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('bhavesh'));
//  let Meet = () => {
//     return(
//         <>
//     </>
//     )
//   }
root.render(
  <>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  {/* <h1> hello meet </h1>
  <button className='btn btn-danger'>click me</button>
  <Meet/> */}
  </>
);



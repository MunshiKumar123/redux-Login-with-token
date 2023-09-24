import React from "react";
import Routing from './route/Routing';
import './Style.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <main>
      <section className="container mt-5">
        <Routing />
        <ToastContainer />
      </section>
    </main>

  );
};
export default App;

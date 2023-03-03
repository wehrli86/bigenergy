import React from "react";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./components/home/Footer"
import Header from "./components/home/header/Header"
import HomePages from "./components/pages/HomePages"
import Pages from "./components/pageContent/Pages"


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route key="1" path='/' exact component={HomePages} />
          <Route key="2" path='/pages' exact component={Pages} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
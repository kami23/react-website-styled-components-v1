import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";
import styled from "styled-components";
import img from "./images/background.jpg";
import Biography from "./pages/Biography/Biography1";
import Vision from "./pages/VisionPage/Vision";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
const MainContainer = styled.div``;
function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <MainContainer>
        <Header />
        <Main />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/biography" exact component={Biography} />
          <Route path="/vision" exact component={Vision} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </MainContainer>
      <Footer />
    </Router>
  );
}

export default App;

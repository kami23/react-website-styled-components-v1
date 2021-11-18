import React from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";
import styled from "styled-components";
import Bio from "./pages/Bio/Bio";

const MainContainer = styled.div``;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <MainContainer>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/biography" exact component={Bio} />
          <Route path="/vision" exact component={Home} />
          <Route path="/services" component={Home} />
          <Route path="/products" component={Home} />
          <Route path="/sign-up" component={Home} />
        </Switch>
      </MainContainer>
      <Footer />
    </Router>
  );
}

export default App;

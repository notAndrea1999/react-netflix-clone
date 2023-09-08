import { Component } from "react";
import NavBar from "./NavBar";
import BelowNavBar from "./BelowNavBar";
import FilmList from "./FilmList";
import HomeFooter from "./HomeFooter";

class HomePage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <BelowNavBar />
        <FilmList title={"Trending Now"} genre={"Avengers"} />
        <FilmList title={"Watch it Again"} genre={"nightmare"} />
        <FilmList title={"New Releases"} genre={"harry potter"} />
        <HomeFooter />
      </>
    );
  }
}

export default HomePage;

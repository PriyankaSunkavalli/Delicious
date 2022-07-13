import React from "react";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import Categories from "./components/Categories";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Search />
      <Categories />
      <Pages />
    </BrowserRouter>
  );
};

export default App;

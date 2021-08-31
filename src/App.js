import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Navigation from "./Navigation";
import Grid from "./Grid";
import Pagination from "./Pagination";
import requests from "./requests";

function App() {
  const readCookie = () => {
    let str = document.cookie.split(", ");
    var result = {};
    for (var i = 0; i < str.length; i++) {
      var cur = str[i].split("=");
      result[cur.shift()] = cur.join("=");
    }
    return result;
  };

  let cookie = readCookie();

  const [request, setRequest] = useState(() => {
    if (cookie.request) return cookie.request;
    switch (window.location.pathname) {
      case "/Trends":
        return requests.Trending.url;
      case "/OnlyHulu":
        return requests.TopRated.url;
      default:
        return requests.Discover.url;
    }
  });
  const [currentPage, setPage] = useState(parseInt(cookie.page) || 1);
  const [nbrTotalPages, setNbrTotalPages] = useState(cookie.nbrTotalPages);

  useEffect(() => {
    document.cookie = `request=${request}, page=${currentPage}, nbrTotalPages=${nbrTotalPages}`;
  }, [request, currentPage, nbrTotalPages]);

  const setNewPage = (newPage) => {
    setPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const setNewrequest = (newRequest) => {
    setRequest(newRequest);
    setPage(1);
  };

  return (
    <Router>
      <Header setRequest={setNewrequest} />
      <Switch>
        <Route exact path={["/", "/Trends", "/OnlyHulu"]}>
          <Navigation setRequest={setNewrequest} />
          <Grid
            request={request}
            currentPage={currentPage}
            setNbrTotalPages={(nbr) => setNbrTotalPages(nbr)}
          />
          <Pagination
            currentPage={currentPage}
            nbrPages={nbrTotalPages}
            setPage={setNewPage}
          />
        </Route>
        <Route path="/survey"></Route>
      </Switch>
    </Router>
  );
}

export default App;

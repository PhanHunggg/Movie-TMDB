import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routers/Router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { movixAction } from "./store/reducer/movixReducer";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.movix);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(movixAction.getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoint = ["tv", "movie"];
    let allGenre = {};

    endPoint.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((ele) => (allGenre[ele.id] = ele));
    });

    dispatch(movixAction.getGenres(allGenre));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;

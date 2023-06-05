import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import PageNotFound from "../pages/pageNotFound/PageNotFound";
import Detail from "../pages/details/Detail";
import SearchResult from "../pages/searchResult/SearchResult";
import Explore from "../pages/explore/Explore";
import HomeLayout from "../layout/home/HomeLayout";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:mediaType/:id",
          element: <Detail />,
        },
        {
          path: "/search/:query",
          element: <SearchResult />,
        },
        {
          path: "/explore/:mediaType",
          element: <Explore />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return routing;
}

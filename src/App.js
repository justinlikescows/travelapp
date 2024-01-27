import React from "react";
import Listings from "./pages/Listings/Listings";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Search from "./pages/Search/Search";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Search />,
    },
    {
        path: "/listings",
        element: <Listings />,
    },
]);

function App(){
    return(
        <div>
        <RouterProvider router={router} />
        </div>
    );
}

export default App; 
import React from "react";
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
]);

function App(){
    return(
        <RouterProvider router={router} />
    );
}

export default App; 
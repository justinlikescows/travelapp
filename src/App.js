import React from "react";
import Listings from "./pages/Listings/Listings";
import Checkout from "./pages/Check Out/checkout"

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Search from "./pages/Search/Search";
import ItineraryYay from "./pages/Itinerary/main_module";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Search />,
    },
    {
        path: "/listings",
        element: <Listings />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
        path: "/itinerary",
        element: <ItineraryYay />,
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
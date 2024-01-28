import React from "react";
import Listings from "./pages/Listings/Listings";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Search from "./pages/Search/Search";
import ItineraryYay from "./pages/Itinerary/main_module";
import Flights from "./pages/Flights/Flights";

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
        path: "/itinerary",
        element: <ItineraryYay />,
    },
    {
        path: "/flights",
        element: <Flights />,
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
import React from "react";
import styles from './Confirmation.module.css';
import Header from '../../components/Header/Header';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


// function flightCard(property) {
//     return (
//         <Card
//             total = {property.priceBreakdown.total.units}
//             currCode = {property.priceBreakdown.total.currencyCode}
//             segments = {property.segments}
//         />
//     );
// }

function Confirmation() {
    return (
        <body >

            <div>
                <Header />
                <div class="container cover-container text-center">

                <main className="px-3">
                <h1>Your Trip has been placed. Happy Travels!</h1>
                <p class="lead">

                    <Link to="/">
                        <button class="w-100 btn btn-danger btn-lg" type="submit">Plan more trips here!</button>

                    </Link>

                </p>
                 </main>
                 </div>
            </div>
        </body>

    );
}

export default Confirmation;

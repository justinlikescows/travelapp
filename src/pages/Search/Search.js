import React, { useEffect } from 'react';
import styles from './Search.module.css';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, useJsApiLoader, StreetViewPanorama } from '@react-google-maps/api';
import locations from './locations';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CalendarInput from '../../components/CalendarInput/CalendarInput';
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";


const GOOGLE_LIBRARIES = ["places"];


export default function Search() {
    const navigate = useNavigate();

    const [departureDate, setDepartureDate] = React.useState(new Date());
    const [arrivalDate, setArrivalDate] = React.useState(new Date());
    const [map, setMap] = React.useState(null);
    const [mapLocation, setMapLocation] = React.useState({
        lat: 0,
        lng: 0,
    })
    const [mapDirection, setMapDirection] = React.useState({
        heading: 5,
        pitch: 10,
    })

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
            callbackName: "initMap",
            debounce: 300,
    });

    const ref = useOnclickOutside(() => {
        // When the user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        clearSuggestions();
      });
    
      const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
      };
    
      const handleSelect =
        ({ description }) =>
        () => {
          // When the user selects a place, we can replace the keyword without request data from API
          // by setting the second parameter to "false"
          setValue(description, false);
          clearSuggestions();
    
          // Get latitude and longitude via utility functions
          getGeocode({ address: description }).then((results) => {
            const { lat, lng } = getLatLng(results[0]);
            console.log("📍 Coordinates: ", { lat, lng });
          });
        };
    
      const renderSuggestions = () =>
        data.map((suggestion) => {
          const {
            place_id,
            structured_formatting: { main_text, secondary_text },
          } = suggestion;
    
          return (
            <Button key={place_id} onClick={handleSelect(suggestion)} className={styles.suggestionButton}>
                <h6 className={styles.suggestionText}>
                    <strong>{main_text}</strong> {secondary_text}
                </h6>
            </Button>
          );
        });
    
    useEffect(() => {
        const script = document.createElement("script");

        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&loading=async&libraries=places&callback=initMap`;
        script.defer = true;
    
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    function searchClicked() {
        navigate("/itinerary", 
            { state: { location: value} });
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
        libraries: GOOGLE_LIBRARIES,
    })

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        randomizeLocation();
        const bounds = new window.google.maps.LatLngBounds(mapLocation);
        map.fitBounds(bounds);
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

    function randomizeLocation() {
        //48.8589391,2.2933884,3a
        var location = locations.wonders[Math.floor(Math.random()*locations.wonders.length)];

        while (location.lat === mapLocation.lat && location.lng === mapLocation.lng) {
            location = locations.wonders[Math.floor(Math.random()*locations.wonders.length)];
        }
        //console.log(location);
        setMapDirection({
            heading: location.heading,
            pitch: location.pitch,
        });
        setMapLocation({
            lat: location.lat,
            lng: location.lng,
        });
    }


    return (
        <body>
            <div>
                <Header />
                <div className={styles.pageContainer} ref={ref}>
                    <div className={styles.searchContainer}>
                        <h1 className={styles.searchTitle}>Where are you headed?</h1>
                        <div className={styles.searchBoxContainer}>
                            <div className={styles.autocompleteContainer}>
                                <input className={styles.searchInput} onChange={handleInput} value={value} disabled={!ready} placeholder='Explore the world' />
                                {status === "OK" && 
                                <div className={styles.suggestionContainer}>
                                    {renderSuggestions()}
                                </div>}
                            </div>
                            <CalendarInput onDatePicked={setDepartureDate} icon={<FaPlaneDeparture style={{ marginRight: "10px" }} />} placeholder="Departure Date" />
                            <CalendarInput onDatePicked={setArrivalDate} icon={<FaPlaneArrival style={{ marginRight: "10px" }} />} placeholder="Arrival Date" />
                            <Button className={styles.searchButton} onClick={searchClicked} ><FaSearch color='white' /></Button>
                        </div>
                    </div>
                    <h1 className={styles.searchTitle}>Need some inspo?</h1>
                    <Button onClick={randomizeLocation} className={styles.randomizeButton} >Take me somewhere new</Button>
                    {
                        isLoaded ? (
                            <GoogleMap
                              mapContainerStyle={{ height: '400px', width: '900px', borderRadius: 20 }}
                              center={mapLocation}
                              zoom={10}
                              onLoad={onLoad}
                              onUnmount={onUnmount}
                            >
                                <StreetViewPanorama
                                    id="street-view"
                                    mapContainerStyle={{ height: '400px', width: '900px' }}
                                    position={mapLocation}
                                    pov={mapDirection}
                                    visible={true}
                                />
                              { /* Child components, such as markers, info windows, etc. */ }
                              <></>
                            </GoogleMap>
                        ) : <></>
                    }
                </div>
            </div>
        </body>
    );
}
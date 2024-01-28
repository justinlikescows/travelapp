import React, { useEffect } from 'react';
import styles from './Search.module.css';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";


export default function Search() {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
            callbackName: "initMap",
            requestOptions: {
                type: ["airport"]
            },
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


    return (
        <body>
            <script defer
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_KEY}&loading=async&libraries=places&callback=initMap`}>
            </script>
            <div>
                <div className={styles.headerContainer}>
                    <img className={styles.logo} src={require('../../assets/logo/itinero_logo.webp')} alt='Logo'/>
                </div>
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
                            <Button className={styles.searchButton} ><FaSearch color='white' /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        
    );
}
import styles from './Search.module.css';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";


export default function Search() {
    return (
        <body>
            <div>
                <div className={styles.headerContainer}>
                    <h1 className={styles.logoText}>TripAdvisor</h1>
                </div>
                <div className={styles.pageContainer}>
                    <div className={styles.searchContainer}>
                        <h1 className={styles.searchTitle}>Where are you headed?</h1>
                        <div className={styles.searchBoxContainer}>
                            <input className={styles.searchInput} />
                            <Button className={styles.searchButton} ><FaSearch color='black' /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        
    );
}
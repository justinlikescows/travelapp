
import { Button } from 'react-bootstrap';
import styles from './Header.module.css';
import { RiAccountCircleLine } from "react-icons/ri";


export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <img className={styles.logo} src={require('../../assets/logo/itinero_logo.webp')} alt='Logo'/>
            <Button className={styles.headerButton}><RiAccountCircleLine size={30} color='black' /></Button>
        </div>
    );
}
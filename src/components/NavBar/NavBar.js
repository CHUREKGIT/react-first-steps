import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {

    return (
        <nav className={styles.navContainer}>
            <div><a href="/"><span className='fa fa-tasks'/></a></div>
            <div>
            <ul className={styles.navlist}>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                <li><Link to="/about">About</Link></li>    
            </ul>
            </div>
        </nav>
    );

}
export default NavBar
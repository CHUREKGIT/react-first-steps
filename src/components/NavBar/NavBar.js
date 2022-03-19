import styles from './NavBar.module.scss';

const NavBar = () => {

    return (
        <nav className={styles.navContainer}>
            <div><a href="/"><span className='fa fa-tasks'/></a></div>
            <div><ul className={styles.navlist}>
                <li><a href="/">Home</a></li>
                <li><a href="/favorite">Favourite</a></li>
                <li><a href="/about">About</a></li>
                </ul></div>
        </nav>
    );

}
export default NavBar
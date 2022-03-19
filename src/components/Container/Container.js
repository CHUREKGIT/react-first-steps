import styles from './Container.module.scss';
import NavBar from '../NavBar/NavBar';

const Container = props => {
    return (<div><NavBar></NavBar><div className={styles.maxWidth}>{props.children}</div></div>);
    
};

export default Container;
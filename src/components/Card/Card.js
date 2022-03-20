import styles from './Card.module.scss';
import { addFav } from '../../redux/store';
import { useDispatch } from 'react-redux';


const Card = props => {
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addFav( props.id ));
    }
    return (<li className={styles.card}>{props.title}
    <button className={styles.button} onClick={handleSubmit}>
    <span className={"fa fa-star-o " + (props.isFavorite ? styles.isFavorite : '')}></span>
    </button>
    </li>);
};

export default Card;
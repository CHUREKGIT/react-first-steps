import styles from './Card.module.scss';
import { addFav, removeCard } from '../../redux/cardsReducer';
import { useDispatch } from 'react-redux';


const Card = props => {
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addFav( props.id ));
    }
    const remove = e => {
        e.preventDefault();
        dispatch(removeCard(props.id));
        console.log('usuń')
    }
    return (<li className={styles.card}>{props.title}
    <div>
    <button className={styles.button} onClick={handleSubmit}>
    <span className={"fa fa-star-o " + (props.isFavorite ? styles.isFavorite : '')}></span>
    </button>
    <button className={styles.buttonTrash} onClick={remove}>
    <i className="fa fa-trash"></i>
    </button>
    </div>
    </li>);
};

export default Card;
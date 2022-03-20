import styles from './Favourite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { getFavCards } from '../../redux/store';
import { useSelector } from 'react-redux';

 
const Favourite = () => {

    const favCard = useSelector(state => getFavCards(state));

    return ( <div>
    <div>
    <PageTitle>Favourite</PageTitle>
    <ul className={styles.cards}>
    {favCard.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} /> )}
    </ul>
    </div>
    </div>

    );
}
export default Favourite
import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsReducer';


const CardForm = props => {
    const [title, setValueTitle] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({ title: title , columnId: props.columnId }));
        setValueTitle('');
    }
    return (
    <form onSubmit={handleSubmit} className={styles.cardForm}>
       <TextInput value={title} onChange={e => setValueTitle(e.target.value)} />
       <Button>ADD CARD</Button>
    </form>
    )
}
export default CardForm;
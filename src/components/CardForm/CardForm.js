import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const CardForm = props => {
    const [title, setValueTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title }, props.columnId);
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
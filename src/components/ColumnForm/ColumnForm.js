import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';


const ColumnForm = props => {
    const [title, setValueTitle] = useState('');
    const [icon, setValueIcon] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId: props.listId }));
        setValueTitle('');
        setValueIcon('');
    }
    return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
       <span>Title:</span> <TextInput value={title} onChange={e => setValueTitle(e.target.value)} />
       <span>Icon:</span> <TextInput value={icon} onChange={e => setValueIcon(e.target.value)} />
       <Button>ADD COLUMN</Button>
    </form>
    )
}
export default ColumnForm;
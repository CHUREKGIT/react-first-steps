import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
    const [title, setValueTitle] = useState('');
    const [icon, setValueIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title , icon: icon });
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
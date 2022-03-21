import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSearch } from '../../redux/searchStringReducer';



const SearchForm = props => {
    const [search, setSearch] = useState(props.searchData);
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addSearch({search}));
        setSearch(search);
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
             <TextInput placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
             <Button><span className="fa fa-search" /></Button>
        </form>
    );
  };

  export default SearchForm;
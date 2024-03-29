import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from "../SearchForm/SearchForm"
import { useSelector } from 'react-redux';
import { getSearchForm } from '../../redux/searchStringReducer';
import { getListById } from '../../redux/listReducer';
import { getFilteredColumns } from '../../redux/columnsReducer';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';


const List = () => {
    const { listId } = useParams();
    const columns = useSelector(state => getFilteredColumns(state, listId));
    const listData = useSelector(state => getListById(state, listId));
    const searchData = useSelector(state => getSearchForm(state));

    if(!listData) return <Navigate to="/" />
    return (
        <div className={styles.list}>
          <header className={styles.header}>
            <h2 className={styles.title}>{listData.title}</h2>
          </header>
          <p className={styles.description}>{listData.description}</p>
          <SearchForm searchData = {searchData}/>
          <section className={styles.columns}>
            {columns.map(column =>
              <Column
                key={column.id}
                {...column}  />
            )}
          </section>
          <ColumnForm listId = {listData.id} />
        </div>
      );
}
export default List
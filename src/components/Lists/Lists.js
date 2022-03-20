import styles from './Lists.module.scss';
import { useSelector } from 'react-redux';
import { getAllLists } from '../../redux/store';
import { Link } from 'react-router-dom';
import ListForm from '../ListForm/ListForm';

const Lists = () => {

    const listsData = useSelector(state => getAllLists(state)); 

    return (
        <div>
        <section className={styles.lists}>
          <h2 className={styles.heading}>Browse lists</h2>
          {listsData.map(list => (
            <Link key={list.id} to={"/list/"+list.id} className={styles.listLink}>
              <h3>{list.title}</h3>
              <p>{list.description}</p>
            </Link>
          ))}
        </section>
        <ListForm/>
        </div>
      );
}

export default Lists;
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { searchRequest } from '../api/search';
import { trendingRequest } from '../api/trending';
import { Grid } from '../components/Grid';
import { BackButton } from '../components/BackButton';
import { parseQuerySearch } from '../utils';
import styles from './Search.module.css'
export const Search = ({ location }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(undefined);
  const [error, setError] = useState(undefined);

  const search = async (text) => {
    try {
      let makeRequest = trendingRequest;
      if (text) {
        makeRequest = searchRequest;
      }
      const response = await makeRequest(text);
      setItems([...items, ...response.data]);
      setTotal(response.pagination.total_count);
    } catch (e) {
      setError(e.message);
    }
  };

  const loadMore = () => {

  }

  useEffect(() => {
    const queryParams = parseQuerySearch(location.search);
    const query = queryParams.get('q');
    search(query);
  }, [location.search]);

  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <div className={'pageRoot'}>
        <BackButton />
        <div>
          {error ? 'Error...' : null}
          {items ? <Grid items={items} /> : null}
        </div>
        <button className={styles.loadMore} onClick={() => loadMore()}>Load More</button>
      </div>
    </>
  );
};

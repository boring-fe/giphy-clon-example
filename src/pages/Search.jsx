import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { searchRequest } from '../api/search';
import { trendingRequest } from '../api/trending';
import { Grid } from '../components/Grid';
import { BackButton } from '../components/BackButton';
import { getQuery, setToQueryParams } from '../utils';
import styles from './Search.module.css';

const setOffsetToQuery = (history, location, newOffset) => {
  // const existingSearch = location.search || '?';
  // const newSearch = location.search ? `${location.search}&offset=${newOffset}` : `?offset=${newOffset}`
  const query = setToQueryParams(location, 'offset', newOffset)
  console.log(query)
  history.push(`${location.pathname}?${query}`)
}

export const Search = ({ location, history }) => {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(parseInt(getQuery(location, 'offset') || '0'));
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [query, setQuery] = useState(getQuery(location, 'q'));

  const search = async (text, flush) => {
    try {
      let makeRequest = trendingRequest;
      if (text) {
        makeRequest = searchRequest;
      }
      const response = await makeRequest(text, limit, offset);
      setItems(flush ? response.data : [...items, ...response.data]);
      setTotal(response.pagination.total_count);
    } catch (e) {
      setError(e.message);
    }
  };

  const loadMore = () => {
    const newOffset = offset + limit;
    setOffset(newOffset);
  };



  useEffect(() => {
    setQuery(getQuery(location, 'q'));
  }, [location.search]);

  useEffect(() => {
    search(query, true);
  }, [query]);

  useEffect(() => {
    setOffsetToQuery(history, location, offset)
    search(query);
  }, [offset]);

  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <div className={'pageRoot'}>
        <BackButton />
        <div>
          {error ? 'Error...' : null}
          {items || items.length > 0 ? <Grid items={items} /> : null}
        </div>
        <button className={styles.loadMore} onClick={() => loadMore()}>
          Load More
        </button>
      </div>
    </>
  );
};

import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { searchRequest } from '../api/search';
import { Grid } from '../components/Grid';
import { parseQuerySearch } from '../utils';

export const Search = ({ location }) => {
  const [items, setItems] = useState(undefined);
  const [total, setTotal] = useState(undefined);
  const [error, setError] = useState(undefined);

  const search = async (text) => {
    try {
      const items = await searchRequest(text);
      setItems(items.data);
      setTotal(items.pagination.total_count);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    const queryParams = parseQuerySearch(location.search);
    const query = queryParams.get('q');

    if (query) {
      search(query);
    }
  }, [location.search]);

  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <div>
        <div>
          {error ? 'Error...' : null}
          {items ? <Grid items={items} /> : null}
        </div>
        <div>{total ? total : null}</div>
        Search
      </div>
    </>
  );
};

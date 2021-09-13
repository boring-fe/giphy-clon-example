import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { searchRequest } from '../api/search';
import { Grid } from '../components/Grid';
import { parseQuerySearch } from '../utils';

export const Trending = ({ location }) => {
  const [items, setItems] = useState(undefined);
  const [total, setTotal] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    
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

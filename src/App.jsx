import React, {useEffect} from 'react';

import {withRouter} from 'react-router-dom'
import styles from './App.module.css';
import { Switch, Route } from 'react-router-dom';
import { Home, Search, Details } from './pages';
import { SearchForm } from './components/SearchForm';
import { parseQuerySearch } from './utils';

// gifs/search?api_key=&q=fun&limit=10&offset=0


const App = ({location, history}) => {
  console.log(location, history)
  const translteToSearch = (text) => {
    history.push(`/search?q=${text}`)
  }
  const querySearch = parseQuerySearch(location.search);
  const u = querySearch.get('q')
  console.log(querySearch.get('q'))
  // useEffect(() => {
  //   const getSeacrhValue = parseQuerySearch(location.search);
  //   return () => {
  //     cleanup
  //   }
  // }, [input])


  return (
    <>
      <header className={styles.header}>
        <SearchForm onSubmit={translteToSearch} value={u}/>
      </header>
      <main className={styles.main}>
        <Switch>
          <Route path='/' exact render={(props) => <Home {...props} />} />
          <Route
            path='/gif/:id'
            exact
            render={(props) => <Details {...props} />}
          />
          <Route
            path='/search'
            exact
            render={(props) => <Search {...props} />}
          />
        </Switch>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
};

export default withRouter(App);

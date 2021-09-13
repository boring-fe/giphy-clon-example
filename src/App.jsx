import React, {useEffect} from 'react';

import {withRouter, useHistory, Link} from 'react-router-dom'
import styles from './App.module.css';
import { Switch, Route } from 'react-router-dom';
import { Home, Search, Details } from './pages';
import { SearchForm } from './components/SearchForm';
import { getQuery } from './utils';

// gifs/search?api_key=&q=fun&limit=10&offset=0


const App = ({location, history}) => {
 
  console.log(location, history)
  const translteToSearch = (text) => {
    history.push(`/search?q=${text}`)
  }
  const querySeacrh = getQuery(location, 'q') || ''

  return (
    <>
      <header className={styles.header}>
        <SearchForm onSubmit={translteToSearch} value={querySeacrh}/>
      </header>
      <main className={styles.main}>
        <Switch>
          <Route push path='/' exact render={(props) => <Search {...props}/>} />
          <Route
            push
            path='/gif/:id'
            exact
            render={(props) => <Details {...props} />}
          />
          <Route
            push
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

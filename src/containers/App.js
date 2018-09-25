import React, { Component } from 'react';
import {connect} from 'react-redux';
import {User} from '../components/User';
import {Page} from '../components/Page';
import { getPhotos} from '../actions/PageActions';

import './App.css';

class App extends Component {
  render() {
    const { user, page, getPhotosAction} = this.props
    return <div className="App">
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} getPhotos={getPhotosAction} isFetching={page.isFetching} />
      </div>;
  }
}

/* Приклеиваем данные из store */
const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user,
    page: store.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

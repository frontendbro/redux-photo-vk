import React, { Component } from 'react';
import {connect} from 'react-redux';
import {User} from '../components/User';
import {Page} from '../components/Page';
import {getPhotos} from '../actions/PageActions';
import {getTracks} from '../actions/getTracksAction';

import './App.css';

class App extends Component {
  render() {
    const { user, page, getPhotosAction, tracks, onGetTracks} = this.props
    return (
      <div className="App">
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} getPhotos={getPhotosAction} isFetching={page.isFetching} />
        <div>
          <button onClick={onGetTracks}>Get Tracks</button>
          {tracks.load ? <p>Получили данные</p> : <p>Загрузка...</p> }
        </div>
      </div>
    )
  }
}

/* Приклеиваем данные из store */
const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user,
    page: store.page,
    tracks: store.tracks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
    onGetTracks: () => dispatch(getTracks())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

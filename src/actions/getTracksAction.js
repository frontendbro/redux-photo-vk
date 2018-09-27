export const GET_TRACKS_REQUEST = "GET_TRACKS_REQUEST";
export const GET_TRACKS_SUCCESS = "GET_TRACKS_SUCCESS";

export const getTracks = () => {
  return dispatch => {
    dispatch({
      type: GET_TRACKS_REQUEST,
      payload: [
        {
          id: 99999999
        }
      ]
    })

    fetch('https://swapi.co/api/starships')
      .then(function(response) {
        response.json().then(function(data) {
          dispatch({
            type: GET_TRACKS_SUCCESS,
            payload: data.results
          })
        })
      })
  }
}

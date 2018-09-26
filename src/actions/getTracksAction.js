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
    setTimeout(() => {
      dispatch({
        type: GET_TRACKS_SUCCESS,
        payload: [
          {
            id:111
          },
          {
            id:222
          },
          {
            id:333
          },
          {
            id:444
          },
          {
            id:555
          },
        ]
      })
    }, 2000)
  }
}

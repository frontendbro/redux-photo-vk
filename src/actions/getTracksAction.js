export const GET_TRACKS_REQUEST = "GET_TRACKS_REQUEST";
export const GET_TRACKS_SUCCESS = "GET_TRACKS_SUCCESS";

export const getTracks = () => {
  return dispatch => {
    dispatch({
      type: GET_TRACKS_REQUEST,
      payload: "Загрузка"
    })
    setTimeout(() => {
      dispatch({
        type: GET_TRACKS_SUCCESS,
        payload: [1,2,3,4,5]
      })
    }, 2000)
  }
}

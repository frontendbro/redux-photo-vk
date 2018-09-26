import { GET_TRACKS_REQUEST, GET_TRACKS_SUCCESS } from "../actions/getTracksAction";

const initialState = {
  tracks: []
}

export function tracksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRACKS_REQUEST:
      return { ...state, tracks: action.payload,  };

    case GET_TRACKS_SUCCESS:
      return { ...state, tracks: action.payload, };

    default:
      return state;
  }
}

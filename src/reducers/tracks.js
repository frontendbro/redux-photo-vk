import { GET_TRACKS_REQUEST, GET_TRACKS_SUCCESS } from "../actions/getTracksAction";

const initialState = {
  apps: [{
      id: 1
    },
    {
      id: 2
    }
  ],
  load: false
}

export function tracksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRACKS_REQUEST:
      return { ...state, apps: action.payload, load:false };

    case GET_TRACKS_SUCCESS:
      return { ...state, apps: action.payload, load:true};

    default:
      return state;
  }
}

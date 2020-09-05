import { produce } from "immer";

const initialState = {
  currentArtist: null,
  topTracks: null,
  status: "idle",
  error: null,
};

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case "ARTIST_ALL_INFO_REQUEST": {
      return produce(state, (draftState) => {
        draftState.status = "loading";
      });
    }
    case "ARTIST_ID_RECEIVE": {
      return produce(state, (draftState) => {
        draftState.status = "idle";
        draftState.currentArtist = action.currentArtist;
      });
    }
    case "ARTIST_TOP_TRACKS_RECEIVE": {
      //console.log(action.topTracks);
      return produce(state, (draftState) => {
        draftState.status = "idle";
        draftState.topTracks = action.topTracks.tracks;
      });
    }
    case "ARTIST_ALL_INFO_FAILURE": {
      return produce(state, (draftState) => {
        draftState.status = "error";
        draftState.error = action.error;
      });
    }
    default: {
      return state;
    }
  }
}

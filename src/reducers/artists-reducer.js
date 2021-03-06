import { produce } from "immer";

const initialState = {
  currentArtist: null,
  topTracks: null,
  relatedArtists: null,
  status: "loading",
  error: null,
};

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case "ARTIST_ALL_INFO_REQUEST": {
      return produce(state, (draftState) => {
        draftState.status = "loading";
      });
    }
    case "ARTIST_ALL_INFO_RECEIVE": {
      //console.log(action.relatedArtists.artists);
      return produce(state, (draftState) => {
        draftState.status = "idle";
        draftState.currentArtist = action.currentArtist;
        draftState.topTracks = action.topTracks.tracks;
        draftState.relatedArtists = action.relatedArtists.artists;
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

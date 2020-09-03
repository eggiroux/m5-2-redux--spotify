import { produce } from "immer";

const initialState = {
  currentArtist: null,
  status: "idle",
  error: null,
};

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case "ARTIST_ID_REQUEST": {
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
    case "ARTIST_ID_FAILURE": {
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

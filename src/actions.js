export const requestAccessToken = () => ({
  type: "REQUEST_ACCESS_TOKEN",
});

export const receiveAccessToken = (token) => ({
  type: "RECEIVE_ACCESS_TOKEN",
  token,
});

export const receiveAccessTokenError = () => ({
  type: "RECEIVE_ACCESS_TOKEN_ERROR",
});

export const artistIdRequest = () => ({
  type: "ARTIST_ID_REQUEST",
});

export const artistIdReceive = (currentArtist) => ({
  type: "ARTIST_ID_RECEIVE",
  currentArtist,
});

export const artistIdFailure = (error) => ({
  type: "ARTIST_ID_FAILURE",
  error,
});

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

export const artistIdReceive = (currentArtist) => ({
  type: "ARTIST_ID_RECEIVE",
  currentArtist,
});

export const artistTopTracksReceive = (topTracks) => ({
  type: "ARTIST_TOP_TRACKS_RECEIVE",
  topTracks,
});

export const requestAllArtistInfo = () => ({
  type: "ARTIST_ALL_INFO_REQUEST",
});

export const receiveAllArtistInfoFailure = (error) => ({
  type: "ARTIST_ALL_INFO_FAILURE",
  error,
});

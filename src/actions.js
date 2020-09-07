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

export const artistAllInfoReceive = (
  currentArtist,
  topTracks,
  relatedArtists
) => ({
  type: "ARTIST_ALL_INFO_RECEIVE",
  currentArtist,
  topTracks,
  relatedArtists,
});

export const requestAllArtistInfo = () => ({
  type: "ARTIST_ALL_INFO_REQUEST",
});

export const receiveAllArtistInfoFailure = (error) => ({
  type: "ARTIST_ALL_INFO_FAILURE",
  error,
});

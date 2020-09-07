export function fetchArtistProfile(token, artistId) {
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `https://api.spotify.com/v1/artists/${artistId}`;

  return fetch(url, options).then((res) => res.json());
}

export function fetchArtistTopTracks(token, artistId) {
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=CA`;

  return fetch(url, options).then((res) => res.json());
}

export function fetchArtistRelatedArtists(token, artistId) {
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `https://api.spotify.com/v1/artists/${artistId}/related-artists`;

  return fetch(url, options).then((res) => res.json());
}

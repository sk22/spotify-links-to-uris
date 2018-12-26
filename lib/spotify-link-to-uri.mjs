const prefix = 'https://open.spotify.com'

export default spotifyLink =>
  spotifyLink.startsWith(prefix)
    ? spotifyLink
        .replace(prefix, 'spotify')
        .replace(/\?.*$/, '')
        .replace(/\//g, ':')
    : spotifyLink

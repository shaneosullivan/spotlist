import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-header">
          Spotlist
        </div>
        <div className="login-description">
          A better way to make Spotify playlists
        </div>
        <a href={this._generateSpotifyLink()}>
          <div className="button login-button">
            Login to Spotify
          </div>
        </a>
        <div className="copy">
          Not affiliated to Spotify
        </div>
      </div>
    );
  }

  _generateSpotifyLink() {
    const baseUrl = 'https://accounts.spotify.com/authorize?';
    const baseRedirectUrl = window.location.origin + window.location.pathname;
    const redirectUri = baseRedirectUrl +
      (baseRedirectUrl.substring(baseRedirectUrl.length - 1) === '/' ||
        baseRedirectUrl.indexOf('html') > -1
        ? ''
        : '/') +
      (window.location.pathname.indexOf('.html') < 0 ? 'index.html' : '');
    // const redirectUri = 'http://chofter.com/spotlist/auth.php';
    const params = {
      client_id: '71ad6f6d14ef4f82b967b193dc8a3019',
      response_type: 'token',
      redirect_uri: redirectUri,
      state: Date.now(),
      show_dialog: false,
      scope: [
        'playlist-read-private',
        'playlist-modify-public',
        'playlist-modify-private',
        'user-top-read'
      ].join(' ')
    };
    var urlParams = [];
    for (let key in params) {
      const value = params[key];
      urlParams.push(key + '=' + encodeURIComponent(value));
    }

    const url = baseUrl + urlParams.join('&');
    return url;
  }
}

export default Login;
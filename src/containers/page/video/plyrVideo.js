import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import sub from './sub.vtt'
import './demo.css'
import Hls from "hls.js";



class PlyrPlayer extends Component {
  constructor(props) {
    super(props)

  }
  componentWillMount() {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/gechym/demo.js/demo2.js";
    document.body.appendChild(script);

  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/gechym/demo.js/demo2.js";
    script.async = true;
    document.body.appendChild(script);
    if (this.player) {
      var hlsUrl = 'https://www.googleapis.com/drive/v3/files/1_2i6_DgGUfgc3HNJrICUeEAg5GpQqvn6?key=AIzaSyAMLhicKHJG0-jAnwlRaAkFrrZqxTMIeg4&alt=media';
      var video = this.player;
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // If HLS is natively supported, let the browser do the work!
        video.src = "hlsUrl";
        video.addEventListener("loadedmetadata", function () {
          video.play();
        });
      } else if (Hls.isSupported()) {
        // If the browser supports MSE, use hls.js to play the video
        var hls = new Hls({
          // This configuration is required to insure that only the
          // viewer can access the content by sending a session cookie
          // to api.video service
          maxBufferLength: 120,
          xhrSetup: function (xhr, url) {
            xhr.withCredentials = true;
          }
        });
        hls.loadSource(hlsUrl);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          video.play();
        });
      } else {
        alert("Please use a modern browser to play the video");
      }
    }
  }
  _onTouchInsidePlayer = () => {
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }




  componentDidUpdate() {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/gechym/demo.js/demo2.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <video
        playsinline
        data-poster="http://htvc.vn/uploads/editor/images/scale.jpg"
        controls
        id='player'
        // onClick={this._onTouchInsidePlayer}
        ref={player => (this.player = player)}
        autoPlay={true}
        style={{
          width: '100%',
          height: '100%',
          outline: 'none'
        }}
      >
        <track src={sub} kind="subtitles" srclang="en" label="English" />
      </video>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlyrPlayer);

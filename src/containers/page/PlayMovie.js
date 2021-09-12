import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './PlayMovie.scss'
import Footer from './footer/Footer';
import HomePageHeader from './header/HomePageHeader'

// import PlyrVideo from './video/plyrVideo';
// import ReactHlsPlayer from 'react-hls-player';
import Hls from "hls.js";


class PlayMovie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // src : {
            //         type: "video",
            //         sources: [
            //             {
            //                 src: 'https://www.googleapis.com/drive/v3/files/1umm1BXVNddEGT7-YbDmdRO5MkY0RLUNw?key=AIzaSyAMLhicKHJG0-jAnwlRaAkFrrZqxTMIeg4&alt=media',
            //                 type: 'video/mp4',
            //                 size: 720,
            //             },
            //             {
            //                 src: 'https://www.googleapis.com/drive/v3/files/1josdh8v_o1Dg7X3UfLPJweyxTm1RDuMT?key=AIzaSyAMLhicKHJG0-jAnwlRaAkFrrZqxTMIeg4&alt=media',
            //                 type: 'video/mp4',
            //                 size: 1080,
            //             },
            //         ],
            //         poster: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
            //         // tracks: [
            //         //     {
            //         //       kind: 'captions',
            //         //       label: 'English',
            //         //       srclang: 'en',
            //         //       src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
            //         //       default: true,
            //         //     },
            //         //     {
            //         //       kind: 'captions',
            //         //       label: 'French',
            //         //       srclang: 'fr',
            //         //       src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
            //         //     },
            //         //   ],
            //     }
        }
        
    }

    componentDidMount() {
        if (this.player) {
            var hlsUrl = 'https://www.googleapis.com/drive/v3/files/1_0-g2QgmN1lDJ1HIsWzdmrI3kbxmkZiO?key=AIzaSyAMLhicKHJG0-jAnwlRaAkFrrZqxTMIeg4&alt=media';
            var video = this.player;
            if (video.canPlayType("application/vnd.apple.mpegurl")) {
              // If HLS is natively supported, let the browser do the work!
              video.src = "hlsUrl";
              video.addEventListener("loadedmetadata", function() {
                video.play();
              });
            } else if (Hls.isSupported()) {
              // If the browser supports MSE, use hls.js to play the video
              var hls = new Hls({
                // This configuration is required to insure that only the
                // viewer can access the content by sending a session cookie
                // to api.video service
                xhrSetup: function(xhr, url) {
                  xhr.withCredentials = true;
                }
              });
              hls.loadSource(hlsUrl);
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
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
        
    }


    render() {

        return (
            <>
            <HomePageHeader/>
                <div className="play-container">
                    <div className="play-content" style={{height:'2000px', marginTop:'56px'}}>
                        <div className="play-media">
                            <div className="row justify-content-center">
                                <div className="play-body col-12" style={{width:'960px'}}>
                                    {/* <PlyrVideo src={this.state.src}/> */}
                                    {/* <ReactHlsPlayer
                                        src="https://www.googleapis.com/drive/v3/files/1WT4KK2zYUqNtjH1bRW7PhX9tz4-jb99O?key=AIzaSyAMLhicKHJG0-jAnwlRaAkFrrZqxTMIeg4&alt=media"
                                        autoPlay={false}
                                        controls={true}
                                        width="100%"
                                        height="100%"
                                        ref = {this.player}
                                    >
                                    </ReactHlsPlayer> */}
                                    <video
                                        controls
                                        id='player'
                                        // onClick={this._onTouchInsidePlayer}
                                        ref={player => (this.player = player)}
                                        autoPlay={true}
                                        style={{
                                            width:'100%',
                                            height:'100%'
                                        }}
                                    >
                                         <track src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt" kind="subtitles" srclang="en" label="English"/>
                                         <track src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt" kind="subtitles" srclang="no" label="Norwegian"/>
                                    </video>
                                </div>
                            </div>
                        </div>
                        <script></script>
                        <div className="description-movie">

                        </div>
                        <div className='recomment-movie'>

                        </div>
                    </div>
                </div>
            <Footer/>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayMovie);

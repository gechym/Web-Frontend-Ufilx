import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './PlayMovie.scss'
import Footer from './footer/Footer';
import HomePageHeader from './header/HomePageHeader';
import RecommentMovie from './section/Recomment/RecommentMovie';

import sub from './sub.vtt'




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
            var hlsUrl = 'https://www.googleapis.com/drive/v3/files/1geaK9oLnYfjltQ-ZtxsKActr6gEQUsVO?key=AIzaSyAMLhicKHJG0-jAnwlRaAkFrrZqxTMIeg4&alt=media';
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
                maxBufferLength : 120,
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
                <HomePageHeader />
                <div className="play-container">
                    <div className="play-content" style={{height:'2000px', marginTop:'56px'}}>
                        <div className="play-media">
                            <div className="row">
                                <div className="play-body col-12">
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
                                         <track src={sub} kind="subtitles" srclang="en" label="English"/>
                                    </video>
                                </div>
                            </div>
                        </div>
                        
                        <div className="description-movie">
                            <div className="container">
                                <div className="row">
                                    <div className="col-2 img-movie">
                                        <img src="https://static.fptplay.net/static/img/share/video/24_03_2021/hoc-vien-anh-hung-phan-5-fpt-play-boku-no-hero-academia-season-5-fpt-play24-03-2021_08g53-07.jpg?w=282&mode=scale" alt="" />
                                    </div>

                                    <div className="col-7 description-info">

                                        <div className="film-title">
                                            <h3>Học Viện Anh Hùng (Phần 5)</h3>
                                        </div>

                                        <div className="user-action">
                                            <a href="" className="follow"><i className="fas fa-heart"></i> Theo dõi</a>
                                            <a href="" className="share"><i className="fas fa-share-alt"></i> Chia sẻ</a>

                                        </div>

                                        <div className="film-desc">
                                            <span>Nội dung</span>
                                            <p>Học Viện Anh Hùng (Phần 5) vietsub | Anh Hùng Học Viện (Phần 5
                                                ) vietsub | Boku No Hero Academia Season 5 vietsub | My Hero A
                                                cademia Season 5 vietsub: Chuyển thể từ arc Pro Hero trong manga cùng
                                                tên của tác giả Horikoshi Kouhei. Kết thúc phần trước: Một trong những
                                                trận đánh lớn nhất trong lịch sử, khi Endeavour cố gắng trở thành Biểu t
                                                ượng hòa bình mới và chống lại nhân vật mới của Liên minh tội phạm: “High
                                                End” Nomu. Ngay cả khi
                                            </p>
                                        </div>

                                    </div>

                                    <div className="col-3 some-info-movie">
                                        <table>
                                            <tbody>

                                                <tr>
                                                    <td className="info-left">Thời lượng</td>
                                                    <td className="info-right">24 phút</td>

                                                </tr>

                                                <tr>

                                                    <td className="info-left">Quốc gia</td>
                                                    <td className="info-right">Nhật Bản</td>
                                                </tr>

                                                <tr>

                                                    <td className="info-left">Thể loại</td>

                                                    <td className="info-right">

                                                        <a href="/the-loai/hanh-dong">
                                                            Hành động,
                                                        </a>

                                                        <a href="/the-loai/vien-tuong">
                                                            Viễn tưởng,
                                                        </a>

                                                        <a href="/the-loai/sieu-nhien">
                                                            Siêu nhiên
                                                        </a>

                                                    </td>


                                                </tr>

                                                <tr>
                                                    <td className="info-left">Phát hành</td>
                                                    <td className="info-right">2021</td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='recomment-movie'>
                            <RecommentMovie />
                        </div>
                    </div>
                </div>
                <Footer />
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

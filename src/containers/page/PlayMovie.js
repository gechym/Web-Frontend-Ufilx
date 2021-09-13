import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './PlayMovie.scss'
import Footer from './footer/Footer';
import HomePageHeader from './header/HomePageHeader';
import RecommentMovie from './section/Recomment/RecommentMovie';
import PlyrPlayer from './video/plyrVideo'

class PlayMovie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }
    componentWillMount() {


    }
    componentDidMount() {

    }
    componentDidUpdate() {

    }







    render() {
        return (
            <>

                <HomePageHeader />
                <div className="play-container">
                    <div className="play-content" style={{ height: '2000px', marginTop: '56px' }}>

                        <div className="play-media">
                            <div className="row">
                                <div className="play-body col-12">
                                    <PlyrPlayer />
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

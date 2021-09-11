import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import HomePageHeader from './header/HomePageHeader';
import Footer from './footer/Footer';
import './DetailFilm.scss'


class DetailFilm extends Component {
    constructor(props){
        super(props)
       
    }
    async componentDidMount(){
        
    }

    componentDidUpdate(){

    }

    render() {
        return (
            <>
                <HomePageHeader/>
                <div className="detail-container">
                    <div className="detail-content">
                        <div className="content-top">
                            <div className="right">
                                <div className='bk-wrap'>
                                    <div className="right-content">
                                        <div className="name-img">
                                        </div>
                                        <h1>Tyler Rake: Nhiệm vụ giải cứu</h1>
                                        <span style={{color:'#a3a3a3',marginBottom:'20px', marginTop:'20px',display:'block'}}>2020 | 18+ | 1g 57ph | Phim chuyển thể từ sách</span>
                                        <p style={{marginBottom:'20px', display:'block'}}>
                                            <span style={{color:'#a3a3a3'}}>
                                            Diễn viên chính :
                                            </span>
                                            Chris Hemsworth,Rudhraksh Jaiswal,Randeep Hooda
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="seen-now">
                                <h4>
                                    <svg class="value-prop-logo" viewBox="225 0 552 1000"><defs><radialGradient id="42a73bb1-e869-4f09-9a71-0b99325f5e9a-a" r="75%" gradientTransform="matrix(.38 0 .5785 1 .02 0)"><stop offset="60%" stop-opacity=".3"></stop><stop offset="90%" stop-opacity=".05"></stop><stop offset="100%" stop-opacity="0"></stop></radialGradient></defs><path d="M225 0v1000c60-8 138-14 198-17V0H225" fill="#b1060e"></path><path d="M579 0v983c71 3 131 9 198 17V0H579" fill="#b1060e"></path><path d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225" fill="url(#42a73bb1-e869-4f09-9a71-0b99325f5e9a-a)"></path><path d="M225 0l349 983c76 3 136 9 203 17L423 0H225" fill="#e50914"></path></svg>
                                    &nbsp;&nbsp;Xem mọi nội dung bạn muốn.
                                </h4>
                                <button>Xem Phim nào</button>
                            </div>
                            <div className="traler-content">
                                <div className=""></div>
                            </div>
                        </div>
                        <div className="content-bottom">
                            
                        </div>  
                    </div>
                </div>
                <Footer isShow={false}/>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailFilm);

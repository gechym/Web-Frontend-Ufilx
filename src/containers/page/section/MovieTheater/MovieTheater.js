import React, { Component } from 'react';
import Slider from "react-slick";
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';

import './MovieTheater.scss'






class MovieTheater extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    async componentDidMount() {

    }

    componentDidUpdate() {

    }


    render() {

        return (

            <div className="section-carousel-movie-theater">
                <div className="content-carousel">

                    <div className="title-carousel">

                        <h3 className="text-carousel">MovieTheater</h3>
                        {/* 
                        <div className="more-carousel">
                            <a href="">Xem thêm</a>
                        </div> */}

                    </div>

                    <div className="container">

                        <Slider {...this.props.settings}>

                            <div className="block-slide-movie-theater">
                                <div className="img-customize-movie-theater">
                                    <p>Phim hành động</p>
                                    <i className="play fas fa-play-circle"></i>
                                </div>

                            </div>

                            <div className="block-slide-movie-theater">
                                <div className="img-customize-movie-theater">
                                    <p>Phim hành động</p>
                                    <i className="play fas fa-play-circle"></i>
                                </div>

                            </div>

                            <div className="block-slide-movie-theater">
                                <div className="img-customize-movie-theater">
                                    <p>Phim hành động</p>
                                    <i className="play fas fa-play-circle"></i>
                                </div>

                            </div>

                            <div className="block-slide-movie-theater">
                                <div className="img-customize-movie-theater">
                                    <p>Phim hành động</p>
                                    <i className="play fas fa-play-circle"></i>
                                </div>

                            </div>

                            <div className="block-slide-movie-theater">
                                <div className="img-customize-movie-theater">
                                    <p>Phim hành động</p>
                                    <i className="play fas fa-play-circle"></i>
                                </div>

                            </div>

                            <div className="block-slide-movie-theater">
                                <div className="img-customize-movie-theater">
                                    <p>Phim hành động</p>
                                    <i className="play fas fa-play-circle"></i>
                                </div>

                            </div>

                            <div className="block-slide-movie-theater">
                                <div className="img-customize-movie-theater">
                                    <p>Phim hành động</p>
                                    <i className="play fas fa-play-circle"></i>
                                </div>

                            </div>

                            <div className="block-slide-movie-theater">
                                <div className="img-customize-movie-theater">

                                    <p>Phim hành động</p>
                                    <p>Phim hành động</p>
                                    <i className="play fas fa-play-circle"></i>
                                </div>

                            </div>





                        </Slider>
                    </div>
                </div>
            </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(MovieTheater);

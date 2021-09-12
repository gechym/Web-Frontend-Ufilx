import React, { Component } from 'react';
import Slider from "react-slick";
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';

import './PopularFilm.scss'
import '../../homePage.scss'





class PopularFilm extends Component {
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
        let settings = {

            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,

        };

        return (

            <div className="section-carousel-popular-film">
                <div className="content-carousel">

                    <div className="title-carousel">

                        <h3 className="text-carousel">Popular Film</h3>
                        {/* 
                        <div className="more-carousel">
                            <a href="">Xem thêm</a>
                        </div> */}

                    </div>

                    <div className="container">

                        <Slider {...settings}>

                            <div className="block-slide-popular-film">
                                <div className="img-customize-popular-film">

                                    <p>Phim hành động</p>
                                </div>

                            </div>

                            <div className="block-slide-popular-film">
                                <div className="img-customize-popular-film">

                                    <p>Phim hành động</p>
                                </div>

                            </div>

                            <div className="block-slide-popular-film">
                                <div className="img-customize-popular-film">
                                    <p>Phim hành động</p>

                                </div>

                            </div>

                            <div className="block-slide-popular-film">
                                <div className="img-customize-popular-film">
                                    <p>Phim hành động</p>

                                </div>

                            </div>

                            <div className="block-slide-popular-film">
                                <div className="img-customize-popular-film">
                                    <p>Phim hành động</p>
                                </div>

                            </div>

                            <div className="block-slide-popular-film">
                                <div className="img-customize-popular-film">
                                    <p>Phim hành động</p>
                                </div>

                            </div>

                            <div className="block-slide-popular-film">
                                <div className="img-customize-popular-film">

                                    <p>Phim hành động</p>
                                </div>

                            </div>

                            <div className="block-slide-popular-film">
                                <div className="img-customize-popular-film">

                                    <p>Phim hành động</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(PopularFilm);

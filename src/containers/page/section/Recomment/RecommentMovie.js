import React, { Component } from 'react';
import Slider from "react-slick";
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';

import './RecommentMovie.scss'


import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";



class RecommentMovie extends Component {
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
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,

        };

        return (

            <div className="section-carousel-recomment-movie">
                <div className="content-carousel">

                    <div className="title-carousel">

                        <h3 className="text-carousel">Recomment Film</h3>


                    </div>

                    <div className="container">

                        <Slider {...settings}>

                            <div className="block-slide-recomment-movie">
                                <div className="img-customize-recomment-movie">


                                </div>

                                <p>RecommentMovie</p>

                            </div>

                            <div className="block-slide-recomment-movie">
                                <div className="img-customize-recomment-movie">


                                </div>
                                <p>RecommentMovie</p>
                            </div>

                            <div className="block-slide-recomment-movie">
                                <div className="img-customize-recomment-movie">


                                </div>
                                <p>RecommentMovie</p>
                            </div>

                            <div className="block-slide-recomment-movie">
                                <div className="img-customize-recomment-movie">


                                </div>
                                <p>Bách Quỷ Dạ Hành: Hậu duệ của NuRa</p>
                            </div>

                            <div className="block-slide-recomment-movie">
                                <div className="img-customize-recomment-movie">

                                </div>
                                <p>Bách Quỷ Dạ Hành: Hậu duệ của NuRa</p>
                            </div>

                            <div className="block-slide-recomment-movie">
                                <div className="img-customize-recomment-movie">

                                </div>
                                <p>Bách Quỷ Dạ Hành: Hậu duệ của NuRa</p>
                            </div>

                            <div className="block-slide-recomment-movie">
                                <div className="img-customize-recomment-movie">


                                </div>
                                <p>RecommentMovie</p>
                            </div>

                            <div className="block-slide-recomment-movie">
                                <div className="img-customize-recomment-movie">


                                </div>
                                <p>RecommentMovie</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecommentMovie);

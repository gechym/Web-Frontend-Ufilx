import React, { Component } from 'react';
import Slider from "react-slick";
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';

import './Cartoon.scss'






class Cartoon extends Component {
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

            <div className="section-carousel-cartoon">
                <div className="content-carousel">

                    <div className="title-carousel">

                        <h3 className="text-carousel">Cartoon</h3>
                        {/* 
                        <div className="more-carousel">
                            <a href="">Xem thêm</a>
                        </div> */}

                    </div>

                    <div className="container">

                        <Slider {...this.props.settings}>

                            <div className="block-slide-cartoon">
                                <div className="img-customize-cartoon">

                                </div>

                                <p>Phim hành động</p>
                            </div>

                            <div className="block-slide-cartoon">
                                <div className="img-customize-cartoon">

                                </div>

                                <p>Phim hành động</p>
                            </div>

                            <div className="block-slide-cartoon">
                                <div className="img-customize-cartoon">

                                </div>

                                <p>Phim hành động</p>
                            </div>

                            <div className="block-slide-cartoon">
                                <div className="img-customize-cartoon">

                                </div>

                                <p>Phim hành động</p>
                            </div>

                            <div className="block-slide-cartoon">
                                <div className="img-customize-cartoon">

                                </div>

                                <p>Phim hành động</p>
                            </div>

                            <div className="block-slide-cartoon">
                                <div className="img-customize-cartoon">

                                </div>

                                <p>Phim hành động</p>
                            </div>

                            <div className="block-slide-cartoon">
                                <div className="img-customize-cartoon">

                                </div>

                                <p>Phim hành động</p>
                            </div>

                            <div className="block-slide-cartoon">
                                <div className="img-customize-cartoon">

                                </div>

                                <p>Phim hành động</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cartoon);

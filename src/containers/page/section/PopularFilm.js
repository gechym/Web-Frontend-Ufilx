import React, { Component } from 'react';
import Slider from "react-slick";
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';

import './PopularFilm.scss'


class PopularFilm extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    async componentDidMount(){
        
    }

    componentDidUpdate(){

    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="section-container">
                <div className="section-header">
                    <h3>Phim phổ biến</h3>
                </div>
                <div className="section-body">
                    
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

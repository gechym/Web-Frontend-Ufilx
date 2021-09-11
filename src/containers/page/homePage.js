import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import HomePageHeader from './header/HomePageHeader';
import PopularFilm from './section/Popular/PopularFilm';
import MovieTheater from './section/MovieTheater/MovieTheater';
import Cartoon from './section/Cartoon/Cartoon';



import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

import './homePage.scss'

class HomePage extends Component {


    render() {
        let settings = {

            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            // autoplay: true,

        };



        return (
            <>
                <HomePageHeader />
                <div className="page-container">
                    <PopularFilm />
                    <MovieTheater settings={settings} />
                    <Cartoon settings={settings} />
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

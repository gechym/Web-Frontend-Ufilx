import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './homePage.scss'

import HomePageHeader from './HomePageHeader';
import PopularFilm from './section/PopularFilm';

class HomePage extends Component {
    
    settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    render() {
        

        return (
            <>
                <HomePageHeader />
                <div className="page-container">
                    <PopularFilm/>
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

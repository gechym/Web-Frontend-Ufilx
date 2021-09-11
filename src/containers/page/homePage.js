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
import Footer from './footer/Footer';

class HomePage extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    componentDidUpdate() {
        
    }

    handleScroll = () => {
        console.log('oke')
    }

    render() {
        let settings = {

            infinite: true,
            speed: 800,
            slidesToShow: 5,
            slidesToScroll: 1,
            // autoplay: true,

        };
        return (
            <>
                <HomePageHeader />
                <div onClick={e => console.log('ádasdasd')} className="page-container">
                    <PopularFilm />
                    <MovieTheater settings={settings} />
                    <Cartoon settings={settings} />
                </div>
                <Footer isShow = {true}/>
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

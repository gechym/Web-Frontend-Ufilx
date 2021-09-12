import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './PlayMovie.scss'
import Footer from './footer/Footer';
import HomePageHeader from './header/HomePageHeader'


class PlayMovie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }


    componentWillUnmount() {

    }

    componentDidUpdate() {

    }


    render() {

        return (
            <>
            <HomePageHeader/>
                <div className="play-container">
                    <div className="play-content" style={{height:'2000px', marginTop:'60px'}}>
                        <div className="play-media">

                        </div>
                        <div className="description-movie">

                        </div>
                        <div className='recomment-movie'>

                        </div>
                    </div>
                </div>
            <Footer/>
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

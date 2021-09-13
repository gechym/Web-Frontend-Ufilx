import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './HomePageHeader.scss'
import logo from '../../../assets/images/logo.png'

import { withRouter } from 'react-router';

// component homePage

class HomePageHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }


    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

    // componentDidUpdate() {

    // }

    // handleScroll = () => {
    //     console.log('oke')
    // }
    


    render() {


        return (
            <div className="header-container-netfilx">
                <div className="header-content">
                    <div className="content-left">
                        <div className="logo"  onClick={() => {
                                this.props.history.push(`/home`)
                            }}>
                            <img className="logo" src={logo} alt="" />
                        </div>
                    </div>
                    <div className="content-center">

                    </div>
                    <div className="content-right">
                        <button className="bt active">join now</button>
                        <button className="bt">sign in </button>
                    </div>
                </div>
            </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePageHeader));

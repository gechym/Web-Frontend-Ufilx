import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import HomePageHeader from './header/HomePageHeader';
import Footer from './footer/Footer';



class DetailFilm extends Component {
    constructor(props){
        super(props)
       
    }
    async componentDidMount(){
        
    }

    componentDidUpdate(){

    }

    render() {
        return (
            <>
                <HomePageHeader/>
                <div className="detail-container">
                    <div className="detail-content">
                        <div className="content-top">

                        </div>
                        <div className="content-botton">

                        </div>  
                    </div>
                </div>
                <Footer isShow={false}/>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailFilm);

import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import HomePageHeader from './header/HomePageHeader';
import Footer from './footer/Footer';
import './DetailFilm.scss'


class DetailFilm extends Component {
    constructor(props) {
        super(props)

    }
    async componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <>
                <HomePageHeader />
                <div className="detail-container">


                    <div className="detail-content">

                        <div className="content-top">

                        </div>



                        <div className="content-bottom">

                            <div className="detail-title">
                                <div className="title-firm">
                                    <h3>Content</h3>
                                    <span>|</span>
                                    <p>Sisyphus</p>
                                </div>

                                <div className="description-firm">
                                    <h5>Release year: 2021</h5>
                                    <p>An unfathomable incident introduces a genius engineer to dangerous secrets of the world — and to a woman from the future who's come looking for him.</p>
                                </div>
                            </div>



                            <div className="detail-image">

                                <div className="row">

                                    <div className="image-firm col-3">
                                        <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABR5_JCitEOB8DLTa5YC-GivhT5upVzQVFYi8_Vp04w5pqsxTJ3P5qJLq9Pn54ISP_VLq_cPa_NoI0A0u4U-8Kbjws8BTIISyUvUPXcgLr-shLGZX.jpg?r=237" alt="" />
                                        <p>Picture 1</p>
                                    </div>

                                    <div className="image-firm col-3">
                                        <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWfG6CL5xOVKOaLAn7_ytJKBSQEbzYHpJjgZd69NZ_Isa66q7L9SS0GI-ZnxIibDk7taANu5_2pIExSpnpu5F9sCFrU12heWDTtm1hwJaC-Zspb-.jpg?r=9f3" alt="" />
                                        <p>Picture 2</p>
                                    </div>

                                    <div className="image-firm col-3">
                                        <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa1u5NcT-3D69U4Y0TEP9vJQCbI3oXxgrt-8eGhZ5utKefLjx2pH1bWjOmU13pkdHM79M7w8s5EXpQSw7xIg51MKnxWakyn-BVPSQ-HwfeIQsQDF.jpg?r=285" alt="" />
                                        <p>Picture 3</p>
                                    </div>

                                    <div className="image-firm col-3">
                                        <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRb2eC5cbbnNdgnoEDQ6lYMvMIXdAL9M9YWbCUAwFSLI-bgSgyxNanPvt1X4Y9j5g9O36fWlBV29s9Pu-w1GQ8bhBq7Kv_7MC3o33WzwQG83qsqb.jpg?r=b1e" alt="" />
                                        <p>Picture 4</p>
                                    </div>

                                    <div className="image-firm col-3">
                                        <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABR5_JCitEOB8DLTa5YC-GivhT5upVzQVFYi8_Vp04w5pqsxTJ3P5qJLq9Pn54ISP_VLq_cPa_NoI0A0u4U-8Kbjws8BTIISyUvUPXcgLr-shLGZX.jpg?r=237" alt="" />
                                        <p>Picture 5</p>
                                    </div>

                                    <div className="image-firm col-3">
                                        <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABR5_JCitEOB8DLTa5YC-GivhT5upVzQVFYi8_Vp04w5pqsxTJ3P5qJLq9Pn54ISP_VLq_cPa_NoI0A0u4U-8Kbjws8BTIISyUvUPXcgLr-shLGZX.jpg?r=237" alt="" />
                                        <p>Picture 6</p>
                                    </div>

                                    <div className="image-firm col-3">
                                        <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABR5_JCitEOB8DLTa5YC-GivhT5upVzQVFYi8_Vp04w5pqsxTJ3P5qJLq9Pn54ISP_VLq_cPa_NoI0A0u4U-8Kbjws8BTIISyUvUPXcgLr-shLGZX.jpg?r=237" alt="" />
                                        <p>Picture 7</p>
                                    </div>

                                    <div className="image-firm col-3">
                                        <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABR5_JCitEOB8DLTa5YC-GivhT5upVzQVFYi8_Vp04w5pqsxTJ3P5qJLq9Pn54ISP_VLq_cPa_NoI0A0u4U-8Kbjws8BTIISyUvUPXcgLr-shLGZX.jpg?r=237" alt="" />
                                        <p>Picture 8</p>
                                    </div>





                                </div>




                            </div>

                            <div className="detail-more">

                                <h2>More Details</h2>

                                <div className="genres col-12">
                                    <p>Genres</p>
                                    <span>US Movies, Movies Based on Books, Action & Adventure</span>
                                </div>

                                <div className="row">
                                    <p>Cast</p>

                                    <div className="cast col-3">
                                        <span>Cho Seung-woo</span>

                                    </div>


                                    <div className="cast col-3">
                                        <span>Cho Seung-woo</span>

                                    </div>


                                    <div className="cast col-3">
                                        <span>Cho Seung-woo</span>

                                    </div>


                                    <div className="cast col-3">
                                        <span>Cho Seung-woo</span>

                                    </div>


                                    <div className="cast col-3">
                                        <span>Cho Seung-woo</span>

                                    </div>


                                    <div className="cast col-3">
                                        <span>Cho Seung-woo</span>

                                    </div>






                                </div>


                            </div>


                        </div>

                    </div>


                </div>
                <Footer isShow={false} />
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

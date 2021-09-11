import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './Footer.scss'


class Footer extends Component {
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
        return (
            <>
            <div className="footer-container text-center" style={{textAlign:'center'}}>
                <h1 style={{color:'#FFFF',paddingTop:'20px'}}>Còn rất nhiều nội dung đáng xem.</h1>
                <p style={{color:'#FFFF',fontSize:'18px' , width:'600px', margin:'20px auto'}}>
                Netflix có một thư viện phong phú gồm các phim truyện, phim tài liệu, chương trình truyền hình, anime, tác phẩm giành giải thưởng của Netflix và nhiều nội dung khác. Xem không giới hạn bất cứ lúc nào bạn muốn.
                </p>
                <button className="bt">
                    Tham Gia ngay
                </button>
            </div>
            <div className="footer-container">
                <h4>Bạn có câu hỏi ? liên hệ chúng tôi</h4>
                <div className="footer-content">
                    <div className="info">
                        <ul>
                            <li>Câu hỏi thường gặp</li>
                            <li>Câu hỏi thường gặp</li>
                            <li>Câu hỏi thường gặp</li>
                            <li>Câu hỏi thường gặp</li>
                        </ul>
                    </div>
                    <div className="info">
                        <ul>
                            <li>Câu hỏi thường gặp</li>
                            <li>Câu hỏi thường gặp</li>
                            <li>Câu hỏi thường gặp</li>
                            <li>Câu hỏi thường gặp</li>
                        </ul>
                    </div>
                    <div className="info">
                        <ul>
                            <li>Câu hỏi thường gặp</li>
                            <li>Câu hỏi thường gặp</li>
                            <li>Câu hỏi thường gặp</li>
                            <li>Câu hỏi thường gặp</li>
                        </ul>
                    </div>
                    <div className="info">
                        <ul>
                            <li>Câu hỏi thường gặp</li>
                            <li>Câu hỏi thường gặp</li>
                            <li>Câu hỏi thường gặp</li>
                            <li>Câu hỏi thường gặp</li>
                        </ul>
                    </div>
                </div>
                <select>
                    <option>Việt nam</option>
                    <option>English</option>
                </select>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

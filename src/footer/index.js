import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                如有任何建议，请给我发邮件
                <a href="mailto:happydongdong001@gmail.com">
                    happydongdong001@gmail.com
                </a>
            </div>
        )
    }
};

export default Footer;
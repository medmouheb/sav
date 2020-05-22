import React, { Component } from 'react';
import "./brands.css"
import axios from "axios"
class Brands extends Component {
    state = {
        data: []
    }
    componentWillMount() {
        axios.get(`http://localhost/gl/crud/company/read.php`)
            .then(res => {
                this.setState({ data: res.data.data })
            }
            )
    }


    render() {

        return (
            <div className="gphone-brands">
                {this.state.data.map(el => {
                    return <a href={`/brand:${el.id}`}> <div style={{ cursor: 'pointer' }} className="brand-logo">
                        <img src={el.company_logo} />
                    </div>
                    </a>
                })}
                {/* <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/apple-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/LogosGreen_Apple.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/samsung-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/LogosGreen_Samsung.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/huawei-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/LogosGreen_Huawei.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/oneplus-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/LogosGreen_One-Plus.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/xiaomi-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/LogosGreen_MI.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/sony-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/4-sony.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/zte-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/ZTE-Logo.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/lg-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/LogosGreen_LG.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/meizu-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/thumb_6912_brands_big.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/lenovo-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/LogosGreen_Lenovo.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/oppo-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/thumb_6927_brands_big.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/cat-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/LogosGreen_Cat.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/nokia-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/LogosGreen_Nokia-31.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/google-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/LogosGreen_Google.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/asus-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/LogosGreen_Asus.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/alcatel-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/LogosGreen_Alcatel.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/blackberry-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/LogosGreen_BalckBerry-e1550668527237.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/microsoft-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/03/Microsoft-logo.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/htc-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/8-htc.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/hp-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/HP_New_Logo_2D.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/motorola-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/LogosGreen_Motorola-300x57-e1550668555226.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/dell-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/Dell_logo.png" />
                </div>
                <div style={{ cursor: 'pointer' }} onclick="document.location='https://gphone.gr/proto2/index.php/todhiba-devices-grid/'" className="brand-logo">
                    <img src="https://gphone.gr/proto2/wp-content/uploads/2019/02/Toshiba-logo.png" />
                </div> */}
            </div>
        );
    }
}

export default Brands
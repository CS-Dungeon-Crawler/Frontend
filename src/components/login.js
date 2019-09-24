import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // username:''
        }
    }



    render() {
        return(
            <div>
                <p>Login</p>
                <Link to='/mainSplash'>
                    Login
                    </Link>
            </div>
        )
    }
}

export default Login
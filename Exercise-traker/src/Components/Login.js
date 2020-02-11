import React, { Component } from 'react'
import { fetchData } from '../Network/fetch'
import { userLoginUrl } from '../config/urls'

export default class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            isRememberMe: false,
            user_err_msg: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        var userData = { username: this.state.username, password: this.state.password, isRememberMe: this.state.isRememberMe }
        const responce = await fetchData(userLoginUrl, "POST", userData)
        if (responce.result === 'ok') {
            window.location.href = "/dashboard"
        }
        else {
            this.setState({
                user_err_msg: responce.user_err_msg,
            })
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <header>
                <div className="row sec-box">
                    <div className="col-lg-12 head">
                        <h1>Welcome</h1>
                    </div>
                    <div className="col-lg-12 section">
                        <form onSubmit={this.handleSubmit}>
                            User Name:<br />
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                            <p className="error">{this.state.user_err_msg}</p>
                            Password: <br />
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                            <p className="error">{this.state.pass_err_msg}</p>
                            <div className="row">
                                <div className="col-lg-6 rememberMeBut">
                                    <input type="checkbox" name="isRememberMe" checked={this.state.check}
                                        onChange={(e) => {
                                            this.handleChange({
                                                target: {
                                                    name: e.target.name,
                                                    value: e.target.checked,
                                                },
                                            });
                                        }} />
                                    <label htmlFor="isRememberMe" >Remember me</label></div>
                                <div className="col-lg-6">
                                    <button>Log in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-12 footer">
                        <a href="/">Don't have an account?</a>
                    </div>
                </div>
            </header>
        )
    }
}
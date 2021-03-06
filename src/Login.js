import React, {Component} from 'react';
//import { Link } from 'react-router-dom';
import fire from './config/Fire';
import './App.css';
import avatar from './img/male_avatar.svg';
import cinema from './img/home_cinema.svg';

class Login extends Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email:'',
            password:''
        };
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
            }).then((u)=>{console.log(u)}).catch((error) => {console.log(error);})
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            }).then((u)=>{console.log(u)}).catch((error) => {console.log(error);})
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return(
            <div className='container'>
                <div className='img'>
                    <img src={cinema} alt={'cinema'}></img>
                </div>
                <div className='login-content'>
                <form>
                    <img src={avatar} alt={'avatar'}></img>
                    <h2 className='title'>Welcome</h2>
                        <div className='input-div one'>
                            <div className='i'>
                                <i className='fas fa-user'></i>
                            </div>
                            <div className='div'>
                                <input type='email' className='input' value={this.state.email} onChange={this.handleChange} name='email' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter Email'></input>
                            </div>                    
                        </div>
                        <div className='input-div pass'>
                            <div className='i'>
                                <i className='fas fa-lock'></i>
                            </div>
                            <div className='div'>
                                <input type='password' className='input' value={this.state.password} onChange={this.handleChange} name='password' id='exampleInputPassword1' aria-describedby='emailHelp' placeholder='Enter Password'></input>
                            </div>                    
                        </div>
                        <a href=''>Forgot Password?</a>
                        <input type='submit' className='btn' value='Login' onClick={this.login}></input>
                        <input type='submit' className='btn' value='Signup' onClick={this.signup}></input>
                </form>
            </div>
        </div>
            );
        }
    }

export default Login;
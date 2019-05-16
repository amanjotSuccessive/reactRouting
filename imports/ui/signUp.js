import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import Button from '@material-ui/core/Button';
export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count || 0,
        }
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const email = this.refs.email.value.trim();
        const password = this.refs.password.value.trim();
        Accounts.createUser({email,password}, err =>{
        if(err) console.log('---->',err)
        else {
            //...................
        }
        })
    }

    render() {
        return (
            <div>
                <form >
                    <input type='email' ref='email' name='email' placeholder='Email' />
                    <input type='password' ref='password' name='password' placeholder='Password' />
                    <Button variant="contained" color="primary" onClick={this.onSubmit.bind(this)}>create User</Button>
                </form>
                <p>{this.state.count}</p>
                <Link to='/login'> Already have an account?</Link>
            </div>
        )
    }
}
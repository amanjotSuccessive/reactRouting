import React from 'react';
export default class Login extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        const email = this.refs.email.value.trim();
        const password = this.refs.password.value.trim();
        Meteor.loginWithPassword(email, password, err => {
            if (err) console.log('---->', err)
            else {
                //...................
                console.log('---->logged')
            }
        })
    }
    logout(e) {
        e.preventDefault();
        Meteor.logout(err => {
            if (err) console.log('---->', err)
            else {
                console.log('---->logged out')
            }
        })
    }

    render() {
        return (
            <form >
                <input type='email' ref='email' name='email' placeholder='Email' />
                <input type='password' ref='password' name='password' placeholder='Password' />
                <button onClick={this.onSubmit.bind(this)}>Login</button>
                <button onClick={this.logout.bind(this)}>Logout</button>
            </form>
        )
    }
}
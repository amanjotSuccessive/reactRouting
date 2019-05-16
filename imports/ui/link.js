import React from 'react';
import { Links }from '../api/links';
import LinksList from './linksList';
export default class Link extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        console.log('this',this)
        const link = this.refs.url.value.trim();
       console.log(e,'--url--->',link)
        if(link) {
            Links.insert({link})
        }
    }
    render() {
        return (
            <div>
                <p> Link here</p>
                <form>
                    <input type="text" ref="url" placeholder='url' >
                    </input>
                    <button onClick={this.onSubmit.bind(this)}>Add Link</button>
                    <LinksList/>
                </form>
            </div>
        )
    }
}
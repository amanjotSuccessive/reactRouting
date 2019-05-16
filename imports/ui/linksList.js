import React from 'react';
import { Links } from '../api/links';

export default class LinksList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            link: []
        }
    }

    componentDidMount() {
        console.log('->>cal')
        Tracker.autorun(() => {
            const link = Links.find().fetch();
            this.setState({ link })
            console.log('----->', link)
        })
    }

    componentWillUnmount() {
        console.log('unmount')
    }

    renderLinksListItems() {
        console.log('==>',this.state.link)
        return this.state.link.map((link, index) => {
            console.log('-->',link.link)
            return (<p key={index}>{link.link}</p>)
        })
    }

    render() {
        return (
            <div>Links {this.renderLinksListItems()}</div>
        );
    }
}
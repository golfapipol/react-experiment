import React, { Component } from "react";
import cookie from 'js-cookie'
import fetch from 'isomorphic-unfetch'

class RepositoryPage extends Component {
    static async getInitialProps(context) {
        const id = context.query.id
        const res = await fetch(`https://api.github.com/repositories/${id}`)
        const result = await res.json()
        return { repository: result }
    }

    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }

    saveCookie() {
        let counter = cookie.get('counter')
        if (!counter) {
            counter = this.state.counter
        }
        console.log(`counter ${counter}`)
        cookie.set('counter', (+counter) + 1, { expires: 365 })
    }

    render() {
        return <div>
        Repository
        <div>
            {this.props.repository.full_name}
            <button type="button" onClick={(e) => {
                this.saveCookie()
            }}>save cookies</button>
            {this.state.counter}
        </div>
      </div>
    }
}

export default RepositoryPage
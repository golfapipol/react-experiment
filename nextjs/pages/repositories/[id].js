import React, { Component } from "react";

class RepositoryPage extends Component {
    static async getInitialProps(context) {
        const id = context.query.id
        const res = await fetch(`https://api.github.com/repositories/${id}`)
        const result = await res.json()
        return { repository: result }
    }

    render() {
        return <div>
        Repository
        <ol>
          {users.map((user, i) => <li key={i}>{user.login}</li>)}
        </ol>
      </div>
    }
}

export default RepositoryPage
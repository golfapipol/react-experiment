import React, {Component} from 'react'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

class RepositoriesPage extends Component {
  static async getInitialProps(context) {
    const res = await fetch('https://api.github.com/repositories')
    const results = await res.json()
    return { repositories: results }
  }

  constructor(props) {
    super(props)
    this.state = {
      search: '',
    }
  }

  render() {
    console.log("this.props", this.props)
    return (
      <div>
        <h2>Repositories</h2>
        <ul>
          {this.props.repositories.map((repository, i) => <li key={i}><Link href={`/repositories/${repository.id}`}>{repository.full_name}</Link></li>)}
        </ul>
      </div>
    )
  }
}

export default RepositoriesPage
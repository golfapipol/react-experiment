import fetch from 'isomorphic-unfetch'

function UsersPage(props) {
  const {users} = props
  return <div>
    Users
    <ol>
      {users.map((user, i) => <li key={i}>{user.login}</li>)}
    </ol>
  </div>
}

UsersPage.getInitialProps = async (context) => {
  const res = await fetch('https://api.github.com/users')
  const results = await res.json()
  return { users: results }
}

export default UsersPage
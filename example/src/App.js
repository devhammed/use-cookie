import React from 'react'
import useCookie from '@devhammed/use-cookie'
import './App.css'

const App = () => {
  const [username, setUsername, deleteUsername] = useCookie('username', 'User')
  return (
    <section className='App'>
      <h1>Hello {username}!</h1>
      <p>Edit below input, Your name will be stored in a cookie. you can refresh this page to see how it persists.</p>
      <input
        type='text'
        className='App__Input'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className='App__Button'
        onClick={() => deleteUsername()}
      >
        Delete Cookie
      </button>
      <p className='App__Links'>
        <span>
          Made by <a href='https://devhammed.github.io'>Hammed Oyedele</a>
        </span>
        {` | `}
        <span>
          <a href='https://github.com/devhammed/use-cookie'>View on GitHub</a>
        </span>
      </p>
    </section>
  )
}
export default App

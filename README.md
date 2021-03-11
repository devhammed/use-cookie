# @devhammed/use-cookie

> Get, Set, Update and Delete Cookie using React Hooks.

[![NPM](https://img.shields.io/npm/v/@devhammed/use-cookie.svg)](https://www.npmjs.com/package/@devhammed/use-cookie) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Made in Nigeria](https://img.shields.io/badge/made%20in-nigeria-008751.svg?style=flat-square)](https://github.com/acekyd/made-in-nigeria)

## Install

```bash
npm install --save @devhammed/use-cookie
```

## Usage

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import useCookie from '@devhammed/use-cookie'

const App = () => {
  const [username, setUsername, deleteUsername] = useCookie('username', 'User')
  return (
    <section>
      <h1>Hello {username}!</h1>
      <p>Edit below input, Your name will be stored in a cookie. you can refresh this page to see how it persists.</p>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={() => deleteUsername()}
      >
        Delete Cookie
      </button>
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```
[View Demo](https://devhammed.github.io/use-cookie)

## API
```tsx
  // Using the Hook
  useCookie(key: string, defaultValue?: any): [any, (value: any, options?: object) => void, () => void]

  // Setting Example
  // Array or Object passed to the function will be turned into JSON.
  // Options and the keys are optionally and below are the default options:
  const options = {
    expires: 0,
    domain: '',
    path: '',
    secure: false,
    httpOnly: false,
    maxAge: 0,
    sameSite: ''
  }
  setCookie(value: any, options?: object)

  // Delete Example
  deleteCookie()
```

useCookie() hook returns an array containing three items. The first item is the cookie value,
the second item is the function to update the cookie and the third item is the function to delete the cookie.

## License

MIT © [devHammed](https://github.com/devHammed)

import React from 'react'
import Context from '../Context'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ isAuth, activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <button>Iniciar sesión</button>
          </form>
        )
      }
    }
  </Context.Consumer>
)
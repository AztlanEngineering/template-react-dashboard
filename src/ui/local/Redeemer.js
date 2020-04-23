import * as React from 'react'
import { useEffect, useContext } from 'react'

import { useParams, useHistory } from 'react-router-dom'

import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

import QUERY from './graphql/oAuth2Login.graphql'

import { ProfileContext } from '@fwrlines/ds'

//export default () => <h2>Wks</h2>

export default ({ props }) => {
  const { code } = useParams()

  const history = useHistory()

  const [doLogin, { data:{ oAuth2Login:loginInfo }={}, loading, error, called }] = useMutation(
    gql(QUERY),
    {
      variables:{
        code
      }
    }
  )
  
  useEffect(() => {
    if (!called && code) doLogin()
  },
  [called, code]
  )

  const {
    sessionCookie,
    setSessionCookie
  } = useContext(ProfileContext)

  useEffect(() => {
    if (loginInfo) {
      setSessionCookie(
        loginInfo.token,
        {
          //path  :'/', //make it accessible on all pages //Deprecated, now set up at the provider level
          //expires:
          maxAge:loginInfo.maxAge,
          //domain: //defaults on current domain
          secure:!(process.env.LOCAL === 'true')
          //sameSite:'strict'

        }

      )
      history.push('/')
    }
  },
  [loginInfo]
  )
  


  return (
    <>
      <h1>
      We are redeeming a code to login
      </h1>
      <pre>{ code }</pre>
    </>

  )
}

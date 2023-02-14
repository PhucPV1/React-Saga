import React from 'react'
import {redirect,RouteProps,Route} from 'react-router-dom'


export default function PrivateRoute( props:RouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem('access_token')) 
  
  if (!isLoggedIn) console.log('aaa')
  return <Route {...props}/>
}
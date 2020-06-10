import React from "react"
import { Redirect, Switch, Route } from "react-router-dom"

const RouteIndex = (props) => {
  let component = props.routers.filter(val => val.component)
  let redirect = props.routers.filter(val => val.redirect)
  return (
    <Switch>
      {
        component.map((item, index) => {
          return (
            <Route key={index} path={item.path} render={props => {
              return <item.component {...props} />
            }} />
          )
        })
      }
      {
        redirect.map((item, index) => {
          return <Redirect key={index} to={item.redirect} />
        })
      }
    </Switch>
  )
}

export default RouteIndex;
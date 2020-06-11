import React from 'react';


import { BrowserRouter } from "react-router-dom"
import RouteIndex from "./route/index"
import config from "./route/config"
import { NavLink } from "react-router-dom"


class App extends React.Component {
  render() {
    let component = config.filter(val => val.component)
    return (
      <div>
        <BrowserRouter>
          {
            component.map((item, index) => {
              return <NavLink key={index} to={item.path}>{item.name}</NavLink>
            })
          }
          <RouteIndex routers={config} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
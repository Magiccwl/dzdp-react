import React from 'react'
import { Router, Route, IndexRoute} from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import Login from '../containers/Login'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'


class RouteMap extends React.Component {
  render(){
    return (
      <Router history = {this.props.history}>
        <Route path="/" component = {App}>
          <IndexRoute component = {Home}/>
          <Route path="/city" component={City}/>
          <Route path="/user" component={User}/>
          <Route path="/Login(/:router)" component={Login}/>
          <Route path="/search/:type(/:keyword)" component={Search}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/*" component={NotFound}/>
        </Route>
      </Router>
    )
  }
}
export default RouteMap

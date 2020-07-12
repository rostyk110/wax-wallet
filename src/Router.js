import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/auth/Login";
import Paperbase from "./components/Paperbase";
import React from "react";
import {connect} from "react-redux";

function MyRouter({isAuth}) {

  const myroutes = (
    !isAuth
    ? <Route path="/login">
        <Login />
      </Route>
    : <Route path="/home">
        <Paperbase />
      </Route>
  )

  return (
    <Router>
      <Switch>
        {myroutes}

        <Route
          path="/"
          render={() => {
            return (
              isAuth
                ? <Redirect to="/home"/>
                : <Redirect to="/login"/>
            )
          }}
        />
      </Switch>
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    isAuth: state.isAuth
  }
}


export default connect(mapStateToProps, null)(MyRouter);


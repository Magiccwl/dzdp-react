import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import LoginComponent from '../../components/Login'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
          checking: true
        }
    }
    render() {
        return (
            <div>
                <Header title="登录"/>
                {
                  this.state.checking
                  ?<div>{/*Loading*/}</div>
                  :<LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }
    componentDidMount(){
      this.doCheck()
    }
    doCheck(){
      const userinfo = this.props.userinfo
      if(userinfo.username){
        //already logined , forward to user page
        this.goUserPage()
      }else{
        //has not logined , check and ready to login
        this.setState({
          checking: false
        })
      }
    }

    goUserPage(){
      hashHistory.push('/User')
    }

    //deal data after logining
    loginHandle(username){
      //save username
      const actions = this.props.userInfoActions
      let userinfo = this.props.userinfo
      userinfo.username = username
      actions.update(userinfo)

      const params = this.props.params
      const router = params.router
      if(router) {
        hashHistory.push(router)
      }else{
        this.goUserPage()
      }
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

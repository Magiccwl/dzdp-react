import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

import { getSearchData } from '../../../fetch/search/search'

//init component's state
const initialState = {
  data:[],
  hasMore: true,
  isLoadingMore: false,
  page:0
}

class SearchList extends React.Component {
  constructor(props,context){
    super(props,context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = initialState
  }
  render() {
    return(
      <div>
        {
          this.state.data.length
          ?<ListComponent data={this.state.data}/>
          :<div>{ /*Loading*/}</div>
        }
        {
          this.state.hasMore
          ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} />
          : ''
        }
      </div>
    )
  }
  componentDidMount(){
    //get data of first page
    this.loadFirstPageData()
  }
  loadFirstPageData() {
    const cityName = this.props.userinfo.cityName
    const keyword = this.props.keyword || ''
    const category = this.props.category
    const result = getSearchData(0, cityName, category, keyword)
    this.resultHandle(result)
  }
  resultHandle(result){
    const page = this.state.page
    this.setState({
      page: page+1
    })

    result.then(res => {
      return res.json()
    }).then(json => {
      const hasMore = json.hasMore
      console.log(hasMore);
      const data = json.data
      this.setState({
        hashMore: hasMore,
        data:this.state.data.concat(data)
      })
    }).catch(ex => {
      if(__DEV__){
        console.error('searchList get error', ex.message)
      }
    })
  }

  //load more data
  loadMoreData(){
    //record state
    this.setState({
      isLoadingMore: true
    })

    const cityName = this.props.userinfo.cityName
    const keyword = this.props.keyword || ''
    const category = this.props.category
    const result = getSearchData(0, cityName, category, keyword)
    this.resultHandle(result)

    //update state
    this.setState({
      isLoadingMore: false
    })
  }

  //deal research
  componentDidUpdate(prevProps, preState){
    const keyword = this.props.keyword
    const category = this.props.category

    //if search the same condition , ingnore it
    if(keyword === prevProps.keyword && category === prevProps.category){
      return
    }

    //reset state
    this.setState(initialState)

    //reset loading first page data
    this.loadFirstPageData()
  }

}

// react redux 绑定
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList)

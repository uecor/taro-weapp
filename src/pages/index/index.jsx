import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import { AtButton, AtList, AtListItem } from 'taro-ui'

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    categories: []
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  async componentWillMount() {
    const response = await Taro.request({
      // `In JavaScript '\n' is a line-feed.`
      // url: 'http://laravelshopapi.test/api/categories'
      url: `${API_WS}/categories`       //不能有空格 
    })
    console.log(response)
    this.setState({
      categories: response.data.data
    })
  }

  render() {
    const { categories } = this.state
    return (
      <View className='index'>
        <AtList>
          {
            categories.map(categorie =>
              <AtListItem
                key={categorie.id}
                arrow='right'
                title={categorie.name}

              />

            )

          }
        </AtList>
      </View>
    )
  }
}

export default Index

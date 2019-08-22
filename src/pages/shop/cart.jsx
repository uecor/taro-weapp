import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class ShopCart extends Component {
    config = {
        navigationBarTitleText: '购物车'
    }

    render() {
        return (
            <View className='page-demo'>
                ShopCart
            </View>
        )
    }
}
export default ShopCart
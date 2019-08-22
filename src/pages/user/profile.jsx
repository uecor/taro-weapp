import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class UserProfile extends Component {
    config = {
        navigationBarTitleText: '我的'
    }

    render() {
        return (
            <View className='page-demo'>
                UserProfile
            </View>
        )
    }
}
export default UserProfile
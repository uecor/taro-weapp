import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtBadge } from 'taro-ui'

class ProductListItem extends Component {
    static options = {
        addGlobalClass: true
    }

    render() {
        const { data: product } = this.props

        return (
            <View className='cart mb-2'>
                <Image
                  className='card-img-top'
                  src={product.image}
                  mode='aspectFit'
                />
                <View className='card-body text-center'>
                    <View className='card-title mb-2'>
                        <View className='cart-title-text'>
                            {product.on_sale &&
                                <AtBadge className='card-title-badge' value='sale' />
                            }
                            {product.title}
                        </View>
                    </View>
                    <View className='card-subtitle'>
                        <Text className='mr-2 text-muted text-through'>￥ 69</Text>
                        <Text>{'￥' + product.price}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
export default ProductListItem
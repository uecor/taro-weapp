import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import SearchBar from "../../components/search-bar"
import ProductList from '../../components/product-list'
import Placeholder from '../../components/placeholder';


class ShopIndex extends Component {
    config = {
        navigationBarTitleText: '商店'
    }
    state = {
        products: [],
        placeholder: true,
    }
    async componentWillMount() {
        const response = await Taro.request({
            url: `${API_WS}/products`
        })
        if (process.env.NODE_ENV === 'development') {
            setTimeout(() => {
                this.setState({
                    products: response.data.data,
                    placeholder: false,
                })
            }, 2000)
        } else {
            this.setState({
                products: response.data.data,
                placeholder: false,
            })
        }

    }
    render() {
        const { products, placeholder } = this.state
        return (
            <View>
                <SearchBar />
                <Placeholder className='m-3' quantity='10' show={placeholder} />
                <ProductList data={products} />

            </View>
        )
    }
}
export default ShopIndex
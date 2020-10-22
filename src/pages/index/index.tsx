import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { labelGroups, skus} from '../../api/itemSkus'
import  Skus from './component/skus'
import './index.less'
import DecideBtn from '../component/decidebtn'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectSku:["","",""],
    };
  }

  handleSelect = (sku) => {
    this.setState({
      selectSku: sku,
    })
  }

  render () {
    return (
      <View className='index'>
        <View className="order">
          <View className="headerMsg">
            <Image className="headerImg" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <View className="headerTitle">
              <p>高涂课程小初高名师特训</p>
              <p className="headerPrice">￥9.00</p>
              <p className="headerContent">升小二，数学+语文，曾平标题表示</p>
            </View>
          </View>
          <View>
            <Skus
              skus={skus}
              labelGroups={labelGroups}
              value={this.state.selectSku}
              onClick={this.handleSelect}/>
          </View>
          <View className="payWay">
            <View className='at-row'>
              <View className='at-col'>
                <View className="zhifubao">
                    <Image className="payImage" src={require('./assert/icon/icon_zhifubao @2x.png').default} />
                    <Text className="payTitle">支付宝</Text>
                  <View className="clickIcon" >
                    <Image className="choseImg" src={require('./assert/icon/ellipse@2x.png').default} />
                    {/* <Image src={require('./assert/icon/编组12@2x.png').default}  /> */}
                  </View>
                </View>
              </View>
              <View className='at-col'>
                <View className="weixin">
                  <Image className="payImage" src={require('./assert/icon/icon_weixin @2x.png').default} />
                  <Text className="payTitle">微信</Text>
                  <View className="clickIcon">
                    <Image className="choseImg" src={require('./assert/icon/ellipse@2x.png').default} />
                    {/* <Image src={require('./assert/icon/编组12@2x.png').default}  /> */}
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View className="footerWrapper">
            <View className="payCount">
              <Text className="payAct">实付款</Text>
              <Text className="money">￥9.00</Text>
            </View>
            <DecideBtn />
          </View>
        </View>
      </View>
    )
  }
}

const mapDispatch = (dispatch) => ({
  getCategoryItem() {
    dispatch(actionCreators.getList())
  },
  getSubjectItem() {
    dispatch(actionCreators.getSubject())
  }
})

export default connect(null, mapDispatch)(Index)

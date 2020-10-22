import React, { Component } from 'react'
import { View, Text, Image, Button } from '@tarojs/components'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { skus,c,k,s } from '../../api/detailData'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'
import DecideBtn from '../component/decidebtn'
// import ChoseItem from './component/choseItem'
import Skus from './component/skus'

// @connect(({ choseItem }) => ({
//   choseItem
// }), (dispatch)=> ({
//   getCategoryItem() {
//     dispatch(actionCreators.getList())
//   }
// }))

class Index extends Component {
  // componentDidMount() {
  //   this.props.getCategoryItem(),
  //   this.props.getSubjectItem()
  // }

  constructor(props) {
    super(props);
    this.state = {
      selectSku:['','',''],
      show: false
    };
  }
  handleSelect = (sku,show) => {
    this.setState({
      selectSku: sku,
      show: !show
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
          {/* <View className="gradeWrapper">
            <View className="grade">
              <Text className="gradeTitle">年级</Text> */}
                <Skus
                  skus={ skus }
                  labelGroups={[c,k,s]}
                  value={this.state.selectSku}
                  show={this.state.show}
                  onClick={this.handleSelect}
                  groupTitile={['年级','科目','赠送']}/>
            {/* </View> */}

            {/* <View className="subject">
              <Text className="subjectTitle">科目</Text>
              <View>
              <ChoseItem list={ subject } />
              </View>
            </View>
            <View className="giving">
              <Text className="givingTitle">赠送</Text>
              <View>
                <Skus />
              </View>
             </View> */}
          {/* </View> */}
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


import React, { Component } from 'react'
import {View , Image,Text } from '@tarojs/components'
import DecideBtn  from '../component/decidebtn'
import './detail.less'
import '../../common/base.less'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btntitle: '立即报名'
    }
  }

  render () {
    return (
      <View className="detail">
        <Image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602937101635&di=f61273679bb9a3f1fbfbb670431d8fe6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F21%2F20151121204243_rLJzf.png"></Image>
        <View className="footerWrapper">
            <View className="payCount">
              <Text className="money">￥9.00</Text>
            </View>
            <View className="submitbtn">
              <DecideBtn btntitle={this.state.btntitle}/>
            </View>
          </View>
      </View>
    )
  }

}

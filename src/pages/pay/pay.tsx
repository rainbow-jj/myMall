import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'


import "taro-ui/dist/style/components/button.scss"
import './pay.less'

export default class PayResult extends Component  {
  render () {
    return (
      <View className="payResultWrapper">
        <View className="payContent">
          <View className="imageBox">
            <Image className="image" src={require('./assert/icon_zhifuchenggong 2@3x.png').default}></Image>
          </View>
          <Text className="paySuccess blockCenter">支付成功</Text>
          <Text className="payPrice blockCenter">￥9.00</Text>
          <View className="rowBetween rowFrist">
            <Text>服务名称</Text>
            <Text>高涂课堂小初高中名师特训班</Text>
          </View>
          <View className="rowBetween">
            <Text>支付方式</Text>
            <Text>支付宝</Text>
          </View>
        </View>
      </View>
    )
  }

}

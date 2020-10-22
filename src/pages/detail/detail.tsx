
import React, { Component } from 'react'
import {View , Image } from '@tarojs/components'
import PayFooter from '../index/footer'
import "taro-ui/dist/style/components/button.scss"
import './detail.less'
import '../../common/base.less'

export default class Detail extends Component {

  render () {
    return (
      <View className="detail">
        <Image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602937101635&di=f61273679bb9a3f1fbfbb670431d8fe6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F21%2F20151121204243_rLJzf.png"></Image>
        <PayFooter />
      </View>
    )
  }

}

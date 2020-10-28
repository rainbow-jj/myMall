import React, { Component } from "react";
import './footer.less'
import '../../common/base.less'
import { View,Text } from "@tarojs/components";
import DecideBtn from '../component/decidebtn'

class PayFooter extends Component {


  render() {
    return (
      <View className="footerWrapper">
        <View className="payCount">
          <Text className="payAct">实付款</Text>
          <Text className="money">￥9.00</Text>
        </View>
        <View className="submitbtn">
          <DecideBtn />
        </View>
      </View>
    )
  }
}

export default PayFooter

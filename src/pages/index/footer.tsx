import React, { Component } from "react";
import './footer.less'
import '../../common/base.less'
import { View,Text,Button } from "@tarojs/components";

class PayFooter extends Component {


  render() {
    return (
      <View className="footerWrapper">
        <View className="payCount">
          <Text className="payAct">实付款</Text>
          <Text className="money">￥9.00</Text>
        </View>
        <Button  className="submitbtn">
          <Text className="btnText">提交订单</Text>
        </Button>
      </View>
    )
  }
}

export default PayFooter

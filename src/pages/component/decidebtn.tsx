import React, { Component } from "react";
import '../../common/base.less'
import { View,Text,Button } from "@tarojs/components";

class DecideBtn extends Component {


  render() {
    return (
      <View className="decideBtn">
        <Button  className="subbtn">
          <Text className="btnText">提交订单</Text>
        </Button>
      </View>
    )
  }
}

export default DecideBtn

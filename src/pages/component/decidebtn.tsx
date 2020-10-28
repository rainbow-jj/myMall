import React, { Component } from "react";
import '../../common/base.less'
import { View,Text,Button } from "@tarojs/components";
import { AtButton } from 'taro-ui'
import styles from './decidebtn.module.less'

const  DecideBtn = ({btntitle}) => {
  console.log('btn',btntitle)

  return (
    <View className={styles.decideBtn}>
      <AtButton  className={styles.subbtn}>
        { btntitle }
      </AtButton>
    </View>
  )
}


export default DecideBtn

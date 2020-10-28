import React, { Component }from 'react'
import { View ,Text} from '@tarojs/components';
import { AtInput }  from 'taro-ui'
import styles from './index.module.less'
import RegionPicker from './region'
import regions from '../consignee/region/region'

class Consignee extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      phoneNumber:''
    }
    this.onGetRegion = this.onGetRegion.bind(this)
  }
  handleChange (value,phoneNumber) {
    this.setState({
      value,
      phoneNumber
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  onGetRegion(regions){
   console.log('aa')
  }
  render () {
    return (
      <View className={styles.consigneewrapper}>
        <AtInput
          className={styles.inputContext}
          name='value'
          title='收货人'
          type='text'
          placeholder='请输入收货人姓名'
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <AtInput
          className={styles.inputContext}
          name='value6'
          border={false}
          title='手机号码'
          type='phone'
          placeholder='手机号码'
          value={this.state.phoneNumber}
          onChange={this.handleChange.bind(this)}
        />
        <View className={styles.region}>
          <Text className={styles.regionContext}>请选择您的省/市/区</Text>
          <RegionPicker onGetRegion={this.onGetRegion}/>
        </View>
      </View>
    )
  }
}

export default Consignee

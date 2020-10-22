import React, { Component } from "react"
import '../../../common/base.less'
import './choseItem.less'
import { Button, View } from "@tarojs/components"
// import { connect } from 'react-redux'


class ChoseItem extends Component {
  render () {
    const { list  } = this.props
    return (
      <View className="itemWrapper">
        {
          list.map((item) => (
          <Button className="item" key={item.id}>
            {item.title}</Button>
          ))}
      </View>
    )
    }
  }
// }

export default ChoseItem

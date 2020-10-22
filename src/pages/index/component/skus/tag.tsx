import { View } from '@tarojs/components';
import React from 'react';
import './skus.less'
import classnames from 'classnames';

const Tag = ( {className, checked,onClick, tItem ,disabled}) => {
  // 处理点击事件
  console.log(checked)
  const handleClick = () => {
    // 如果是不可选，点击则返回
    if (disabled) return;
    // 点击 设置 checked 选中为空
    onClick(!checked);
  }

  return (
    <View
      className={classnames(className, { 'tag-disabled': disabled, 'tag-active': checked })}
      onClick={handleClick}>{tItem}
    </View>
  )
}

export default Tag;

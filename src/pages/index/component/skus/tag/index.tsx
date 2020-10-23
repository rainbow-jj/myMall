import { View } from '@tarojs/components';
import React, {useState} from 'react';
import styles from './index.module.less';
import classnames from 'classnames';

const Tag = ({ className, checked, title, disabled, onClick }) => {
  // 处理点 击事件
  // console.log(checked)
  const handleClick = () => {
    // console.log(disabled,title)
    // 如果是不可选，点击则返回
    if (disabled) return;

    onClick(!checked);

  }



  return (
    <View
      className={classnames(styles.tag, className, { [styles.tagDisabled]: disabled, [styles.tagActive]: checked })}
      onClick={handleClick}
      checked={checked}>
     {title}
    </View>
  )
}

export default Tag;

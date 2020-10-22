import { View } from '@tarojs/components';
import React from 'react';
import classnames from 'classnames';

const Tag = ({ className, checked, onClick, children, disabled }) => {
  const handleClick = () => {
    console.log('tag')
    if (disabled) return;
    onClick(!checked);
  }
  return <View className={classnames(className, { 'tag-disabled': disabled, 'tag-active': checked })} onClick={handleClick}>{children}</View>
}

export default Tag;

import { View } from '@tarojs/components';
import React, {useState} from 'react';
import styles from './index.module.less';
import classnames from 'classnames';

const Tag = ({ className, checked, title, disabled, onClick }) => {

  const handleClick = () => {
    if (disabled) return;
    onClick(!checked);

  }

  return (
    <View>
      <View
        className={classnames(styles.tag, className, { [styles.tagDisabled]: disabled, [styles.tagActive]: checked })}
        onClick={handleClick}
        checked={checked}
       >
      {title}
      </View>
    </View>
  )
}

export default Tag;

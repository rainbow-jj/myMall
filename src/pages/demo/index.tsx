import { Text, View } from '@tarojs/components';
import React, { useState } from 'react';
import Tag from '../index/component/skus/tag';
import styles from './index.module.less';

// 单个规格选择
const SingleSpec = ({ title = '科目', labels = [], value = '' }) => {
  return (
    <View>
      <Text>{title}</Text>
      {labels.map((label, index) => (
        <Tag key={index} checked={label === value} title={label}  />
      ))}
    </View>
  )
}

const DemoPage = ({}) => {
  const [value, setValue] = useState('语文');
  const title = '科目'
  const labels = ['语文', '数学', '英语'];
  // const [checked, setChecked] = useState(false);
  const handleClick = label => {
    const nextValue = label !== value ? label : '';
    setValue(nextValue)
    // console.log(nextValue,label)
  }

  return (
    <View>
      <Text>{title}</Text>
      {labels.map((label, index) => (
        <Tag key={index} className={styles.tag} checked={label === value} title={label} onClick={() => handleClick(label)} />
      ))}
      {/* <SingleSpec title={title} labels={labels} value={value} /> */}
      {/* <Text>{title}</Text>
      {labels.map((label, index) => (
        <Tag key={index} checked={label === value} title={label} />
      ))} */}
    </View>
  )
};

export default DemoPage;

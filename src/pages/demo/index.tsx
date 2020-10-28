import { Text, View } from '@tarojs/components';
import React, { useState } from 'react';
import Tag from '../index/component/skus/tag';
import RegionPicker from '../index/component/consignee/region'
import styles from './index.module.less';
import regions from '../index/component/consignee/region/region';

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
  // const [onGetRegion, setGetRegion] = useState(()=>{return this});
  const title = '科目'
  const labels = ['语文', '数学', '英语'];
  // const [checked, setChecked] = useState(false);
  const handleClick = label => {
    const nextValue = label !== value ? label : '';
    setValue(nextValue)
    // console.log(nextValue,label)
  }
  const onGetRegion = regions => {
    console.log(regions)
  }
  return (
    <View>
      <Text>{title}</Text>
      {labels.map((label, index) => (
        <Tag key={index} className={styles.tag} checked={label === value} title={label} onClick={() => handleClick(label)} />
      ))}
      <RegionPicker onGetRegion={onGetRegion}/>
      <View>

      </View>
    </View>

  )
};

export default DemoPage;

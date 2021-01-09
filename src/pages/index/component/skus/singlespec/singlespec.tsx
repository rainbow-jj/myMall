import React, { useMemo, useState } from 'react';
import '../skus.less'
import Tag from '../tag';
import {View, Text} from '@tarojs/components';
import styles from './singlespec.module.less';


function includes(arr1, arr2) {
  return arr2.every(val => arr1.includes(val))

}

const SingleSpec = ({value, title, labels = [],onClick,index,skus}) => {
  // 变化：拿到点击的值
  const handleChange = (nextChecked, label) => {
    onClick(nextChecked,label)

  }

  // 判断选中的值是不是等于子组件的 title
  const  handleChecked = (item) => {
    if (item === value[index] ) return true
  }

  const finalValue = useMemo(() => value.filter(item => item),[value])

  // 不展示标签（没有的库存）
  const labelsDisabled = useMemo(() => {
    return labels.map(label => {
      // 进行数组循环返回一个新数组，在里面的labels 里面的 到list 中
      const list = skus.filter(sku => includes(sku, finalValue));
      return Boolean(list.filter(item => item.includes(label)).length)
    })
  },[value,skus,labels, index])

  return (
    <View>
      <View>
        <Text>{title}</Text>
      </View>
      <View className={styles.grade}>
        { labels.map((item, labelIndex) => (
          <View>
            <Tag
              className={styles.tag}
              key={labelIndex}
              title={item}
              checked={handleChecked(item)}
              onClick= {e => handleChange(e,item)}
              disabled={!labelsDisabled[labelIndex]}
            />
            </View>
        ))}
      </View>
    </View>
  );
};

export default SingleSpec;


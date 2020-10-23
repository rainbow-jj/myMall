import React, { useMemo, useState } from 'react';
import '../skus.less'
import Tag from '../tag';
import {View, Text} from '@tarojs/components';
import styles from './singlespec.module.less';

// 封装一个判断一个数组是否在另外一个数组里includes函数
function includes(arr1, arr2) {
  return arr2.every(val => arr1.includes(val))
  // return 结果为 布尔值（true or false）
}

// 单个规格选择
const SingleSpec = ({value, labels = [],onClick, index,skus}) => {
  // 设置 checked 初始值
  const [ checked, setChecked] = useState(false);
  // 变化：拿到点击的值
  const handleChange = (e, label) => {
    // 改变state 中的checked值
    const nextChecked = e === checked ? !e : e
    setChecked(nextChecked)
    // console.log(nextChecked)
    onClick(nextChecked,label)

  }

  // 定义一个最后点击的值,是一个数组，如 点击的是['升小二', '语文', '赠送标题'],其中哪个没点，就是空''
  const finalValue = useMemo(() => value.filter(item => item),[value])

  // 定义一个labels里面哪些是要隐藏的
  // 逻辑：外部传进来的 labels 列表里去map 得出一个 skus 并且
  const labelsDisabled = useMemo(() => {
    return labels.map(label => {
      // 进行数组循环返回一个新数组，在里面的labels 里面的 到list 中
      const list = skus.filter(sku => includes(sku, finalValue));
      return Boolean(list.filter(item => item.includes(label)).length)
    })
  },[value,skus,labels, index])


  return (
    <View  className={styles.grade}>
      {/* <Text className="gradeTitle">{}</Text> */}
      { labels.map((item, labelIndex) => (
          <Tag
            className={styles.tag}
            key={labelIndex}
            title={item}
            checked={checked}
            onClick= {e => handleChange(e,item)}
            disabled={!labelsDisabled[labelIndex]}
          />
      ))}
    </View>
  );
};

export default SingleSpec;


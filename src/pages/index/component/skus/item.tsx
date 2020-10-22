import React, { useMemo } from "react";
import '../../../../common/base.less';
import './skus.less'
import {Button, View,Text} from '@tarojs/components';
import Tag from "./tag";

// 函数 检测一个数组是否在另一个数组中 如果是返回为true,
function includes(arr1, arr2) {
  return arr2.every(val => arr1.includes(val));
  // return 结果为 true
}
// props
const SkusItem = ({ labels = [], onClick, value, index, skus, groupTitile}) => {
  // labels : ['升小二','升小三','升小四','升小五','升小六','升初一','升初二','升初三','升高一','升高二','升高三']
  // onClick : onClick(checked, label)
  // value: ["", "", ""]
  // skus:

  const handleSelect = (label) => {
    // console.log('handleSelect, ', show)
    // onClick(show, label)
    // label 点击的名字
    // e.target.checked ：
    // console.log('res',show,label)

  }
  const finalValue = useMemo(() => value.filter(item => item), [value]);
  // console.log('re',finalValue)
  const labelsDisabled = useMemo(() => {
    return labels.map(label => {
      const list = skus.filter(sku => includes(sku, finalValue));
      // console.log(list);
      // console.log('bool',Boolean(list.filter(item => item.includes(label)).length))
      return Boolean(list.filter(item => item.includes(label)).length);

    });
    // labels
    // console.log('value: ', finalValue, skus, labels);
  }, [skus, value, labels, index]);

  return (
    <View className="grade">
      <View key="i">
        <Text className="gradeTitle">{groupTitile}</Text>
      </View>
      <View className="btnBlock" >
        {labels.map((item, labelIndex) => (
          <View className="btnBox" key={item} >
            <Button
              className="sitem"
              onClick={e => handleSelect(item)}
              disabled={!labelsDisabled[labelIndex]}
            >
              {item}
            </Button>
          </View>
        ))}
      </View>
    </View>
  )
}

export default SkusItem;

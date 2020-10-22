import React,{useState}  from 'react';
import { View } from '@tarojs/components';
import './skus.less'
import produce from 'immer'
import SingleSku from './singlesku';


const Skus = ({ labelGroups = [], value, onClick, skus}) => {

  const handleSkusItem = (checked, label, index) => {
    onClick(
      produce(value, draft => {
        // value: ["", "", ""]
      draft[index] = checked ? label : '';
    })
    );
  }
  return (
    <View className="gradeWrapper">
      {
        labelGroups.map((item, index) => (
          <SingleSku
          key={index}
          skus={skus}
          labels={item}
          value={value}
          index={index}
          onClick={(checked, label) => handleSkusItem(checked, label, index)}
          />
        ))}
    </View>
  )
}

export default Skus;


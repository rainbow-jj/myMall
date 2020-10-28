import React,{useState}  from 'react';
import { View,Text } from '@tarojs/components';
import './skus.less'
import produce from 'immer'
import SingleSpec from './singlespec/singlespec';


const Skus = ({ labelGroups = [], value, onClick, skus}) => {
  const handleSkusItem = (checked, label, index) => {
    // console.log(checked,label, index)/
    onClick(
      produce(value, draft => {
        // value: ["", "", ""]
      draft[index] = checked ? label : '';
    }),

    );

  }
  return (
    <View className="gradeWrapper">
      {
        labelGroups.map((item, index) => (
          <SingleSpec
          key={index}
          skus={skus}
          title={item.key}
          labels={item.values}
          value={value}
          index={index}
          onClick={(checked, label) => handleSkusItem(checked, label, index)}
          />
        ))}
    </View>
  )
}

export default Skus;


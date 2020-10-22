import React  from 'react';
import SkusItem from './item';
import {View} from '@tarojs/components';
import './skus.less'
import produce from 'immer'


const Skus = ({ labelGroups = [], value, onClick, skus, show, groupTitile}) => {
  const handleSkusItem = (show, label:any, index: any) => {
    onClick(
      produce(value, draft => {
        // value: ["", "", ""]
      draft[index] = show ? label : '';
    })
    );
  }
  return (
    <View className="gradeWrapper">
      {
        labelGroups.map((item, index) => (
          <SkusItem  //SingeSpec
          key={index}
          // skus={skus}
          labels={item}
          value={value}
          index={index}
          groupTitile={groupTitile}
          onClick={(show, label) => handleSkusItem(show, label, index)}
          />
        ))}
    </View>
  )
}

export default Skus;


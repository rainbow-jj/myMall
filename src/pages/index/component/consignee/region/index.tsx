import React, {  useEffect, useState } from 'react'
import { Picker, View ,Text} from '@tarojs/components'
import regions from './region'
import classnames from 'classnames'
import styles from './index.module.less';

//  // H5、微信小程序、百度小程序、字节跳动小程序
const RegionPicker = ({onColumnChange,onchange,onGetRegion}) => {
  const [region, setRegion] = useState('选择您的省/市/区')
  const [range, setRange] = useState([])
  const [value, setValue] = useState([0,0,0])
  // console.log(region,range, value)

  useEffect(() => {
    let nextrange = range
    let temp = [];
    for (let i = 0; i < regions.length; i++) {
      temp.push(regions[i].name)
    }
    nextrange.push(temp)

    temp = [];
    for (let i = 0; i < regions[0].city.length; i++) {
      temp.push(regions[0].city[i].name);
    }
    nextrange.push(temp);

    temp=[];
    for (let i = 0; i < regions[0].city[0].districtAndCounty.length; i++) {
      temp.push(regions[0].city[0].districtAndCounty[i]);
    }
    nextrange.push(temp)

    setRange(nextrange)
    console.log('rrrr',nextrange)

  },[]);

  onchange = (e) => {
    let regionTemp = region
    let rangeTemp = range;
    let valueTemp = value;

    valueTemp = e.detail.value;
    // console.log(e.detail.value)
    regionTemp = rangeTemp[0][valueTemp[0]]+ '-' + rangeTemp[1][valueTemp[1]] + '-' + rangeTemp[2][valueTemp[2]]
    // console.log(regionTemp)

    // 用hook  实现 useState 第二个参数 回调函数

      setRegion(regionTemp);
      setRange(rangeTemp);
      setValue(valueTemp)
      onGetRegion(regions)
      // console.log('regions',regions, 'regionTemp',regionTemp)


  };

  onColumnChange = (e) => {
    let rangeTemp = range
    let valueTemp = value

    let column = e.detail.column;
    let row = e.detail.value;
    // console.log('column',column, 'row',row)a
    valueTemp[column] = row

    // 注意没有下面这步就会2，3列数据就不会联动渲染出来
    switch(column) {
      case 0:
        let cityTemp = [];
        let districtAndCountyTemp = [];
        for (let i = 0; i < regions[row].city.length; i++ ) {
          cityTemp.push(regions[row].city[i].name);
        }
        for (let i = 0; i < regions[row].city[0].districtAndCounty.length; i++) {
          districtAndCountyTemp.push(regions[row].city[0].districtAndCounty[i]);
        }

        valueTemp[1] = 0;
        valueTemp[2] = 0;
        rangeTemp[1] = cityTemp;
        rangeTemp[2] = districtAndCountyTemp;
        break;
      case 1:
        let districtAndCountyTemp2 = [];
        for (let i = 0; i < regions[valueTemp[0]].city[row].districtAndCounty.length; i++) {
            districtAndCountyTemp2.push(regions[valueTemp[0]].city[row].districtAndCounty[i]);
        }
        valueTemp[2] = 0;
        rangeTemp[2] = districtAndCountyTemp2;
        break;
      case 2:
        break;
    }
    setRange(rangeTemp)
    setValue(valueTemp)
  }

  return (
    <View>
      <View className={classnames(styles.regionPicker, {
          [styles.regionPickerGray]: region === '选择您的省/市/区',
          [styles.regionPickerBlack]: region !== '选择您的省/市/区',
        })}>
        <Picker
          mode="multiSelector"
          onChange={onchange}
          onColumnChange= {onColumnChange}
          range={range}
          value={value}>
          <Text>{region}</Text>
        </Picker>
      </View>
    </View>
  )
}

export default RegionPicker


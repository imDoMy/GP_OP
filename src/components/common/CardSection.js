import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => {
  return (
  <View style={styles.containerStyle}>
  {props.children}
  </View>
  );
};


const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    // marginTop: 2,
    // backgroundColor: '#E0F8F8',

    backgroundColor: '#E0F8F8',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    postion: 'relative'
  }
};
export { CardSection };

import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  LayoutAnimation,
  UIManager,
  Image,
  TextInput,
  ScrollView,
  ListView
} from "react-native";
import _ from 'lodash';
import { connect } from "react-redux";
import { CardSection, Card, Button } from "./common";
import * as actions from "../actions";
import ReviewsComponent from './ReviewsComponent';

class Reviews extends Component {


  componentWillMount() {
    console.log(this.props.record);
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      console.log(this.props.Reviewss);

  this.dataSource = ds.cloneWithRows(this.props.Reviewss);
    }

  renderRow(Reviewss) {
      return (
        <View>
      <ReviewsComponent Reviewss={Reviewss} />
      </View>

    );
  }
    render() {
              return (

                <ListView
                  enableEmptySections
                  dataSource={this.dataSource}
                  renderRow={this.renderRow}
                />
              );
        }
}


const MapStateTpProps = (state, ownProps) => {
  console.log(ownProps.business.Reviews);
  const Reviewss = _.map(ownProps.business.Reviews, (val, uid) => {
    return { ...val, uid };
});
  return { Reviewss };
};

export default connect(MapStateTpProps)(Reviews);

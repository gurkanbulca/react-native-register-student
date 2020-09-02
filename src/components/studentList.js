import _ from 'lodash';
import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';
import {studentsListData} from '../actions';
import ListItem from './ListItem';
import {Card} from '../common';

class StudentList extends Component {
  componentDidMount() {
    this.props.studentsListData();
  }
  renderItem(ogrenci) {
    return <ListItem ogrenci={ogrenci} />;
  }
  render() {
    // console.log(this.props.studentsArray);
    console.log('studentArray' + this.props.studentsArray.length);
    if (this.props.studentsArray.length > 0) {
      return (
        <View>
          <Card>
            <FlatList
              data={this.props.studentsArray}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </Card>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={{margin:10,textAlign:'center'}}>
            Henüz bir öğrenci eklenmedi. Öğrenci eklemek için Yeni butonuna
            basın.
          </Text>
        </View>
      );
    }
  }
}

const mapStateToProps = ({studentDataResponse}) => {
  const studentsArray = _.map(studentDataResponse, (val, uid) => {
    return {...val, uid};
  });
  return {studentsArray};
};

export default connect(mapStateToProps, {studentsListData})(StudentList);

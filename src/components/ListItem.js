import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {CardSection} from '../common/';
import {Actions} from 'react-native-router-flux';

class ListItem extends Component {
  ogrenciClick() {
    Actions.updateStudent({student: this.props.ogrenci.item});
  }
  render() {
    const {isim, soyisim} = this.props.ogrenci.item;
    return (
      <TouchableWithoutFeedback onPress={this.ogrenciClick.bind(this)}>
        <View>
          <CardSection>
            <Text>
              {isim} {soyisim}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ListItem;

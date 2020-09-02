import React, {Component} from 'react';
import {TextInput, Picker, Text, Button,View} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Spinner} from '../common';
import {studentChange, studentCreate} from '../actions';

class StudentCreate extends Component {
  clickSave() {
    const {isim, soyisim, ogrencinumara, sube} = this.props;

    this.props.studentCreate({isim, soyisim, ogrencinumara, sube});
  }

  renderButton() {
    if (!this.props.isLoading) {
      return (
        <View style={{flex:1,justifyContent:'center'}}>
          <Button onPress={this.clickSave.bind(this)} title="Kaydet" />
        </View>
      );
    } else {
      return <Spinner size="small" />;
    }
  }

  render() {
    const {inputStyle} = styles;
    console.log(this.props.student);
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder="İsim"
            style={inputStyle}
            value={this.props.isim}
            onChangeText={(isim) =>
              this.props.studentChange({props: 'isim', value: isim})
            }
          />
        </CardSection>
        <CardSection>
          <TextInput
            placeholder="soyisim"
            style={inputStyle}
            value={this.props.soyisim}
            onChangeText={(soyisim) =>
              this.props.studentChange({props: 'soyisim', value: soyisim})
            }
          />
        </CardSection>
        <CardSection>
          <TextInput
            placeholder="Öğrenci Numarası"
            style={inputStyle}
            value={this.props.ogrencinumara}
            onChangeText={(ogrencinumara) =>
              this.props.studentChange({
                props: 'ogrencinumara',
                value: ogrencinumara,
              })
            }
          />
        </CardSection>
        <CardSection>
          <Text>Şube</Text>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.sube}
            onValueChange={(sube) =>
              this.props.studentChange({props: 'sube', value: sube})
            }>
            <Picker.Item label="A Şubesi" value="asube" />
            <Picker.Item label="B Şubesi" value="bsube" />
            <Picker.Item label="C Şubesi" value="csube" />
            <Picker.Item label="D Şubesi" value="dsube" />
          </Picker>
        </CardSection>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
  },
};

const mapToStateProps = ({studentListResponse}) => {
  const {isim, soyisim, ogrencinumara, sube, isLoading} = studentListResponse;
  return {isim, soyisim, ogrencinumara, sube, isLoading};
};

export default connect(mapToStateProps, {studentChange, studentCreate})(
  StudentCreate,
);

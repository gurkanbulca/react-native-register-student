import React, {Component} from 'react';
import {TextInput, Picker, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Spinner} from '../common';
import {studentChange, studentUpdate,studentDelete} from '../actions';

class StudentCreate extends Component {
  state = {isim: '', soyisim: '', ogrencinumara: '', sube: ''};
  componentDidMount() {
    const {isim, soyisim, ogrencinumara, sube} = this.props.student;
    this.setState({isim, soyisim, ogrencinumara, sube});
  }
  clickUpdate() {
    const {isim, soyisim, ogrencinumara, sube} = this.state;
    this.props.studentUpdate({
      isim,
      soyisim,
      ogrencinumara,
      sube,
      uid: this.props.student.uid,
    });
  }
  clickDelete() {
    this.props.studentDelete({uid:this.props.student.uid});
  }

  renderButton() {
    if (!this.props.isLoading) {
      return (
        <View style={styles.buttonContainerStyle}>
          <View style={styles.buttonStyle}>
            <Button onPress={this.clickUpdate.bind(this)} title="GÜNCELLE" />
          </View>
          <View style={styles.buttonStyle}>
            <Button onPress={this.clickDelete.bind(this)} title="SİL" />
          </View>
        </View>
      );
    } else {
      return <Spinner size="large" />;
    }
  }

  render() {
    const {inputStyle} = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder="İsim"
            style={inputStyle}
            value={this.state.isim}
            onChangeText={(isim) => this.setState({isim})}
          />
        </CardSection>
        <CardSection>
          <TextInput
            placeholder="soyisim"
            style={inputStyle}
            value={this.state.soyisim}
            onChangeText={(soyisim) => this.setState({soyisim})}
          />
        </CardSection>
        <CardSection>
          <TextInput
            placeholder="Öğrenci Numarası"
            style={inputStyle}
            value={this.state.ogrencinumara}
            onChangeText={(ogrencinumara) => this.setState({ogrencinumara})}
          />
        </CardSection>
        <CardSection>
          <Text>Şube</Text>
          <Picker
            style={{flex: 1}}
            selectedValue={this.state.sube}
            onValueChange={(sube) => this.setState({sube})}>
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
  buttonContainerStyle: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    paddingHorizontal: 5,
    flex: 0.5,
  },
};

const mapToStateProps = ({studentUpdateResponse}) => {
  const {isLoading} = studentUpdateResponse;
  console.log('isLoading:' + isLoading);
  return {isLoading};
};

export default connect(mapToStateProps, {studentChange, studentUpdate,studentDelete})(
  StudentCreate,
);

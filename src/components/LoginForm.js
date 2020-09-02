import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Card, CardSection, Spinner, Button} from '../common';

class LoginForm extends Component {
  clickLogin() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  renderButton() {
    if (!this.props.isLoading) {
      return (
        <Button onPress={this.clickLogin.bind(this)}>Giriş | Kaydol</Button>
      );
    } else {
      return <Spinner size="small" />;
    }
  }
  render() {
    const {inputStyle} = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder="E-mail"
            style={inputStyle}
            value={this.props.email}
            onChangeText={(email) => this.props.emailChanged(email)}
          />
        </CardSection>
        <CardSection>
          <TextInput
            secureTextEntry
            placeholder="Password"
            style={inputStyle}
            value={this.props.password}
            onChangeText={(password) => this.props.passwordChanged(password)}
          />
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

const mapStateToProps = ({authenticationResponse}) => {
  const {email, password, isLoading} = authenticationResponse;
  return {email, password, isLoading};
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);

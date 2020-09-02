import React from 'react';
import {Scene, Router, Stack, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StudentList from './components/studentList';
import StudentCreate from './components/studentCreate';
import StudentUpdate from './components/studentUpdate';

const RouterComponent = () => (
  <Router>
    <Stack key="root">
      <Scene key="kimlik" hideNavBar={true}>
        <Scene
          key="loginScreen"
          component={LoginForm}
          title="Giriş Ekranı"
          hideNavBar={false}
          initial
        />
      </Scene>
      <Scene key="main" hideNavBar={true}>
        <Scene
          onRight={() => Actions.createStudent()}
          rightTitle="Yeni"
          key="studentList"
          component={StudentList}
          title="Öğrenci Listesi"
          hideNavBar={false}
        />
        <Scene
          key="createStudent"
          component={StudentCreate}
          title="Yeni Öğrenci"
          hideNavBar={false}
        />
        <Scene
          key="updateStudent"
          component={StudentUpdate}
          title="Öğrenci Güncelle"
          hideNavBar={false}
        />
      </Scene>
    </Stack>
  </Router>
);

export default RouterComponent;

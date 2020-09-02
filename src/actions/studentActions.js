import firebase from 'firebase';
import {
  STUDENT_CHANGED,
  CREATE_REQUEST,
  CREATE_REQUEST_SUCCESS,
  STUDENT_LIST_DATA_SUCCESS,
  UPDATE_REQUEST,
  UPDATE_REQUEST_SUCCESS,
} from './types';
import {Actions} from 'react-native-router-flux';

export const studentChange = ({props, value}) => {
  return (dispatch) => {
    dispatch({
      type: STUDENT_CHANGED,
      payload: {props, value},
    });
  };
};

export const studentCreate = ({isim, soyisim, ogrencinumara, sube}) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    dispatch({type: CREATE_REQUEST});
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/ogrenciler`)
      .push({isim, soyisim, ogrencinumara, sube})
      .then(() => {
        dispatch({type: CREATE_REQUEST_SUCCESS});
        Actions.pop();
      });
  };
};

export const studentUpdate = ({isim, soyisim, ogrencinumara, sube, uid}) => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    dispatch({type: UPDATE_REQUEST});
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/ogrenciler/${uid}/`)
      .set({isim, soyisim, ogrencinumara, sube})
      .then(() => {
        dispatch({type: UPDATE_REQUEST_SUCCESS});
        Actions.pop();
      });
  };
};

export const studentDelete = ({uid}) => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    dispatch({type: UPDATE_REQUEST});
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/ogrenciler/${uid}/`)
      .remove()
      .then(() => {
        dispatch({type: UPDATE_REQUEST_SUCCESS});
        Actions.pop();
      });
  };
};

export const studentsListData = () => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/ogrenciler`)
      .on('value', (snapshot) => {
        dispatch({type: STUDENT_LIST_DATA_SUCCESS, payload: snapshot.val()});
      });
  };
};

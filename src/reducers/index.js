import {combineReducers} from 'redux';
import AuthenticationReducers from './authenticationReducers';
import StudentCreateReducers from './studentCreateReducers';
import StudentDataReducers from './studentDataReducers';
import StudentUpdateReducers from './studentUpdateReducers';

export default combineReducers({
  authenticationResponse: AuthenticationReducers,
  studentListResponse: StudentCreateReducers,
  studentDataResponse: StudentDataReducers,
  studentUpdateResponse: StudentUpdateReducers,
});

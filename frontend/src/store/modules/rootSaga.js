import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import student from './student/sagas';
import plan from './plan/sagas';
import enrolment from './enrolment/sagas';
import helporder from './helporder/sagas';

export default function* rootSaga() {
  return yield all([auth, student, plan, enrolment, helporder]);
}

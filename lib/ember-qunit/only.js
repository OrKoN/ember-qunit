import testWrapper from './test-wrapper';
import { only as qunitOnly } from 'qunit';

export default function only(testName, callback) {
  testWrapper(testName, callback, qunitOnly);
}

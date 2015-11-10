import testWrapper from './test-wrapper';
import { test as qunitTest } from '../qunit';

export default function test(testName, callback) {
  testWrapper(testName, callback, qunitTest);
}

/* eslint-disable */

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(value) {
    if (typeof value !== 'string') throw new TypeError('Name must be a string');
  }

  set code(value) {
    if (typeof value !== 'string') throw new TypeError('Code must be a string');
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}

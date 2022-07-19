import { makeObservable, observable, computed, action } from 'mobx';

class oneStore {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      isNegative: computed,
      increase: action,
      decrease: action
    });
  }

  get isNegative() {
    return this.count < 0 ? 'Yes' : 'No';
  }

  increase() {
    this.count += 1;
  }

  decrease() {
    this.count -= 1;
  }
}

export const mobxCounter = new oneStore();
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(key: string): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key) || '{}');
    }
    return null;
  }

  getAll(): any {
    let data = [{
    }]
    if (this.storage) {
      for (let i = 0; i < this.storage.length; i++) {
        let key = this.storage.key(i) || '';
        let value = this.storage.getItem(key);
        data[i] = { key, value }
      }
    }
    return data;
  }
}

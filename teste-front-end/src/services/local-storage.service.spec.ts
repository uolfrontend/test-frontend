import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
    let store: any = {};
    const mockSessionStorage = {
      getItem: (key: string): string => key in store ? store[key] : null,
      setItem: (key: string, value: string) => store[key] = `${value}`,
      removeItem: (key: string) => delete store[key],
      clear: () => store = {}
    };

    spyOn(Storage.prototype, 'getItem').and.callFake(mockSessionStorage.getItem);
    spyOn(Storage.prototype, 'setItem').and.callFake(mockSessionStorage.setItem);
    spyOn(Storage.prototype, 'removeItem').and.callFake(mockSessionStorage.removeItem);
    spyOn(Storage.prototype, 'clear').and.callFake(mockSessionStorage.clear);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set an Item', () => {
    localStorage.setItem('foo', 'bar');
    expect(localStorage.getItem('foo')).toBe('bar');
  });

  it('should return null for non existing items', () => {
    expect(localStorage.getItem('foo')).toBeNull();
  });

  it('should set and remove Item', () => {
    localStorage.setItem('foo', 'bar');
    localStorage.removeItem('foo');
    expect(localStorage.getItem('foo')).toBeNull();
  });

  it('should clear the storage', () => {
    localStorage.setItem('foo', 'bar');
    localStorage.setItem('bar', 'foo');
    localStorage.clear();
    expect(localStorage.getItem('foo')).toBeNull();
    expect(localStorage.getItem('bar')).toBeNull();
  });
});


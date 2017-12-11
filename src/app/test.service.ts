import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  add(a, b){
    return a + b;
  }

}

import { Injectable } from '@angular/core';
//import {LocalStorageService   } from 'ngx-webstorage'
@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor() { }

  setStorageData(key:any,value:any){  
    //this.storage.store(key, value);
  }


  getStorageData(key){  
   //let returnType =  this.storage.retrieve(key);
   //return returnType;
  }
}

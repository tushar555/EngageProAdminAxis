import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(public spinner:NgxSpinnerService) { 
  }

  showSpinner():void{
    this.spinner.show();
  }

  hideSpinner():void{
    this.spinner.hide();
  }
}

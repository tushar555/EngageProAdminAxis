import {Validators} from '@angular/forms'


   export const expertFormModels = {
        id: [null,[ Validators.required]],
        firstName:[null, [ Validators.required, Validators.minLength(2)]] ,
        lastName: [null,[ Validators.required, Validators.minLength(2)]], 
        number:[null, [ Validators.required, Validators.pattern("/[^0-9]/")]] ,
        email:[null, [ Validators.required, Validators.email]] 
    }


   export const loginFormModels = {
       username:[null, [Validators.required]],
       password:[null, [Validators.required, Validators.minLength(4)]]
   } 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor() { }

  showUpdateStatus(){
    alert("Status of the Product is Updated !!!")
  }
}

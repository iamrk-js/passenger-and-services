import { Component, OnInit } from '@angular/core';
import { Ipass, Iproduct } from './model/pass';
import { PassService } from './services/pass.service';
import { SnackbarService } from './services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers:[PassService]
})
export class AppComponent implements OnInit {

  title = 'app';
  passArray: Ipass[] = [];
  // passServInstance !: PassService
  public pruductsArray: Iproduct[] = [
    {
      pName: "Laptop",
      pDetails: "wertu",
      pStatus: "Dispatched",
      id: this.uuid()
    },
    {
      pName: "Iphone",
      pDetails: "wertu",
      pStatus: "Dispatched",
      id: this.uuid()
    },
    {
      pName: "Sports Watch",
      pDetails: "wertu",
      pStatus: "Dispatched",
      id: this.uuid()
    }
  ]
  constructor(private snackbarService : SnackbarService) {

  }
  ngOnInit(): void {
    console.log(this.pruductsArray);
  }

  onProductOrdered(name: string, details: string) {
    let obj: Iproduct = {
      pName: name,
      pDetails: details,
      pStatus: 'In Progress',
      id: this.uuid()
    }
    console.log(obj);
    this.pruductsArray.push(obj)
  }

  changeStatus(status: string, id:string) {
    // console.log(status, id);
    this.pruductsArray.forEach(prod => {
      if(prod.id === id){
        prod.pStatus = status;
        this.snackbarService.showUpdateStatus()
      }
    })
  }


  uuid(mask = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx') {
    return `${mask}`.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

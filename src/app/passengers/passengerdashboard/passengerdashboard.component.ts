import { Component, OnInit } from '@angular/core';
import { Ipass } from 'src/app/model/pass';
import { PassService } from 'src/app/services/pass.service';

@Component({
  selector: 'app-passengerdashboard',
  templateUrl: './passengerdashboard.component.html',
  styleUrls: ['./passengerdashboard.component.scss']
})
export class PassengerdashboardComponent implements OnInit {
  public passArray: Ipass[] = [];
  public checkInpass !: number;
  constructor(private passService: PassService) { }

  ngOnInit(): void {
    this.passArray = this.passService.getAllPassengers();
    this.checkInpass = this.passArray.filter(pass => pass.checkedIn).length;

  }
  updatePassData(passData: { passenger: Ipass, action: string }) {
    console.log(passData);
    if (passData.action === 'update') {
      this.passArray.forEach(passObj => {
        if (passObj.id === passData.passenger.id) {
          passObj.fullname = passData.passenger.fullname
        }
      })
    }else if(passData.action === 'remove'){
      let getIndex = this.passArray.findIndex(obj => obj.id === passData.passenger.id)
      this.passArray.splice(getIndex, 1)
    }
    this.checkInpass = this.passArray.filter(pass => pass.checkedIn).length;
  }

}

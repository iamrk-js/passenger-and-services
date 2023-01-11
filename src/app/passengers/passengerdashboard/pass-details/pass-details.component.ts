import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipass } from 'src/app/model/pass';

@Component({
  selector: 'app-pass-details',
  templateUrl: './pass-details.component.html',
  styleUrls: ['./pass-details.component.scss']
})
export class PassDetailsComponent implements OnInit {
  @Input() passObj!: Ipass;
  flag: boolean = true;
  @Output() emitPassData: EventEmitter<{ passenger: Ipass, action: string }> = new EventEmitter<{
    passenger: Ipass,
    action: string
  }>()
  constructor() { }

  ngOnInit(): void {
  }
  onDoneClick(fullname: string) {
    if (this.flag) {
      console.log(`Btn was Clicked ${fullname}`);
      this.passObj.fullname = fullname;
      this.emitPassData.emit({ passenger: this.passObj, action: 'update' })
    }
  }
  onRemove() {
    this.emitPassData.emit({ passenger: this.passObj, action: 'remove' })
  }
}



import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pass-count',
  templateUrl: './pass-count.component.html',
  styleUrls: ['./pass-count.component.scss']
})
export class PassCountComponent implements OnInit {
  @Input() checkInpassCount!: number;
  @Input() totalPassCount!:number;
  constructor() { }

  ngOnInit(): void {
  }

}

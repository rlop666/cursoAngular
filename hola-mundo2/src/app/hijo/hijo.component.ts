import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
@Input()
  public parametro;

  @Output()
  hidden = new EventEmitter<boolean>();

  visible = true;

  constructor() { }

  ngOnInit() {
  }

}

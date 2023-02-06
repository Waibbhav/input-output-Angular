
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() fromparent:any ;
@Output() toparent = new EventEmitter<any>();
message="hii from child to parent"
  constructor() { }

  ngOnInit(): void {
  }

  sendtoparent(){
this.toparent.emit(this.message);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
tochild ='hii from parent';
messagefromchild:any;
  constructor() { }

  ngOnInit(): void {
  }


  fromchild(e:any){
    this.messagefromchild=e
    // console.log(this.messagefromchild);
}



}

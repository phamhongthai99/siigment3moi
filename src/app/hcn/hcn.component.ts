import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hcn',
  templateUrl: './hcn.component.html',
  styleUrls: ['./hcn.component.css']
})
export class HcnComponent implements OnInit {
hcn={
  cd:null,
  cr:null,
  cv:null,
  dt:null,
}
  constructor() { }

  ngOnInit() {
  }
tinh()
{
  this.hcn.dt=this.hcn.cd*this.hcn.cr;
  this.hcn.cv=(this.hcn.cd+this.hcn.cr)*2;
}
}

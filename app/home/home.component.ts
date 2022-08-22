import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
studentList:any[]=[
  {Id:1,Name:'Naresh',city:'hyd',Gender:'Male',Branch:'ECE'},
  {Id:2,Name:'shruti',city:'delhi',Gender:'Female',Branch:'IT'},
  {Id:3,Name:'Virat',city:'mumbai',Gender:'Male',Branch:'ECE'},
  {Id:4,Name:'Rohit',city:'hyd',Gender:'Male',Branch:'CSE'},
  {Id:5,Name:'pinky',city:'Bangalore',Gender:'Female',Branch:'IT'},
  {Id:6,Name:'abhi',city:'kolkata',Gender:'Male',Branch:'CSE'}
]

public dropDownValue = "";
SetDropDownValue(setvalue : any) {
  this.dropDownValue = setvalue.target.value;
}

}

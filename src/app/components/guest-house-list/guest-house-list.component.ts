import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-house-list',
  templateUrl: './guest-house-list.component.html',
  styleUrls: ['./guest-house-list.component.sass']
})
export class GuestHouseListComponent implements OnInit {

  guestHouses = [{name: "On Golden Pond", numberOfGuest: 5},  
  {name: "City Lodge", numberOfGuest: 8}, 
  {name:"BON Hotel", numberOfGuest: 7}];
  
  constructor() { }

  ngOnInit(): void {
  }

}

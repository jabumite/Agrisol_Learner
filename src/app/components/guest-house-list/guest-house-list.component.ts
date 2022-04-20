import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-house-list',
  templateUrl: './guest-house-list.component.html',
  styleUrls: ['./guest-house-list.component.sass']
})
export class GuestHouseListComponent implements OnInit {

  guestHouses = [{name: "Alma Mater Guesthouse", numberOfGuest: 6},
  {name: "On Golden Pond", numberOfGuest: 11},  
  {name: "2 Owls Guesthouse", numberOfGuest: 13}, 
  {name:"Anne's Place", numberOfGuest: 8}];
  
  constructor() { }

  ngOnInit(): void {
  }

}

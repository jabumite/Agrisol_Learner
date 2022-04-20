import { Component, OnInit } from '@angular/core';
import { RoomModel } from 'src/app/models/roomModel';
import { CartService } from 'src/app/services/cart.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.sass']
})
export class PricingComponent implements OnInit {
 
  availableRooms: RoomModel[] = [];

  selectedRooms:RoomModel[] = [];


  constructor(private roomService: RoomService, private cartService: CartService) { }

  ngOnInit(): void {
    this.availableRooms = [...this.roomService.availableRooms];
    
  }

  selectClicked(room: RoomModel, index: number){
    this.selectedRooms.push(room);
    this.availableRooms.splice(index,1);
  }

  removeClicked(room: RoomModel, index: number){
    this.availableRooms.push(room);
    this.selectedRooms.splice(index,1);
  }

 reset(){
  this.availableRooms = [...this.roomService.availableRooms];
 }
}

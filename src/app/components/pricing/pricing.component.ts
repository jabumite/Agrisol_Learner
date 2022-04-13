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

  rooms: RoomModel[] = [];

  selectedRoom :RoomModel | undefined;

  constructor(private roomService: RoomService, private cartService: CartService) { }

  ngOnInit(): void {
    this.rooms = this.roomService.availableRooms;
  }

  selectClicked(room: RoomModel){
    this.cartService.addRoom(room);
    
  }
}

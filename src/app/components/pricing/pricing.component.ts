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
  imageWidth: number = 300;
  imageMargin: number = 2;
  showImage: boolean = false;

  images: any[] = [
    { 
      "roomName": "Double Kamer",
      "imageUrl": "assets/images/Double_kamer.jpg"
    },
    {
      "roomName": "Familie Kamer",
      "imageUrl": "assets/images/Familie_kamer.jpg"
    }
  ];

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

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

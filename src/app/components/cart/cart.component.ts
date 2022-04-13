import { Component, OnInit } from '@angular/core';
import { RoomModel } from 'src/app/models/roomModel';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  total: number = 0;
  rooms: RoomModel[] =[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    
      this.cartService.bookedRooms$.subscribe(rooms => {
        this.total = 0;
        this.rooms = rooms;
        rooms.forEach(room => this.total += room.price);
      });
  }

}

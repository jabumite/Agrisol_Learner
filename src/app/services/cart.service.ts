import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RoomModel } from '../models/roomModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  bookedRooms$ = new BehaviorSubject<RoomModel[]>([]); 

  addRoom(room: RoomModel){
    const rooms = this.bookedRooms$.getValue();
    rooms.push(room);
    this.bookedRooms$.next(rooms);
  }
  removeRoom(room: RoomModel){
   // const rooms = 

  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { RoomModel } from '../models/roomModel';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  availableRooms : RoomModel[] = [
    {name: "Family Unit", numberOfBeds: 4, bedType : "single", price: 1300, description: "Two seperate rooms with 2 beds in each room. The unit is upstairs and has a bath shower and seperat toilet on one floor"}, 
    {name: "Double Unit", numberOfBeds: 2, bedType: "single", price: 850, description: "One room with two single beds, a shower and seperat toilet"}];
  
  selectRoom: RoomModel | undefined;
  
    constructor() { }
}

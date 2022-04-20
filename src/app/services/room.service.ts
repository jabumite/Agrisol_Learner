import { Injectable } from '@angular/core';
import { RoomModel } from '../models/roomModel';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  availableRooms : RoomModel[] = [
    {name: "Family Unit", numberOfBeds: 4, bedType : "Single", price: 1300, description: "Two seperate rooms with two beds in each room. The unit is upstairs and has a bath shower and seperate toilet on one floor.",images: ["assets/images/Familie_kamer.jpg"]}, 
    {name: "Double Unit", numberOfBeds: 2, bedType: "Single", price: 850, description: "One room with two single beds, a shower and seperate toilet.", images:["assets/images/Double_kamer.jpg"]},
    {name: "Self Catering", numberOfBeds: 2, bedType: "Queen", price: 1500, description: "Our luxury self-catering unit is situated on the ground floor of the house and they are equipped with a private lounge, access to the communal dining room, TV, Double bed, shower, aircon, wifi, coffee/tea facilities and a fridge.", images:["assets/images/Self_Catering.jpg"]} 
  ];
  
    constructor() { }
}

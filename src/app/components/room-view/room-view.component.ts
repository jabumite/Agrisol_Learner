import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RoomModel } from 'src/app/models/roomModel';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.sass']
})
export class RoomViewComponent implements OnInit, OnChanges {
  imageWidth: number = 300;
  imageMargin: number = 2;

  @Input() room!: RoomModel;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    console.log(this.room);
    
  }

  ngOnInit(): void { 
   
    
  }
}

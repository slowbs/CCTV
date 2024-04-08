import { Component } from '@angular/core';
import { CctvService, ICctvs, IFloor, IStatus } from '../cctv.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-put',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './put.component.html',
  styleUrl: './put.component.css'
})
export class PutComponent {

  public model: ICctvs;
  public statusItems: IStatus[] = [];
  public floorItems: IFloor[] = [];

  constructor(private cctvService: CctvService) {
    this.model = this.cctvService.updateModel;
    this.getStatus()
    this.getFloor()
  }

  getStatus() {
    return this.cctvService.get_status()
      .subscribe(result => {
        this.statusItems = result['result']
        // console.log(this.statusItems)
      });
  }

  getFloor() {
    return this.cctvService.get_floor()
      .subscribe(result => {
        this.floorItems = result['result']
        // console.log(this.floorItems)
      });
  }

  onSubmit(){
    console.log(this.model)
  }

}

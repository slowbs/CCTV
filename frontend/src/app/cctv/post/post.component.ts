import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CctvService, ICctvs, IFloor, IStatus } from '../cctv.service';
import { GetComponent } from '../get/get.component';
declare const $:any;

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input('getComp') getComp: GetComponent;
  
  constructor(private cctvService: CctvService) {
    this.getStatus();
    this.getFloor();
  }

  public statusItems: IStatus[] = [];
  public floorItems: IFloor[] = [];

  //สร้างตัวแปรสำหรับ Post
  model: ICctvs = {
    durable_no: '',
    durable_name: '',
    location: '',
    floor: '',
    status: ''
  }
  

  room: string = '';

  public onSubmit() {
    // console.log(this.model)
    this.cctvService.post_items(this.model)
      .subscribe({
        next: (result) => {
          // console.log(result)
          $('#addCCTVModal').modal('hide')
          this.getComp.getCCTV();
        },
        error: (excep) => {
          console.log(excep)
          // alert(excep.error.message)
        }
      })
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


}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CctvService, ICctvs, IStatus } from '../cctv.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  constructor(private cctvService: CctvService) {
    this.getStatus();
  }

  public statusItems: IStatus[] = [];

  //สร้างตัวแปรสำหรับ Post
  model: ICctvs = {
    durable_no: '',
    durable_name: '',
    location: '',
    status: ''
  }
  

  room: string = '';

  public onSubmit() {
    console.log(this.model)
    this.cctvService.post_items(this.model)
      .subscribe({
        next: (result) => {
          console.log(result)
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
        console.log(this.statusItems)
      });
  }


}

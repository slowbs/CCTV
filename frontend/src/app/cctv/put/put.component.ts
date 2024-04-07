import { Component } from '@angular/core';
import { CctvService, ICctvs } from '../cctv.service';

@Component({
  selector: 'app-put',
  standalone: true,
  imports: [],
  templateUrl: './put.component.html',
  styleUrl: './put.component.css'
})
export class PutComponent {

  public model: ICctvs;

  constructor(private cctvService: CctvService) {
    this.model = this.cctvService.updateModel;
    console.log(this.model)
  }

}

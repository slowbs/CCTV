import { Component } from '@angular/core';
import { CctvService, ICctvs } from '../cctv.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './put.component.html',
  styleUrl: './put.component.css'
})
export class PutComponent {

  public model: ICctvs;

  constructor(private cctvService: CctvService) {
    this.model = this.cctvService.updateModel;
  }

  onSubmit(){
    console.log(this.model)
  }

}

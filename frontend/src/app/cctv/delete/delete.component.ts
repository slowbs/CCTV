import { Component } from '@angular/core';
import { CctvService } from '../cctv.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {

  constructor(private cctvService: CctvService) {

  }

  onDelete() {
    console.log(this.cctvService.deleteModel)
  }

}

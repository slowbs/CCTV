import { Component } from '@angular/core';
import { CctvService } from '../cctv.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {

  constructor(private cctvService: CctvService) {

  }

  onDelete() {
    // console.log(this.cctvService.deleteModel)
    this.cctvService.delete_items(this.cctvService.deleteModel.id)
      .subscribe({
        next: (result) => {
          console.log(result)
          // $('#editCctvModal').modal('hide');
          // this.getComp.getCCTV();
        },
        error: (excep) => {
          console.log(excep)
          // alert(excep.error.message)
        }
      })

  }

}

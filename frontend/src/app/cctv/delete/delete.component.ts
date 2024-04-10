import { Component, Input } from '@angular/core';
import { CctvService } from '../cctv.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GetComponent } from '../get/get.component';
declare const $: any;

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {

  @Input('getComp') getComp: GetComponent

  constructor(private cctvService: CctvService) {

  }

  onDelete() {
    // console.log(this.cctvService.deleteModel)
    this.cctvService.delete_items(this.cctvService.deleteModel.id)
      .subscribe({
        next: (result) => {
          // console.log(result)
          $('#deleteCctvModal').modal('hide');
          this.getComp.getCCTV();
        },
        error: (excep) => {
          console.log(excep)
          // alert(excep.error.message)
        }
      })

  }

}

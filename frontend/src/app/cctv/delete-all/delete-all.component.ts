import { Component, Input } from '@angular/core';
import { GetComponent } from '../get/get.component';
import { CctvService } from '../cctv.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
declare const $:any;

@Component({
  selector: 'app-delete-all',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-all.component.html',
  styleUrl: './delete-all.component.css'
})
export class DeleteAllComponent {

  @Input('getComp') getComp: GetComponent

  constructor(public cctvService: CctvService) {

  }

  onDelete() {
    // console.log(this.cctvService.deleteAllModel)
    this.cctvService.delete_Allitems(this.cctvService.deleteAllModel)
      .subscribe({
        next: (result) => {
          // console.log(result)
          $('#deleteAllModal').modal('hide');
          // this.getComp.getCCTV();
          this.getComp.ngOnInit();
        },
        error: (excep) => {
          console.log(excep)
          // alert(excep.error.message)
        }
      })
  }

}

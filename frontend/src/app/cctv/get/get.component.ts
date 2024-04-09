import { Component, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { CctvService, ICctvs } from '../cctv.service';

@Component({
  selector: 'app-get',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatCheckboxModule, FormsModule, CommonModule],
  // providers: [CctvService],
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})

export class GetComponent {

  public cctvItems: ICctvs[] = [];

  constructor(private cctvService: CctvService) {
    this.getCCTV();
  }


  checked: boolean = false;
  subtasks = [
    { completed: false }
  ]

  someComplete(): boolean {
    if (this.checked == null) {
      return false;
    }
    return this.cctvItems.filter(t => t.completed).length > 0 && !this.checked;

  }

  setAll(completed: boolean) {
    this.checked = completed;
    if (this.subtasks == null) {
      return;
    }
    this.cctvItems.forEach(t => (t.completed = completed));
    // console.log(this.cctvItems)
    this.onStoreCctvDelete();
  }

  updateAllComplete() {
    this.checked = this.cctvItems != null && this.cctvItems.every(t => t.completed);
    this.onStoreCctvDelete();
  }

  onStoreCctvDelete() {
    // const deleteAll = this.cctvItems.filter(t => t.completed).map(t => t.id)
    // console.log(deleteAll)
    this.cctvService.deleteAllModel = this.cctvItems.filter(t => t.completed).map(t => t.id)
    console.log(this.cctvService.deleteAllModel)
  }


  getCCTV() {
    return this.cctvService.get_cctvs()
      .subscribe(result => {
        this.cctvItems = result['result']
        // console.log(result)
      });
  }

  //Function เมื่อกดปุ่มแก้ไข
  onEditModal(item: ICctvs) {
    Object.assign(this.cctvService.updateModel, item)
    // console.log(this.cctvService.updateModel)
  }

  // Function เพื่อกดปุ่มลบ
  onDeleteModal(item: ICctvs) {
    // console.log(item)
    Object.assign(this.cctvService.deleteModel, item)
  }


}

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
    // console.log(this.memberItems)
  }

  updateAllComplete() {
    this.checked = this.cctvItems != null && this.cctvItems.every(t => t.completed);
  }

  getCCTV() {
    return this.cctvService.get_cctvs()
      .subscribe(result => {
        this.cctvItems = result['result']
        // console.log(result)
      });
  }

  onEditModal(item:ICctvs){
    Object.assign(this.cctvService.updateModel, item)
    console.log(this.cctvService.updateModel)
  }


}

import { Component, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { CctvService, ICctvs } from '../cctv.service';
import { PaginationPipe } from '../../pipes/pagination.pipe';

@Component({
  selector: 'app-get',
  standalone: true,
  imports: [MatButtonModule, MatTooltipModule, MatCheckboxModule, FormsModule, CommonModule, PaginationPipe],
  // providers: [CctvService],
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})

export class GetComponent {

  public cctvItems: ICctvs[] = [];
  public limitPage: number = 10;
  public startPage: number = 1;
  public paginations: number[] = [];
  checked: boolean = false;
  subtasks = [
    { completed: false }
  ]


  constructor(private cctvService: CctvService) {
    this.getCCTV();
    // this.initializedLoadPagination();
  }




  // เช็คว่ามีการติ๊ก บางรายการ
  someComplete(): boolean {
    if (this.checked == null) {
      return false;
    }
    return this.cctvItems.filter(t => t.completed).length > 0 && !this.checked;

  }

  // เมื่อมีการกดปุ่ม เลือกทั้งหมด
  setAll(completed: boolean) {
    this.checked = completed;
    if (this.subtasks == null) {
      return;
    }
    this.cctvItems.forEach(t => (t.completed = completed));
    // console.log(this.cctvItems)
    this.onStoreCctvDelete();
  }

  // แก้ไขปุ่มเลือกทั้งหมด เมื่อมีการเลือกรายการจนครบ
  updateAllComplete() {
    this.checked = this.cctvItems != null && this.cctvItems.every(t => t.completed);
    this.onStoreCctvDelete();
  }


  // เก็บข้อมูล ID สำหรับการลบครั้งละหลายรายการ
  onStoreCctvDelete() {
    // const deleteAll = this.cctvItems.filter(t => t.completed).map(t => t.id)
    // console.log(deleteAll)
    // this.cctvService.deleteAllModel = this.cctvItems.filter(t => t.completed).map(t => t.id)
    this.cctvService.deleteAllModel
      = new PaginationPipe().transform(this.cctvItems, this.startPage, this.limitPage)
        .filter((t: ICctvs) => t.completed)
        .map((t: ICctvs) => t.id)
    // console.log(this.cctvService.deleteAllModel)
  }


  // ดึงข้อมูลกล้องทั้งหมด
  getCCTV() {
    return this.cctvService.get_cctvs()
      .subscribe(result => {
        this.cctvItems = result['result']
        // console.log(result)
        // this.checked = false
        this.initializedLoadPagination();
        this.onResetChecked();
      });
  }

  //Function เมื่อกดปุ่มแก้ไข
  onEditModal(items: ICctvs) {
    Object.assign(this.cctvService.updateModel, items)
    // console.log(this.cctvService.updateModel)
  }

  // Function เพื่อกดปุ่มลบ
  onDeleteModal(items: ICctvs) {
    // console.log(items)
    Object.assign(this.cctvService.deleteModel, DataTransferItemList)
  }

  // function สำหรับกำหนด items แสดงตาม Pagination
  // public getPaginItems(items: ICctvs[]) {
  //   return items.slice((this.startPage - 1) * this.limitPage, this.startPage * this.limitPage)
  // }

  // Function เมื่อกดปุ่ม ก่อนหน้า
  public onPreviousPage() {
    if (this.startPage <= 1) return;
    this.startPage = this.startPage - 1;
    // this.onStoreCctvDelete();
    this.onResetChecked();
  }

  // Function เมื่อกดปุ่ม ถัดไป
  public onNextPage() {
    if (this.startPage >= this.paginations.length) return;
    this.startPage = this.startPage + 1;
    // this.onStoreCctvDelete();
    this.onResetChecked();
  }

  // Function เมื่อกดปุ่มเปลี่ยนหน้าด้วยตัวเลข
  public onChangePage(page: number) {
    this.startPage = page;
    // this.onStoreCctvDelete();
    this.onResetChecked();
  }

  public onResetChecked() {
    this.checked = false
    this.cctvItems.map(item => {
      item.completed = this.checked;
      return item
    });
  }


  //Function คำนวณหน้าเพจ
  private initializedLoadPagination() {
    const pageLength = Math.ceil(this.cctvItems.length / this.limitPage);
    // console.log(pageLength)
    this.paginations = [];
    for (let index = 1; index <= pageLength; index++)
      this.paginations.push(index)
  }

}

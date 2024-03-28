import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CctvService {

  // private backendURL = 'http://localhost/student/backend/index.php/api/member';
  private backendURL = 'http://localhost/cctv/backend/index.php/api/';

  constructor(private httpClient: HttpClient) { }

  // ดึงข้อมูลนักเรียน
  get_cctvs() {
    return this.httpClient.get<ICctvs[]>(this.backendURL + 'cctvs');
  }


  post_items(value: ICctvs) {
    // delete value.name;
    return this.httpClient.post(this.backendURL + 'cctvs', value);
  }

  get_status() {
    return this.httpClient.get<IStatus[]>(this.backendURL + 'status');
  }
}

export interface ICctvs {
  id?: string;
  durable_no: string;
  durable_name?: string;
  brand?: string;
  model?: string;
  location?: string;
  monitor?: string;
  floor?: string;
  status?: string;
  date_created?: string;
  completed?: boolean;
}

export interface IStatus {
  status_id?: string;
  status_name: string;
}


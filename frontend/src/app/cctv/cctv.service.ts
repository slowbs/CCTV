import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CctvService {

  // private backendURL = 'http://localhost/student/backend/index.php/api/member';
  private backendURL = 'http://localhost/cctv/backend/index.php/api/';
  public updateModel: ICctvs = Object.assign({})
  public deleteModel: ICctvs = Object.assign({})

  constructor(private httpClient: HttpClient) { }

  // ดึงข้อมูลนักเรียน
  get_cctvs() {
    return this.httpClient.get<ICctvs[]>(this.backendURL + 'cctvs');
  }


  post_items(value: ICctvs) {
    // delete value.name;
    return this.httpClient.post(this.backendURL + 'cctvs', value);
  }

  put_items(id: any, value: ICctvs) {
    // return this.httpClient.put(this.backendURL + 'cctvs?id=' + id, value)
    // return this.httpClient.put(this.backendURL + 'cctvs', value, { params : { id : id}})
    // delete value.durable_name;
    // value.durable_name = '';
    return this.httpClient.put(this.backendURL + 'cctvs', value, { params: { id } })
  }

  get_status() {
    return this.httpClient.get<IStatus[]>(this.backendURL + 'status');
  }

  get_floor() {
    return this.httpClient.get<IFloor[]>(this.backendURL + 'floors');
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
  floor_id?: string;
  status?: string;
  status_id?: string;
  date_created?: string;
  completed?: boolean;
}

export interface IStatus {
  status_id?: string;
  status_name: string;
}

export interface IFloor {
  floor_id?: string;
  floor_name: string;
  floor_status?: string;
}

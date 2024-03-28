import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GetComponent } from './cctv/get/get.component';
import { PostComponent } from './cctv/post/post.component';
import { PutComponent } from './cctv/put/put.component';
import { DeleteComponent } from './cctv/delete/delete.component';
import { CctvService } from './cctv/cctv.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, MatTooltipModule, MatCheckboxModule, FormsModule, GetComponent, PostComponent, PutComponent, DeleteComponent],
  providers: [CctvService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  title = 'frontend';
  backendURL = 'http://localhost/student/backend/index.php/api/member';

  constructor(private httpClient: HttpClient) {
    // this.initialLoadData();
  }
  

}

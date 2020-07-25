import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  
})
export class UploadComponent implements OnInit {

  constructor(private file: File) { 

  }

  UploadFile(){
    this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err =>
      console.log("Directory doesn't exist"));
  }

  ngOnInit() {}

}

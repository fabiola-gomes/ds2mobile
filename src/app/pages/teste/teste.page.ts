import { Component, OnInit } from '@angular/core';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {

  constructor (private http : HttpClient){}
  
  inputFileChange(event){
    if(event.target.files && event.target.files[0]) {
      const arquivo = event.target.files[0];

      const formData = new FormData();
      formData.append('arquivo',arquivo);

      this.http.post('http://http://localhost:8100/teste',formData)
        .subscribe(resposta => console.log('Upload ok.'));
    }
  }

  

   

  ngOnInit() {

   
  }

}

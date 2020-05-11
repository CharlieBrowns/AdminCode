import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-form-img',
  templateUrl: './form-img.component.html',
  styleUrls: ['./form-img.component.css']
})
export class FormImgComponent implements OnInit {

  @Output('fileSelected') sendFile: EventEmitter<File> = new EventEmitter();
  @Output('filePos') sendPosition: EventEmitter<number> = new EventEmitter();
  imgs: Array<any> = [];
  files: Array<any> = [];

  @Input()
  set getImgs(val: any) {
    console.log(val);
    this.imgs = val;
  }



  temporaryImage: any = null;
  temporaryFile: any = null;
  constructor() { 
  }

  ngOnInit() {
  }
  
  selectImg(file: File){
    if(!file){
      return;
    }
    if(file.type.indexOf('image') < 0) {
      console.log('Solo imágenes','el archivo que estas subiendo no es una imagen', 'error');
      return;
    }
    this.temporaryFile = file;

    this.sendFile.emit(this.temporaryFile);

    var reader = new FileReader;
    reader.onload = (e: any) => { 
      this.temporaryImage = e.target.result; 
    };
    reader.readAsDataURL(file);
  }
  addImg() {
    if( this.temporaryImage ) {
      this.imgs.push(this.temporaryImage);
      this.temporaryImage = null;
      this.temporaryFile = null;
    } else {
      console.log('ya úedes agregar imagenes');
    }
  }
  removeImg (pos: number) {
    if(pos === this.imgs.length) {
      this.temporaryImage = null;
    } else {
      this.imgs.splice(pos, 1);
    }    
    this.sendPosition.emit(pos);
  }


}

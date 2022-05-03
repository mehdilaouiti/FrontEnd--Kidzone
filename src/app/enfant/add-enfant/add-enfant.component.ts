import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Enfant } from '../enfant';
import { EnfantService } from '../enfant.service';
import { NgToastService } from 'ng-angular-popup';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-add-enfant',
  templateUrl: './add-enfant.component.html',
  styleUrls: ['./add-enfant.component.css']
})
export class AddEnfantComponent implements OnInit {
public imagePath: any;

  enfant:Enfant= new Enfant();
  userFile: any;
  public message: string;
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };
  constructor(private httpClient: HttpClient,private enfantService:EnfantService,private router: Router,private toast: NgToastService) { }

  title = 'ImageUploaderFrontEnd';

  public selectedFile;
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  public  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
  };

 }

  // This part is for uploading
  onUpload() {


    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);



    this.httpClient.post('http://localhost:8070/enfant/add-enfant', uploadData)
    .subscribe(
                 res => {console.log(res);
                         this.receivedImageData = res;
                         this.base64Data = this.receivedImageData.pic;
                         this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
                 err => console.log('Error Occured duringng saving: ' + err)
              );


   }
  ngOnInit(): void {
  }

  goToEnfant(){
    this.router.navigate(['/enfants']);



  }

  // onSelectFile(event){
  //   if (event.target.files.length > 0)
  //   {
  //     const file = event.target.files[0];
  //     this.userFile = file;

  //     var mimeType = event.target.files[0].type;
  //     if (mimeType.match(/images\/*/) == null) {
  //       this.message = "Only god can judge me";
  //       return;
  //     }
  //     var reader = new FileReader();
  //     this.imagePath = file;
  //     reader.readAsDataURL(file);
  //     reader.onload = (_event) => {
  //       this.imgURL = reader.result;
  //     }

  //   }
  // }



  saveEnfant(){
    this.enfantService.addEnfant(this.enfant).subscribe(data=>{
      console.log(data);
      this.toast.success({detail:"SUCCESS",summary:'Un enfant a été ajouter',duration: 5000});
      this.goToEnfant();

    },
    error=>console.log(error));

  }




  onSubmit(){


console.log(this.enfant);
this.saveEnfant();

  }
// enfant: Enfant = new Enfant();
//   isAdded = false;
//   constructor(private enfantService: EnfantService, private datePipe: DatePipe){}
//   currentDate = new Date();
//   EnfantForm: FormGroup;
//   ngOnInit() {
//     this.EnfantForm = new FormGroup({
//       nom: new FormControl('', [Validators.required, Validators.minLength(5)]),
//       // lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
//       // userType: new FormControl(),
//       // startDate: new FormControl(this.datePipe.transform(this.currentDate, 'yyyy-MM-dd'))
//     });
//   }

//   onSubmit(){
//     this.enfant.nom = this.EnfantForm.value.nom;

//     this.save();
//   }

//   save(){
//     this.enfantService.addEnfant(this.enfant)
//                     .subscribe(enfant=> {console.log(enfant);
//                       this.isAdded = true;
//                     },
//                     error=>console.log(error))
//   }


// uploadedImage: File;
// dbImage: any;
// postResponse: any;
// successResponse: string;
// image: any;

// public onImageUpload(event) {
//   this.uploadedImage = event.target.files[0];
// }


// imageUploadAction() {
//   const imageFormData = new FormData();
//   imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);


//   this.httpClient.post('http://localhost:8080/upload/image/', imageFormData, { observe: 'response' })
//     .subscribe((response) => {
//       if (response.status === 200) {
//         this.postResponse = response;
//         this.successResponse = this.postResponse.body.message;
//       } else {
//         this.successResponse = 'Image not uploaded due to some error!';
//       }
//     }
//     );
//   }

// viewImage() {
//   this.httpClient.get('http://localhost:8080/get/image/info/' + this.image)
//     .subscribe(
//       res => {
//         this.postResponse = res;
//         this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
//       }
//     );
// }


// onUploadFiles(files: File[]): void {
//   const formData = new FormData();
//   for (const file of files) { formData.append('files', file, file.name); }
//   this.enfantService.upload(formData).subscribe(
//     event => {
//       console.log(event);
//       this.resportProgress(event);
//     },
//     (error: HttpErrorResponse) => {
//       console.log(error);
//     }
//   );
// }
// private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
//   switch(httpEvent.type) {
//     case HttpEventType.UploadProgress:
//       this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
//       break;
//     case HttpEventType.DownloadProgress:
//       this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
//       break;
//     case HttpEventType.ResponseHeader:
//       console.log('Header returned', httpEvent);
//       break;
//     case HttpEventType.Response:
//       if (httpEvent.body instanceof Array) {
//         this.fileStatus.status = 'done';
//         for (const filename of httpEvent.body) {
//           this.filenames.unshift(filename);
//         }
//       } else {
//         saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!,
//                 {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));
//         // saveAs(new Blob([httpEvent.body!],
//         //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
//         //    httpEvent.headers.get('File-Name'));
//       }
//       this.fileStatus.status = 'done';
//       break;
//       default:
//         console.log(httpEvent);
//         break;

//   }
// }
//   private updateStatus(loaded: number, total: number, requestType: string): void {
//     this.fileStatus.status = 'progress';
//     this.fileStatus.requestType = requestType;
//     this.fileStatus.percent = Math.round(100 * loaded / total);
//   }
}

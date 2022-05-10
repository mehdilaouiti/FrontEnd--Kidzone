import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-update-pub',
  templateUrl: './update-pub.component.html',
  styleUrls: ['./update-pub.component.css']
})
export class UpdatePubComponent implements OnInit {
id:number;
  FormRec: FormGroup;
  pub:Publication;
  userFile:any;
  public imagePath:any;
  imgURL:any;
  InputImage:string  ="";
  InputImageext:string;
  croppedImage: any;
  public webcamImage: WebcamImage ;

  constructor(private publicationservice: PublicationService,
    private router: Router,private toast : NgToastService , private formBuilder: FormBuilder,private session:SessionService,private route: ActivatedRoute,) { 
    
  }

  ngOnInit(): void {
    this.FormRec= new FormGroup({
      'idReclamation': new FormControl('', ),
      'objet': new FormControl('', [Validators.required]),
      'messageReclamation': new FormControl('',[Validators.required] ),
      'imageReclamation': new FormControl('', ),
    })
   
  }
  
    

  
    uploadFiles( event:any ) {
      if(event.target.files.length>0)
      {
        const file=event.target.files[0];
        this.InputImage=Math.random().toString(36).substr(2, 9)+"."+event.target.files[0].name.split('.')[1];
        //this.InputImageext=files.target.files[0].name.split('.')[1];
        this.userFile=file;
        var reader = new FileReader();
        this.imagePath=file;
        reader.readAsDataURL(file);
        reader.onload=(_event) =>{this.imgURL=reader.result}
      }
    }
  
  
    saveRec(form:FormGroup){
      this.id = this.route.snapshot.params['id'];
      if(this.InputImage!=""){
        const formdata=new FormData();
        formdata.append('file',this.userFile,this.InputImage);
        this.publicationservice.postFileRec(formdata).subscribe();
      }
      this.pub=new Publication(this.id,form.value.objet,form.value.messageReclamation,
        this.InputImage,new Date(Date.now()), this.session.getUser());
        this.publicationservice.updateForum(this.id,this.pub).subscribe( data =>{
          console.log(data);
        },
        error => console.log(error));
        this.router.navigate(['/pubsF']);
      }
   
      // webcam snapshot trigger
      private trigger: Subject<void> = new Subject<void>();
      triggerSnapshot(): void {
       this.trigger.next();
      }
      handleImage(webcamImage: WebcamImage): void {
       console.info('received webcam image', webcamImage);
       this.webcamImage = webcamImage;
      }
     
      public get triggerObservable(): Observable<void> {
       return this.trigger.asObservable();
      }
    }

  

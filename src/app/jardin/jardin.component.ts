import { Component, OnInit } from '@angular/core';
import { Jardin } from './jardin';
import { JardinService} from '../services/jardin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jardin',
  templateUrl: './jardin.component.html',
  styleUrls: ['./jardin.component.css']
})
export class JardinComponent implements OnInit {

  searchValue : string;
  p: number = 1;
  jardins : Jardin[];

  constructor(private jardinService : JardinService,
    private router : Router ) { }


  ngOnInit(): void {
    this.getJardins();


  }

  private getJardins(){
    this.jardinService.getjardinList().subscribe(data=> {
      console.log(data);
      this.jardins = data;

    });
  }
  jardinDetails(id:number){
    this.router.navigate(['jardin-details', id]);
  }
  updateJardin (id: number){
    this.router.navigate(['update-jardin', id]);

  }

  deleteJardin (id: number){
    this.jardinService.deleteJardin(id).subscribe (() => {
      // this.router.navigate(['/jardins']);
      // this.router.onSameUrlNavigation
      this.redirectTo("/jardins");
    },
    error => console.log(error));

  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

 key: string = 'adresse';
 reverse: boolean = false;
 sort(key :any){
   this.key=key;
   this.reverse= !this.reverse;
 }

}

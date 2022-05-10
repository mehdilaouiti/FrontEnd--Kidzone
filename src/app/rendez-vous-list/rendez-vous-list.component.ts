import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVous } from '../rendez-vous';
import { RendezVousService } from '../rendez-vous.service'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-rendez-vous-list',
  templateUrl: './rendez-vous-list.component.html',
  styleUrls: ['./rendez-vous-list.component.css']
})
export class RendezVousListComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  Rdv: any;
  constructor( private rdvs: RendezVousService,
    private router: Router ) { }

  ngOnInit(): void {
    this.getRdvs();
  }
  private getRdvs(){
    this.rdvs.getRdvList().subscribe((data) =>{
      this.Rdv = data ;
      console.log(data);
    })
    
   
    

  }

updateRendezVous(idRdv: number){
  this.router.navigate(['update-meeting', idRdv]);
}
deleteRendezVous(id: number){
  this.rdvs.deleteRendezVous(id).subscribe( data => {
    console.log(data);
    this.getRdvs();
  })
    
}
public openPDF(): void {
  let DATA: any = document.getElementById('htmlData');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    PDF.save('list of Meetings.pdf');
  });
}

 
  
 

}

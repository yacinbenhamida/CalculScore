import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: FormGroup;
  title = 'app';
  moybac:number;
  M:number = 0;
  r1:number;
  r2:number;
  effectif1 : number;
  effectif2 : number;
  annenaiss:number;
  matprincip:number;
  matgenerale:number;
  totale: number = 0;
  s1:number = 0;
  s2:number = 0;
  res:boolean = false;
  constructor() {
 
  }
  
  calcul(){
    let ri1,ri2,R,B1,B2 = 0;
    if(this.moybac>=15){this.M = 100}
    else if(this.moybac >10 && this.moybac <15 ) this.M = 20*(this.moybac-10);
    ri1 = (this.r1-1)/this.effectif1;
    ri2 = (this.r2-1)/this.effectif2;
    R = (0.5)* ((100-(700*ri1)/3)+(100-(700*ri2)/3))
    if(this.annenaiss == 1997){
      B1 = 5
    }
    if(this.moybac>=16){
      B2 = 20;
    }
    else if(this.moybac<16 && this.moybac >=14){
      B2 = 15
    }
    else if (this.moybac <14 && this.moybac >12){
      B2 = 10
    }
    else if (this.moybac <12 && this.moybac >=11){
      B2 = 5
    }
    this.s1 = 0.3*this.M + 0.7*R + B1 + B2;
    this.s2 = Number(this.matprincip) + Number(this.matgenerale);
    this.totale = this.s1 + this.s2;

    if(!isNaN(this.totale)){
      this.res = true;
    }
    else {alert("veuillez verifier les champs!");this.init()}
  }
  init(){
    this.s1 = 0;
    this.res = false;
    this.totale = 0;
    this.M = 0
    this.r1 = null;
    this.r2 = null;
    this.effectif1 = null;
    this.effectif2 = null;
    this.annenaiss = null;
    this.matprincip = null;
    this.matgenerale = null;
    this.moybac = null;
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  s1s2:number;
  s2s3:number;
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
    let ri1,ri2,R,B1,B2,mguniv = 0;
    this.s1 = 0
    this.s2 = 0;
    mguniv = (this.s1s2+this.s2s3)/2;
    if(mguniv>=15) this.M = 100
    else if(mguniv >10 && mguniv <15 ) this.M = 20*(mguniv-10);
    else mguniv =0;
    ri1 = (this.r1-1)/this.effectif1;
    ri2 = (this.r2-1)/this.effectif2;
    R = (0.5)*((100-(700*ri1)/3)+(100-(700*ri2)/3))
    if(this.annenaiss == 1997 || this.annenaiss == 1996){
      B1 = 5
    }
    else B1 = 0;
    if(this.moybac>=16){
      B2 = 20;
    }
    else if(this.moybac<16 && this.moybac >=14){
      B2 = 15
    }
    else if (this.moybac <14 && this.moybac >=12){
      B2 = 10
    }
    else if (this.moybac <12 && this.moybac >=11){
      B2 = 5
    }
    else B2 = 0;
    this.s1 = Number((0.3*Number(this.M)) + (0.7*Number(R)) + Number(B1) + Number(B2));
    this.s2 = Number(this.matprincip) + Number(this.matgenerale);
    this.totale = this.s1 + this.s2;
    if(isNaN(this.totale) || this.totale > 165 ||  this.s1>125 || this.s2 >40 || this.totale <= 0 || this.s1 <=0 || this.s2 <=0){
      alert("veuillez verifier les champs!")
    }
    else {this.res = true; }
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
    this.s1s2 = null;
    this.s2s3 = null;
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import{NgxPaginationModule}  from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';


import {FormsModule} from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';



import { AppComponent } from './app.component';
import { Trangchu1Component } from './trangchu1/trangchu1.component';
import { Trangchu2Component } from './trangchu2/trangchu2.component';
import { Trangchu3Component } from './trangchu3/trangchu3.component';
import { Trangchu4Component } from './trangchu4/trangchu4.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';
import { CauhoiComponent } from './cauhoi/cauhoi.component';
import { Cauhoi1Component } from './cauhoi1/cauhoi1.component';
import { Lab1Component } from './lab1/lab1.component';
import { DadungComponent } from './dadung/dadung.component';
import { Cauhoi2Component } from './cauhoi2/cauhoi2.component';
import { Cauhoi3Component } from './cauhoi3/cauhoi3.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { HotroComponent } from './hotro/hotro.component';
import { HoidapComponent } from './hoidap/hoidap.component';
import { HcnComponent } from './hcn/hcn.component';
import { Cauhoi4Component } from './cauhoi4/cauhoi4.component';
import { Cauhoi5Component } from './cauhoi5/cauhoi5.component';
import { Cauhoi6Component } from './cauhoi6/cauhoi6.component';
import { Cauhoi7Component } from './cauhoi7/cauhoi7.component';
import { Cauhoi8Component } from './cauhoi8/cauhoi8.component';
import { EditpasswordComponent } from './editpassword/editpassword.component';
import { EditaccountComponent } from './editaccount/editaccount.component';




@NgModule({
  declarations: [
    AppComponent,
    Trangchu1Component,
    Trangchu2Component,
    Trangchu3Component,
    Trangchu4Component,
    DangkyComponent,
    DangnhapComponent,
    DoimatkhauComponent,
    QuenmatkhauComponent,
    CauhoiComponent,
    Cauhoi1Component,
    Lab1Component,
    DadungComponent,
    Cauhoi2Component,
    Cauhoi3Component,
    GioithieuComponent,
    HotroComponent,
    HoidapComponent,
    HcnComponent,
    Cauhoi4Component,
    Cauhoi5Component,
    Cauhoi6Component,
    Cauhoi7Component,
    Cauhoi8Component,
    EditpasswordComponent,
    EditaccountComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    FormBuilder, FormGroup, Validators, NgForm,
    NgxPaginationModule,
    HttpClientModule,
    
    OrderModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: Trangchu1Component },
      { path: 'trangchu1', component: Trangchu1Component },
      { path: 'trangchu2', component: Trangchu2Component },
      { path: 'trangchu3', component: Trangchu3Component },
      { path: 'trangchu4', component: Trangchu4Component },
      { path: 'dangnhap', component: DangnhapComponent },
      { path: 'dangky', component: DangkyComponent},
      { path: 'qmk', component:QuenmatkhauComponent},
      { path: 'dmk', component: DoimatkhauComponent },
      { path: 'Cauhoi', component: CauhoiComponent },
      { path: 'Ch1', component: Cauhoi1Component },
      {path: 'lab',component:Lab1Component},
      {path:'ch9',component:DadungComponent},
      {path:'ch2',component:Cauhoi2Component},
      {path:'ch3',component:Cauhoi3Component},
      {path:'gt',component:GioithieuComponent},
      {path:'ht',component:HotroComponent},
    {path:'hd',component:HoidapComponent},
    {path:'hcn',component:HcnComponent},
    {path:'ch4',component:Cauhoi4Component},
    {path:'ch5',component:Cauhoi5Component},
    {path:'ch6',component:Cauhoi6Component},
    {path:'ch7',component:Cauhoi7Component},
    {path:'ch8',component:Cauhoi8Component},
   
    


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

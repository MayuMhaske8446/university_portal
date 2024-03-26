import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { NgbHighlight} from "@ng-bootstrap/ng-bootstrap";
import { AgGridModule} from "ag-grid-angular";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { LandingComponent } from './landing/landing.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentRecordsComponent } from './student-records/student-records.component';


const routes : Routes = [
  {
    path : "",
    component : DashboardComponent,
    children : [
      {
        path : "",
        redirectTo : "/dashboard/landing",
        pathMatch : "full"
      },
      {
        path : "landing",
        component : LandingComponent
      },      
      {
        path : "students",
        component : StudentRecordsComponent
      }
    ]
  }
]



@NgModule({
  declarations: [
    LandingComponent,
    SideBarComponent,   
    StudentRecordsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbHighlight,
    AgGridModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      routes
    )
  ]
})
export class DashboardModule { }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LandingComponent } from './landing/landing.component';

@Component({
    selector: 'students-details-root',
    standalone: true,
    imports: [CommonModule, SideBarComponent, RouterOutlet, LandingComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'university_portal';
    
    sidebarExpanded : boolean = true;
    
    constructor(private fb : FormBuilder){
    }
}
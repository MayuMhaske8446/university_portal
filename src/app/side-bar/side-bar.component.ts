import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'students-details-side-bar',
  standalone : true,
  imports : [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  @Input() isExpanded : boolean = true;
  @Output() toggleSideBar : EventEmitter<boolean> = new EventEmitter<boolean>()

  handleToggleSideBar(){
    this.toggleSideBar.emit((!this.isExpanded));
  }

}

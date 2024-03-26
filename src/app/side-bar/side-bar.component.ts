import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'students-details-side-bar',
  standalone : true,
  imports : [CommonModule],
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

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { SideComponent } from './side/side.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, SideMenuComponent, RouterModule, SideComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public isExpanded = false;

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}

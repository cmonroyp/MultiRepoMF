import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  RouterModule,
} from '@angular/router';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-side',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    MatListModule,
  ],
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss'],
})
export class SideComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.router.events.subscribe((event: any) => {
    //   if (event instanceof NavigationEnd) {
    //     this.sidenav.close();
    //   }
    // });
  }

  openSidenav() {
    this.sidenav.open();
  }

  closeSidenav() {
    this.sidenav.close();
  }
}

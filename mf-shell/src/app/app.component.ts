import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import PubSub from 'pubsub-js';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mf-shell';
  private router = inject(Router);
  ngOnInit(): void {
    PubSub.subscribe('Result_login', (_messsage, data) => {
      // this._products.push(data as unknown as ICommonProduct);
      // this.count++;
      // localStorage.setItem('products', JSON.stringify(this._products));
      console.log(`💡 Informacioón Retornada desde login :>>`, data.value);
      if (data.value) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}

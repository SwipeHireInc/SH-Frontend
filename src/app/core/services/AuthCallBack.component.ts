import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth-modal-callback',
  templateUrl: `./AuthCallBack.component.html`
})
export class AuthCallbackComponent implements OnInit{
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    //=>httponlycookies
    this.http.get<{ success: boolean }>('/api/auth/check-session').subscribe({
      next: (res) => {
        if (res.success) {
          this.router.navigate(['/main']);
        } else {
          this.router.navigate(['/landing']);
        }
      },
      error: () => this.router.navigate(['/landing']),
    });
  }
}

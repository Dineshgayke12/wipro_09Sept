import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  filter, Observable,of } from 'rxjs';
//import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'rxjsprj';
  obs$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
    filter(x => x > 3)
  );

  ngOnInit() {
    this.obs$.subscribe({
      next: (value) => console.log('next:', value),
      error: (err) => console.log('error:', err),
      complete: () => console.log('completed')
    });
  }

}

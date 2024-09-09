import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'fetchapi';
  private url: string = 'https://jsonplaceholder.typicode.com/users';
  // isLoading: boolean=true;
  status: string = 'loading';
  data: any;

  ngOnInit(): void {
    fetch(this.url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();  // Correct placement of response.json()
      })
      .then((data) => {
        this.data = data;  // Assign the fetched data to `this.data`
        this.status = 'ready';  // Set status to ready after data is fetched
      })
      .catch((error) => {
        console.error('There was an error:', error);
        this.status = 'error';  // Set status to error if fetch fails
      });
  }
    

  //   fetch(this.url)
  //     .then((response) => response.json())
  //     .then((quoteData) => {
  //       this.status = 'ready';
  //       this.data = quoteData;
  //       // this.isLoading = false;  
  //     })
  //     .catch((error) => {
  //       this.status = 'error';
  //       console.error('there was an error');
  //     });
  }


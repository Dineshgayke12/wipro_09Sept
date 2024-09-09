import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumeService {
  API_KEY: string = 'myapi';
  constructor(private httpClient:HttpClient) { }

  public consumeapi(){
    return this.httpClient.get('http://localhost:9100/conv/from/INR/to/EUR?apikey=${this.API_KEY}');
  }
}


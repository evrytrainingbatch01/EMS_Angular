import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppGlobalsService {
 
   baseAppUrl: string = 'http://192.168.0.149:3759';
  constructor() { }
}

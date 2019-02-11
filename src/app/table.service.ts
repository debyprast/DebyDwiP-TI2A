import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  CourseService(): any[]{
    throw new Error("Method not implemented.");
  }
  constructor() { }

  getDeby(){
    return[
      {id:0, hobby:"Travelling", ket:"dengan cara travellinglah saya bisa melupakan tentang kerasnya duniawi :)"},
      {id:1, hobby:"Gamer", ket:"dengan game saya bisa menghilangkan rasa bosan"},
      {id:2, hobby:"Futsal", ket:"merupakan cara saya untuk menjaga kesehatan tubuh"}
    ]
  }
}
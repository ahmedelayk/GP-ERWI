import { Component, OnInit } from '@angular/core';
import { UserapiService } from 'src/app/services/userapi.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public user:UserapiService) { }
  
  reviews: any = {};
  ngOnInit(): void {
    this.reviews = this.user.getReviews().subscribe();
  }

  popup: boolean = false;
  starRating: number = 0;
  review: any;

  addReview(user:any, comment:any){
    console.log(user);
    console.log(comment);
    this.popup = false;
    this.user.review({user, comment,rating:this.starRating}).subscribe(res => {
      console.log(res);
    })
  }
   
}

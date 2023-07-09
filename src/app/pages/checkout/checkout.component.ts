import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserapiService } from 'src/app/services/userapi.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  payment? : FormGroup;
  constructor(public user:UserapiService  ,private fb: FormBuilder, private _activated:ActivatedRoute ,private router:Router) 
  {
   }


  rate= new FormGroup({
    id:new FormControl('',[ Validators.required , Validators.minLength(10)]) ,
    comment:new FormControl('',[ Validators.required , Validators.minLength(10)]) , 
    rating:new FormControl('', Validators.required) ,
    user:new FormControl('', Validators.required) ,
    
  })

  userData: any;
  cost: number = 0;
  ngOnInit(): void {
    this.payment= this.fb.group({
      // id:new FormControl('',[ Validators.required , Validators.minLength(10)]) ,
       name:new FormControl('',[ Validators.required , Validators.minLength(10)]) , 
       cardNumber:new FormControl('', Validators.required) ,
       month:new FormControl('', Validators.required) ,
       exyear:new FormControl('', Validators.required) ,
       cvv:new FormControl('', Validators.required) ,     
     })
  }
  checkoutaction(name:any,month:any,cardNumber:any,exyear:any,cvv:any){
    console.log(name);
    console.log(cardNumber);
    console.log(month);
    
    this.user.checkout({name,month,cardNumber,exyear,cvv}).subscribe(
      (res)=>alert("successfully checkout"),
      (err)=>console.log(err),
      // Like Finally In JS 
      ()=>{
        alert("congrat")
      }
    )
  }
  rateaction(){
    this.user.rate(this.rate.value).subscribe(
      (res)=>alert("successfully checkout"),
      (err)=>console.log(err),
      // Like Finally In JS 
      ()=>{
        alert("congrat")
      }
    )
  }
 

  confirmData(fName:any, lName:any, email:any, password:any, conpassword:any, address:any, city:any, zip: any,  space:any, mango:any) {
    this.cost =  space * 120
    this.user.signup({fName,sName: lName, email, pass:password, conpass:conpassword, adress:address, city, zipCode:zip, space:space, plants: "mango"}).subscribe();
  }


}

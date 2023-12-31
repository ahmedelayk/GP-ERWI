import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
Register= new FormGroup({
  fName:new FormControl('',[ Validators.required , Validators.minLength(10)]) ,
  sName:new FormControl('',[ Validators.required , Validators.minLength(10)]) ,
  
  age:new FormControl('', Validators.required) ,
  Email:new FormControl('', Validators.required) ,
  pass:new FormControl('', Validators.required) ,
  conpass:new FormControl('', Validators.required) ,
  space:new FormControl('', Validators.required) ,
  adress:new FormControl('', Validators.required) ,
  city:new FormControl('', Validators.required) ,
  plants:new FormControl('', Validators.required) ,
  ZipCode:new FormControl('', Validators.required) ,

})
  constructor(private userdata: UserapiService ,private _router: Router) { }

  ngOnInit(): void {
  }
RegisterAction(){
  this.userdata.RegisterApi(this.Register.value).subscribe(
    (res)=>alert("successfully registered"),
    (err)=>console.log(err),
    // Like Finally In JS 
    ()=>{
this._router.navigate(['/'])
    }
  )
}
}

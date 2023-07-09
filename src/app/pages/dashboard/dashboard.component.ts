import { Component, OnInit } from '@angular/core';
// firebase 
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { UserapiService } from 'src/app/services/userapi.service';
// firebase 
// import { AngularFirestore } from '@angular/fire/firestore';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private db: AngularFireDatabase, private user: UserapiService) { }

    dataFromFirebase: any = {};
    dashboardFlag: boolean = true;
    settingsFlag: boolean = false;
    sidebar: boolean = false;
    fsidebar: boolean = true;
    userFromDb: any;
    ngOnInit(): void {
        this.db.object('/test').valueChanges().subscribe(data => {
            console.log(data);
            this.dataFromFirebase = data;
        });
        this.userFromDb = this.user.getUser().subscribe();
        // this.userFromDb = {fName:'ahmed', sName: "ali"}
    }

    handleDashboardLink() {
        this.dashboardFlag = true;
        this.settingsFlag = false;
    }


    handleSettingsLink() {
        this.dashboardFlag = false;
        this.settingsFlag = true;
    }


    editProfile(fName: any, lName: any, email: any, pass: any, adress: any, city: any, zipCode: any) {
        this.user.editProfile({ fName, lName, email, pass, adress, city, zipCode })
    }
}

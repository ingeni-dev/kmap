import { Component, Input } from '@angular/core';
import { ActivationEnd, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class headerComponent {
  @Input() userDetail;
  // @Input() titleName;
  // @Input() positionName;
  // test;
  title = 'ภรณ์ทิพย์ ชัยรักษ์สิริกุล';
  userPosition = 'Programmer';
  ngOnInit(){
    console.log(this.userDetail);
    this.title = this.userDetail.user_name;
    this.userPosition = this.userDetail.unit_desc;
    // console.log(this.titleName);
    // this.title = this.titleName;
    // this.userPosition=this.positionName;
    // this.test = localStorage.getItem('userDetail');
  }
  constructor(private router: Router){

  }
  onClick(){
    this.clearData();
    this.router.navigate(['']);
  }
  clearData(){
    localStorage.removeItem('userDetail');
    localStorage.removeItem('positionDetail');
  }
}


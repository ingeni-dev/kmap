import { Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class mainComponent {
  title = '';
  searchText = '';
  userDetail: any;

  menuAdmin: IMenu[]; 
  //menuEmp: EmpMenu[];

  constructor() {
    
  }


  ngOnInit() {
    this.userDetail = JSON.parse(localStorage.getItem('userDetail'));

    this.getMockMenu();
  }

  getMockMenu() {
    this.menuAdmin = [{
      img: 'assets/img/ใบสรุปปัญหาเฉพาะหน้า.png',
      appName: 'ใบสรุปปัญหาเฉพาะหน้า'
    }, {
      img: 'assets/img/เอกสารควบคุมการเปลี่ยนแปลง.png',
      appName: 'เอกสารควบคุมการเปลี่ยนแปลง'
    }, {
      img: 'assets/img/ยอดขาย.png',
      appName: 'ยอดขาย'
    },{
      img: 'assets/img/qr code.png',
      appName: 'QR Code'
    },{
      img: 'assets/img/คืนเบิกวัตถุดิบ.png',
      appName: 'ระบบคืนเบิกวัตถุดิบ'
    },{
      img: 'assets/img/จับเวลาการผลิต.png',
      appName: 'ระบบจับเวลาการผลิต'
    },{
      img: 'assets/img/จัดการวัตถุดิบ.png',
      appName: 'ระบบจัดการวัตถุดิบ'
    },{
      img: 'assets/img/ระบบจัดการบุคคล.png',
      appName: 'ระบบจัดการบุคคล'
    },{
      img: 'assets/img/การสั่งซื้อ.png',
      appName: 'ระบบการสั่งซื้อวัตถุดิบ'
    }];

    // this.menuEmp = [{
    //   imgSrc: 'assets/img/ใบสรุปปัญหาเฉพาะหน้า.png',
    //   menuName: 'ใบสรุปปัญหาเฉพาะหน้า'
    // }, {
    //   imgSrc: 'assets/img/เอกสารควบคุมการเปลี่ยนแปลง.png',
    //   menuName: 'เอกสารควบคุมการเปลี่ยนแปลง'
    // },
    // // }, {
    // //   imgSrc: 'assets/img/ยอดขาย.png',
    // //   menuName: 'ยอดขาย'
    // // },{
    //   {
    //   imgSrc: 'assets/img/qr code.png',
    //   menuName: 'QR Code'
    //   }
    // // },{
    // //   imgSrc: 'assets/img/คืนเบิกวัตถุดิบ.png',
    // //   menuName: 'ระบบคืนเบิกวัตถุดิบ'
    // // },{
    //   ,{
    //   imgSrc: 'assets/img/จับเวลาการผลิต.png',
    //   menuName: 'ระบบจับเวลาการผลิต'
    // },{
    //   imgSrc: 'assets/img/จัดการวัตถุดิบ.png',
    //   menuName: 'ระบบจัดการวัตถุดิบ'
    // },
    // // },{
    // //   imgSrc: 'assets/img/ระบบจัดการบุคคล.png',
    // //   menuName: 'ระบบจัดการบุคคล'
    // // },
    // {
    //   imgSrc: 'assets/img/การสั่งซื้อ.png',
    //   menuName: 'ระบบการสั่งซื้อวัตถุดิบ'
    // }];


  }
}

interface IMenu {
  userId?: string,
  groupId?: number,
  groupName?: string,
  appId?: number,
  appName?: string,
  url?: string,
  img?: string,
  userManualPath?: string
}

// interface IMenu {
//   imgSrc: string,
//   menuName: string
// }
// interface EmpMenu{
//   imgSrc: string;
//   menuName: string;
// }
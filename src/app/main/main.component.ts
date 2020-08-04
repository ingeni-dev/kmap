import { Component, ViewChild, ElementRef } from '@angular/core';
import { KmapService } from '../services/kmap.service';
import { Observable, Subject, fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';
import { type } from 'os';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class mainComponent {
  title = '';
  checkBtn = 'all';
  // searchText = '';
  searchText = new Subject<string>();
  typeButton = 'all';
  user_id='';
  userDetail: any;
  fiterText = '';

  menuObject: IMenu[];
  menuAdmin: IMenu[];
  //menuEmp: EmpMenu[];
  

  @ViewChild('searchMenu', { static: true }) searchMenuInput: ElementRef;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: false,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: true
  };

  public slides = [
    'First slide',
    'Second slide',
    // 'Third slide',
    // 'Fourth slide',
    // 'Fifth slide',
    // 'Sixth slide'
  ];
  constructor(private kmapService: KmapService) {

  }


  ngOnInit() {
    this.userDetail = JSON.parse(localStorage.getItem('userDetail'));
    console.log(this.userDetail);
    this.getMockMenu(this.typeButton);


    // this.kmapService.getTest().then(res=>{
    //   console.log(res);
    // })

    fromEvent(this.searchMenuInput.nativeElement, 'keyup').pipe(

      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      // , filter(res => res.length > 2)

      // Time in milliseconds between key events
      , debounceTime(400)

      // If previous query is diffent from current   
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {
      this.fiterText = text;
      this.onSearchChanged(text);

    });
  }

  // filterMenu(type:string){
    
  // }

  getMockMenu(typeButton:string) {
    
    this.user_id = window.localStorage.getItem('userId');
    this.kmapService.getMenuItem(this.user_id, typeButton).subscribe(result => {
      console.log('result ja', result);
      this.menuObject = [...result as IMenu[]];
      this.onSearchChanged(this.fiterText);
      // this.menuAdmin = [...result as IMenu[]];
      //this.menuAdmin = [...result as IMenu[]];
    //    = [{
    //     id: 0,
    //     appName: "ใบสรุปปัญหาเฉพาะหน้า",
    //     img: "assets/img/NCR.png",
    //     type: "repair"
    //   },
    //   {
    //     id: 1,
    //     appName: "เอกสารควบคุมการเปลี่ยนแปลง",
    //     img: "assets/img/Communication.png",
    //     type: "doc"
    //   },
    //   {
    //     id: 2,
    //     appName: "ยอดขาย",
    //     img: "assets/img/money.png",
    //     type: "sale"
    //   },
    //   {
    //     id : 3,
    //     appName : "QR Code",
    //     img : "assets/img/qr code.png",
    //     type: "doc"
    //   },
    //  {
    //     id : 4,
    //     appName : "ระบบคืนเบิกวัตถุดิบ",
    //     img : "assets/img/giveget.png",
    //     type : "repair"
    //   },
    //   {
    //     id : 5,
    //     appName : "ระบบจับเวลา",
    //     img : "assets/img/time.png",
    //     type: "doc"
    //   },
    //   {
    //     id: 6,
    //     appName : "ระบบจัดการวัตถุดิบ",
    //     img : "assets/img/manageRaw.png",
    //     type: "sale"
    //   },
    //   {
    //     id : 7,
    //     appName : "ระบบจัดการบุคคล",
    //     img : "assets/img/managepeople.png",
    //     type: "doc"
    //   },
    //    {
    //     id : 8,
    //     appName : "ระบบสั่งซื้อวัตถุดิบ",
    //     img : "assets/img/orderRaw.png",
    //     type: "sale"
    //   }
    //   ]

      console.log('menuAdmin', this.menuAdmin);
    })

  }

  onSearchChanged(searchText: string) {
    this.menuAdmin = this.menuObject.filter(r => r.appName.includes(searchText));
  }

  public onIndexChange(index: number) {
    console.log('Swiper index: ', index);
  }

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };
}

interface IMenu {
  id?: number,
  userId?: string,
  groupId?: number,
  groupName?: string,
  appId?: number,
  appName: string,
  url?: string,
  img?: string,
  userManualPath?: string
  type?: string
}

// this.menuAdmin = [{
//   img: 'assets/img/ใบสรุปปัญหาเฉพาะหน้า.png',
//   appName: 'ใบสรุปปัญหาเฉพาะหน้า'
// }]

import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-menurender',
  templateUrl: './menurender.component.html',
  styleUrls: ['./menurender.component.css']
})
export class MenurenderComponent implements OnChanges  {
  @Input() slides: string[];
  @Input() menuAdmin: any;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: false,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: true
  };

  constructor() { }
  
  ngOnChanges() {
    // create header using child_id
    console.log('slide changed', this.slides);
  }

  onMenuClicked(urlPath: string) {
    window.open(urlPath, "_blank");
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DragScrollModule } from 'ngx-drag-scroll';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { mainComponent } from './main/main.component';
import { footerComponent } from './footer/footer.component';
import { AlertModule } from 'ngx-bootstrap/Alert';
@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    mainComponent,
    footerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    AlertModule.forRoot(),
    DragScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

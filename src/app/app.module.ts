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
import { layoutComponent } from './layout/layout.component';
import { loginComponent } from './login/login.component';
import { AlertModule } from 'ngx-bootstrap/Alert';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    mainComponent,
    footerComponent,
    loginComponent,
    layoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    AlertModule.forRoot(),
    DragScrollModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'decreasing',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

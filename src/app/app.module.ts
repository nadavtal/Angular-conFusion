import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import  'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FlexLayoutModule, 
    MatToolbarModule,
    MatListModule,
    MatCardModule, 
    AppRoutingModule
    
  ],
  providers: [
    DishService,
    PromotionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

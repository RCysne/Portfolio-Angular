import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CountComponent } from './count/count.component';
import { BookListComponent } from './book-list/book-list.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { MenuHamburgerComponent } from './menu-hamburger/menu-hamburger.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CountComponent,
    BookListComponent,
    NavButtonComponent,
    MenuButtonComponent,
    SocialIconsComponent,
    MenuHamburgerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

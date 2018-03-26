import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactCardComponent } from './contact-card.component';
import { ContactsListComponent } from './contacts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path:'',
      redirectTo:'app',
      pathMatch:'full',
    },
    {
      path:'contact-list',
      component:ContactsListComponent
    },
    {
      path:'contact-details/:id',
      component:ContactCardComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

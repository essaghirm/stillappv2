import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import { AddContactPage } from '../pages/add-contact/add-contact';
import { EditContactPage } from '../pages/edit-contact/edit-contact';
import { EditInfoPage } from '../pages/edit-info/edit-info';
import { EditRelationPage } from '../pages/edit-relation/edit-relation';
import { EditCategoryPage } from '../pages/edit-category/edit-category';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactProvider } from '../providers/contact/contact';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    AddContactPage,
    EditContactPage,
    EditInfoPage,
    EditRelationPage,
    EditCategoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    AddContactPage,
    EditContactPage,
    EditInfoPage,
    EditRelationPage,
    EditCategoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactProvider
  ]
})
export class AppModule {}

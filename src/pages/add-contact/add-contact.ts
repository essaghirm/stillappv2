import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-add-contact',
 	templateUrl: 'add-contact.html',
 })
 export class AddContactPage {

 	type: any
 	lname: any
 	fname: any
 	site_web: any
 	city: any
 	contact = {"type": "", "lname": "", "fname": "", "site_web": "", "city": ""}
 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad AddContactPage');
 	}

 }

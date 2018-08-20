import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-detail',
 	templateUrl: 'detail.html',
 })
 export class DetailPage {

 	contact: any
	infos: any
	relations: any
	rel_contacts: any
	rel_companies: any
	categories: any
	lvl = 0
	edit_info:any = true
	edit_rel:any = true

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 		this.contact = this.navParams.data.contact
 		this.lvl = this.navParams.data.lvl
 		console.log(this.navParams.data, this.navParams.data.contact)
 		this.contact.infos = [{"IdInfoContact":"1716","ContactId":"822","InfoType":"Mobile","InfoLabel":null,"InfoValue":"(+336) 273 936 34","IsCurrent":"0","SysCreated":"2018-04-20 12:06:02"},{"IdInfoContact":"1717","ContactId":"822","InfoType":"Email","InfoLabel":null,"InfoValue":"vincent.allard@knauf.fr","IsCurrent":"0","SysCreated":"2018-04-20 12:06:02"}]
 		this.rel_companies = [{"IdContact":"6","CategoryId":"5","ContactType":"Entreprise","LastName":"CMPE","FirstName":null,"WebSite":"www.cmpe.ma/","City":"Casablanca","Notes":"Trés réactifs\r\ngrande entreprise","AvatarPath":"çç& CMPE.jpg","ConsultingRating":"0","Rating":"0.00","SysUpdated":"2018-04-07 22:39:59","SysCreated":"2018-04-20 10:33:47","IdRelationship":"2127","FirstContactId":"168","OtherContactId":"6","Occupation":null,"IsCurrent":"0","infos":[{"IdInfoContact":"16","ContactId":"6","InfoType":"LandLine","InfoLabel":"Siége","InfoValue":"(+212) 524 611 961","IsCurrent":"0","SysCreated":"2018-04-20 12:06:02"},{"IdInfoContact":"17","ContactId":"6","InfoType":"Address","InfoLabel":"Siége","InfoValue":"Angle rue Rocroy et Buzancy 20000","IsCurrent":"0","SysCreated":"2018-04-20 12:06:02"}],"LandLine":"(+212) 524 611 961"},{"IdContact":"1560","CategoryId":"6","ContactType":"Entreprise","LastName":"Richter system","FirstName":null,"WebSite":"www.richtersystem.fr","City":"Europe","Notes":"recommandé par knauf","AvatarPath":"avatar.gif","ConsultingRating":"0","Rating":"0.00","SysUpdated":"2018-04-07 22:40:01","SysCreated":"2018-04-20 10:33:47","IdRelationship":"2359","FirstContactId":"168","OtherContactId":"1560","Occupation":null,"IsCurrent":"0","infos":[{"IdInfoContact":"3243","ContactId":"1560","InfoType":"Address","InfoLabel":"Siége","InfoValue":"Siége","IsCurrent":"0","SysCreated":"2018-04-20 12:06:02"}]},{"IdContact":"1762","CategoryId":"5","ContactType":"Entreprise","LastName":"Novimat","FirstName":null,"WebSite":"www.novimat.ma","City":"Casablanca","Notes":null,"AvatarPath":"avatar.gif","ConsultingRating":"0","Rating":"0.00","SysUpdated":"2018-04-07 22:40:01","SysCreated":"2018-04-20 10:33:47","IdRelationship":"2230","FirstContactId":"1762","OtherContactId":"168","Occupation":null,"IsCurrent":"0","infos":[{"IdInfoContact":"3662","ContactId":"1762","InfoType":"Address","InfoLabel":"Siége","InfoValue":"Km 8,5 Route el Jadida , Casablanca Maroc","IsCurrent":"0","SysCreated":"2018-04-20 12:06:02"},{"IdInfoContact":"3663","ContactId":"1762","InfoType":"LandLine","InfoLabel":"Siége","InfoValue":"(+212) 522 311 674","IsCurrent":"0","SysCreated":"2018-04-20 12:06:02"},{"IdInfoContact":"3664","ContactId":"1762","InfoType":"Email","InfoLabel":"Siége","InfoValue":"info@novimat.ma","IsCurrent":"0","SysCreated":"2018-04-20 12:06:02"},{"IdInfoContact":"3665","ContactId":"1762","InfoType":"Email","InfoLabel":"Siége","InfoValue":"Commercial@novimat.ma","IsCurrent":"0","SysCreated":"2018-04-20 12:06:02"}],"LandLine":"(+212) 522 311 674","Email":"Commercial@novimat.ma"}]
 		this.rel_contacts = [{"IdContact":"822","CategoryId":"5","ContactType":"Contact","LastName":"Allard","FirstName":"Vincent","WebSite":null,"City":null,"Notes":null,"AvatarPath":"avatar.gif","ConsultingRating":"0","Rating":"0.00","SysUpdated":"2018-04-07 22:40:00","SysCreated":"2018-04-20 10:33:47","IdRelationship":"131","FirstContactId":"168","OtherContactId":"822","Occupation":"Directeur Commercial e Marketing Afrique du Nord","IsCurrent":"0","infos":[{"IdInfoContact":"1716","ContactId":"822","InfoType":"Mobile","InfoLabel":null,"InfoValue":"(+336) 273 936 34","IsCurrent":"0","SysCreated":"2018-04-20 12:06:02"},{"IdInfoContact":"1717","ContactId":"822","InfoType":"Email","InfoLabel":null,"InfoValue":"vincent.allard@knauf.fr","IsCurrent":"0","SysCreated":"2018-04-20 12:06:02"}],"Mobile":"(+336) 273 936 34","Email":"vincent.allard@knauf.fr"}]
 		// this.getRelations()
 		// this.getCategories()
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad DetailPage');
 	}

 	editInfo(){

 	}

 	editRelations(type){

 	}

 }

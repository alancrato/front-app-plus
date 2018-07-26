import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { PostsPage } from "../posts/posts";
import { ServiceWp } from "../service/service.wp";

@Component({
	templateUrl: './categories.html',
	providers: [ ServiceWp ]
})
export class Categories implements OnInit {

	categories: any;

	constructor(
		private wordpressService: ServiceWp,
		private navController: NavController,
		private loadingController: LoadingController
	) {}

	ngOnInit() {
		this.getCategories();
	}

	getCategories() {
		let loader = this.loadingController.create({
			content: ""
		});
		loader.present();

		this.wordpressService.getCategories()
		.subscribe(result => {
			this.categories = result;
			loader.dismiss();
		});
	}

	loadCategory(category) {
		this.navController.push(PostsPage, {
			category: category
		});
	}

}

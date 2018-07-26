import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { PostPage } from "../post/post";

@Component({
	selector: 'page-favorites',
	templateUrl: './favorites.html',
	providers: []
})
export class Favorites {

	category: any;
	search: string;
	hideSearchbar: boolean = true;
	favoritePosts = [];

	constructor(
		private navController: NavController,
		private storage: Storage) {}

    ionViewWillEnter() {
        this.getPosts();
    }

	getPosts() {
	    this.storage.get('wordpress.favorite')
	    .then(data => {
	        if(data) {
	        	this.favoritePosts = JSON.parse(data);
	        }
	    });
	}

	loadPost(post) {
		this.navController.push(PostPage, {
			post: post
		});
	}

	removeFavoritePost(post) {
		const index = this.favoritePosts.findIndex(item => item.id === post.id);
		this.favoritePosts.splice(index, 1);
		this.storage.set('wordpress.favorite', JSON.stringify(this.favoritePosts)); 
	}

	removeAllFavoritePosts() {
		this.favoritePosts = [];
		this.storage.remove('wordpress.favorite');
	}

}

import { Component } from '@angular/core';
import { Post } from '../models/Post';
import { DataService } from '../service/data.service';
import { Friend } from '../models/Friend';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  model : Post = new Post();
  friendsToDisplay : Friend[]=[]; 

  constructor(private data: DataService, private shared:SharedService) {
   data.getAllFriends().subscribe(list=>{
    this.friendsToDisplay=[];
      
      
      
    for (let i = 0; i < list.length; i++) {
      let friend = list[i];
      if (friend.belongTo == shared.userName) {
        this.friendsToDisplay.push(friend);
      }

    }
   this.friendsToDisplay=  this.friendsToDisplay.sort((left, rigth)=>{
    if(left.name.toLowerCase() < rigth.name.toLowerCase()) return -1;
    else return 1;
   });


   });
  }

  post(){
    console.log('Save btn Pressed');
    console.log(this.model);
    this.model.from= this.shared.userName;

    this.data.savePost(this.model);
    this.model= new Post();
  }

}

import { Component } from '@angular/core';
import { Friend } from '../models/Friend';
import { database } from 'firebase';
import { DataService } from '../service/data.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  model: Friend = new Friend();
  friendsToDisplay: Friend[] = [];


  constructor(private data: DataService,private shared: SharedService) {
    data.getAllFriends().subscribe(list => {
      this.friendsToDisplay=[];
      
      
      
      for (let i = 0; i < list.length; i++) {
        let friend = list[i];
        if (friend.belongTo == "Miguel") {
          this.friendsToDisplay.push(friend);
        }

      }
     this.friendsToDisplay=  this.friendsToDisplay.sort((left, rigth)=>{
      if(left.name.toLowerCase() < rigth.name.toLowerCase()) return -1;
      else return 1;
     });

    });
  }
  register() {
    this.model = new Friend();
    this.data.saveFriend(this.model);
    this.model.belongTo =this.shared.userName;


  }
  unfriend(friendtoRemove:Friend){
    console.log('remove', friendtoRemove);
    this.data.removeFriend(friendtoRemove.fbId);
  }
}

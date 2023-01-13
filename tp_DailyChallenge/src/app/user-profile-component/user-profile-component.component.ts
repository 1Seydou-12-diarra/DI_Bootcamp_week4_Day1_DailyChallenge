import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.css']
})
export class UserProfileComponentComponent {
 
  user: User = {
    name: "DIARRASSOUBA",
    prenom: "SEYDOU",
    profilePictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU",
  }

  constructor() { }
 

  ngOnInit(): void {
  }

  getFullName(user: User) {
    return `${user.name} ${user.prenom}`;
  }

}

class User {
  name?: String;
  prenom?: String;
  profilePictureUrl?: String;
}

    

  

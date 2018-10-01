import {IFriend, IFriends} from '../../../../model';


export class FriendService {

  getFriends(): Promise<Array<IFriend>> {
    return fetch(`${API_BASE_URL}/friends`)
           .then(response => response.json())
           .then((data:IFriends) => data.friends);
  }
}

import {IFriend, IFriends} from '../../../../model';


export class FriendService {

  getFriends(): Promise<Array<IFriend>> {
    return Promise.resolve([{name: 'Jane', id: 1}]);
  }
}

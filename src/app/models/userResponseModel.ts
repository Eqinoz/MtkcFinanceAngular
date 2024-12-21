import {ResponseModel} from './ResponseModel';
import {User} from './user';

export interface UserResponseModel extends ResponseModel {
  data:User[];
}

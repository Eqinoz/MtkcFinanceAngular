import {ResponseModel} from './ResponseModel';
import {Company} from './company';

export interface CompanyResponseModel extends ResponseModel {
  data:Company[];

}

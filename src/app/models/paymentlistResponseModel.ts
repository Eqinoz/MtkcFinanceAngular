import {Paymentlist} from './paymentlist';
import {ResponseModel} from './ResponseModel';

export interface PaymentlistResponseModel extends ResponseModel {
  data:Paymentlist[],

}

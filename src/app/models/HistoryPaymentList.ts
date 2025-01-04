import {Paymentlist} from './paymentlist';

export interface HistoryPaymentList extends Paymentlist{
  datePaid: Date;
}

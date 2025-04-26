export default interface IOrderItem {
  id: number;
  firstname?: string;
  itemid?: number;
  notes?: string;
  orderid?: number;
  price?: number;  
  quantity: number;
}
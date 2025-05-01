import IMenuItem from "./MenuItem";

export default interface IOrderItem extends IMenuItem {
  firstname?: string;
  itemid?: number;
  notes?: string;
  orderid?: number;
}

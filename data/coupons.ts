export interface Coupon {
  id: number;
  name: string;
  discountPecentage: number
}

const coupons: Coupon[] = [
  {
    id: 1,
    name: "SAVE10",
    discountPecentage: 10
  },
  {
    id: 2,
    name: "SAVE20",
    discountPecentage: 20
  },
  {
    id: 3,
    name: "SAVE30",
    discountPecentage: 10
  },
];

export function getCoupons(): Coupon[] {
  return coupons;
}

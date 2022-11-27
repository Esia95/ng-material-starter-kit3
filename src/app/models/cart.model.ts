export interface CartModel {
  readonly id: number;
  readonly userId: number;
  readonly date: string;
  readonly products: [
    {
      readonly productId: number;
      readonly quantity: number;
    }
  ]
}

export const fakeArray = (length: number) => new Array(length).fill(null);
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
};

export function calculateTotalPages({
  totalItems,
  perPage,
}: {
  totalItems: number;
  perPage: number;
}) {
  if (perPage <= 0) {
    throw new Error("perPage must be a positive integer");
  }
  if (totalItems < 0) {
    throw new Error("totalItems must be a non-negative integer");
  }

  return Math.ceil(totalItems / perPage);
}

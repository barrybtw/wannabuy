import { useWishlist } from "../stores/useWishlist";

export default function Budget() {
  const wishlist = useWishlist((state) => state.products);
}

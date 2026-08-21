import type { Metadata } from "next";
import { OrderDone } from "@/components/order-done";

export const metadata: Metadata = {
  title: "Order summary",
  description:
    "Demo confirmation. Nothing was charged. No document was stored.",
};

export default function OrderDonePage() {
  return (
    <article className="px-6 pb-24 pt-10 md:px-12 lg:px-16">
      <OrderDone />
    </article>
  );
}

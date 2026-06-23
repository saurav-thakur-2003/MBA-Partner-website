import { useState } from "react";

export function CheckoutSkeleton({ programSlug, amount }: { programSlug: string; amount?: string }) {
  const [loading, setLoading] = useState(false);

  const startCheckout = async () => {
    setLoading(true);
    // This is a skeleton: integrate Razorpay/Stripe SDK here.
    // Example: call server to create payment order, then open Razorpay checkout.
    setTimeout(() => {
      alert('Checkout flow placeholder — integrate provider SDK');
      setLoading(false);
    }, 800);
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="text-sm text-muted-foreground">Secure checkout</div>
      <div className="mt-2 flex items-baseline gap-2">
        <div className="font-display text-2xl font-bold">{amount ?? '₹--'}</div>
        <div className="text-xs text-muted-foreground">One-time payment</div>
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={startCheckout} className="btn btn-primary w-full">Pay Now</button>
      </div>
      <div className="mt-2 text-[11px] text-muted-foreground">We accept UPI, cards and netbanking. Integrate provider to enable payments.</div>
    </div>
  );
}

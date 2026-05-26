// Stripe CTA button: Redes que Venden
// Uses direct payment link so the button can be restyled freely

const STRIPE_URL = "https://buy.stripe.com/00wfZj2Ty8fe96lg8KdZ60l";

export const StripeBuyButton = ({ label = "Pagar ahora" }: { label?: string }) => (
  <a
    href={STRIPE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-mint-lg !text-lg w-full md:w-auto justify-center"
  >
    {label}
    <span aria-hidden> →</span>
  </a>
);

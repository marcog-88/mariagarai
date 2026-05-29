// Stripe CTA button: Redes que Venden
// Uses direct payment link so the button can be restyled freely

const STRIPE_URL = "https://buy.stripe.com/00wfZj2Ty8fe96lg8KdZ60l";

type Props = { label?: string; glow?: boolean };

export const StripeBuyButton = ({ label = "Pagar ahora", glow = false }: Props) => (
  <a
    href={STRIPE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-mint-lg !text-lg w-full md:w-auto justify-center whitespace-nowrap border-2 border-[#0c0d0e] !text-[#0c0d0e]"
    style={{
      boxShadow: glow
        ? "4px 4px 0 0 #0c0d0e, 8px 8px 28px rgba(232, 143, 0, 0.6), 14px 14px 56px rgba(232, 143, 0, 0.35)"
        : "4px 4px 0 0 #0c0d0e",
    }}
  >
    {label}
    <span aria-hidden> →</span>
  </a>
);

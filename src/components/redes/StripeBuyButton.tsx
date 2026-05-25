// Stripe Buy Button web component — Redes que Venden
// Script loaded in index.html

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-buy-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "buy-button-id": string;
          "publishable-key": string;
        },
        HTMLElement
      >;
    }
  }
}

import React from "react";

export const StripeBuyButton = () => (
  <stripe-buy-button
    buy-button-id="buy_btn_1TawVKRBsnLJRgDoDOxBWAjA"
    publishable-key="pk_live_51STKjTRBsnLJRgDoJTHHwb59zuIg0NcUEOE2bY5Id7rG73GXuY0EPASqva9RLJIKEE7bKdtn9sBnh1nwIkkBLc1P00rHqQS8y4"
  />
);

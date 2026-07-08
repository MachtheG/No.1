/**
 * Central campaign configuration. Swap the slogan here and it updates across
 * the hero, navigation brand area, footer, and CTAs.
 *
 * NOTE: The 2027 slogan is a placeholder pending final selection from the
 * strategy brief. Replace SLOGAN / SLOGAN_EN when the battle cry is locked.
 */
export const CAMPAIGN = {
  year: "2027",
  slogan: "KAZI IENDELEE",
  sloganEn: "Let the Work Continue",
  // WhatsApp line the pledge flow confirms into (demo number — replace with the
  // real campaign WhatsApp business number before launch).
  whatsappNumber: "254700000000",
  // Baseline supporter count for the live-counter effect (demo figure).
  supporterBase: 1284630,
};

export function whatsappLink(message: string) {
  return `https://wa.me/${CAMPAIGN.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

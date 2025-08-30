/* generated from src/components/ButtonLink.astro */

interface Props {
  href: string;
  text: string;
  variant?: "primary" | "secondary";
  isDownload?: boolean;
}

const { href, text, variant = "primary", isDownload } = Astro.props as Props;



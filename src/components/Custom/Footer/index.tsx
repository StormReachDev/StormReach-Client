// Imports:
import FooterLower from './FooterLower';
import FooterUpper from './FooterUpper';

export default function Footer() {
  return (
    <footer className="bg-core-black w-full sm:min-h-[650px] lg:h-[650px] px-5 py-2 sm:px-[60px] sm:py-5">
      <FooterUpper />
      <FooterLower />
    </footer>
  );
}

// Imports:
import FooterLower from './FooterLower';
import FooterUpper from './FooterUpper';

export default function Footer() {
  return (
    <footer className="bg-core-black w-full h-[650px] px-5 py-2 sm:px-[60px] sm:py-5 border-red-500 border fixed bottom-0">
      <FooterUpper />
      <FooterLower />
    </footer>
  );
}

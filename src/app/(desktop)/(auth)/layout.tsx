// Imports:
import Wrapper from '@/components/Generics/Wrapper';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper className="max-w-full size-full py-[92px] px-[70px] place-content-center">
      {children}
    </Wrapper>
  );
}

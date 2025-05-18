// Imports:
import Wrapper from '@/components/Generics/Wrapper';

export default function FooterLower() {
  return (
    <Wrapper className="max-w-full flex justify-between h-1/2 border-blue-500 border">
      <div className="border-orange-600 border w-6/12 space-y-3">a </div>
      <div className="border-yellow-600 border w-3/12">b</div>
      <div className="border-green-600 border w-3/12">c</div>
    </Wrapper>
  );
}

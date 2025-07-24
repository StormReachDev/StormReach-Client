// Imports:
import ChangePasswordModal from '@/components/UI/Modals/ChangePassword';
import Wrapper from '@/components/UI/Wrapper';
import HeaderLayout from '@/layouts/HeaderLayout';

export default function SettingsModule({ form }: { form: React.ReactNode }) {
  return (
    <>
      <HeaderLayout>
        <Wrapper className="max-w-full w-full space-y-7">
          {form}
          <ChangePasswordModal />
        </Wrapper>
      </HeaderLayout>
    </>
  );
}

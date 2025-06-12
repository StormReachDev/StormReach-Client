// Imports:
import SettingsForm from '@/components/Custom/Forms/Settings';
import ChangePasswordModal from '@/components/UI/Modals/ChangePassword';
import Wrapper from '@/components/UI/Wrapper';
import HeaderLayout from '@/layouts/HeaderLayout';

export default function SettingsModule() {
  return (
    <>
      <HeaderLayout>
        <Wrapper className="max-w-full w-full space-y-7">
          <SettingsForm />
          <ChangePasswordModal />
        </Wrapper>
      </HeaderLayout>
    </>
  );
}

export type SplitScreenProps = {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
};

export type Screen = 'login' | 'forgotPassword' | 'resetPassword';

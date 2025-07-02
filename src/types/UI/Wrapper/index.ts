type WrapperProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

type ResponsiveLayoutProps = {
  children: React.ReactNode;
  mobileComponent: React.ReactNode;
};

export default WrapperProps;
export { type ResponsiveLayoutProps };

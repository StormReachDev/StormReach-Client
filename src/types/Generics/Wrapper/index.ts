type WrapperProps = {
  className?: string;
  children: React.ReactNode;
};

type ResponsiveLayoutProps = {
  children: React.ReactNode;
  mobileComponent: React.ReactNode;
};

export default WrapperProps;
export { type ResponsiveLayoutProps };

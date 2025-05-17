export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-screen overflow-hidden">{children}</main>;
}

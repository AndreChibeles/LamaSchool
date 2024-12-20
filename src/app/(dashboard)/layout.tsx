export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] bg-red-200">l</div>
      <div className="w-[86%] bg-blue-200">r</div>
    </div>
  );
}

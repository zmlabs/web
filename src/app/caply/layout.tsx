import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Live Captions & Translation",
  title: "Caply",
};

interface CaplyLayoutProps {
  children: React.ReactNode;
}

export default function CaplyLayout(props: CaplyLayoutProps) {
  const { children } = props;
  return <div className="flex justify-center p-8">{children}</div>;
}

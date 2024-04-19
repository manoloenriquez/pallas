import { PropsWithChildren } from "react";

export default function AboutLayout({ children }: PropsWithChildren) {
  return (
    <main className="w-full h-screen pt-24 text-pallaslightred text-justify overflow-hidden">
      {children}
    </main>
  );
}

import "design-system/styles/globals.css";

import { TrpcProvider } from "@/providers/trpc-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <TrpcProvider>
        <body>{children}</body>
      </TrpcProvider>
    </html>
  );
}

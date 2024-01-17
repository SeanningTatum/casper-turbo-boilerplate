import { TrpcProvider } from "@/providers/trpc-provider";
import "design-system/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <TrpcProvider>
        <body>{children}</body>
      </TrpcProvider>
    </html>
  );
}

import './tailwind.css';

export const metadata = {
  title: 'My App',
  description: 'A Next.js 13 app with Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}

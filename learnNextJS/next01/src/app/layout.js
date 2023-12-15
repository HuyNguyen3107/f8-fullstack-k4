export const metadata = {
  title: "Anh An hoi",
  description: "Anh An no hair",
  keywords: "learn JS, learn nextJS, learn React JS, learn VueJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

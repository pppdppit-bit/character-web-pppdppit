export const metadata = {
  title: "인물관계도 메이커",
  description: "드래그 앤 드롭으로 쉽게 만드는 인물관계도",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}

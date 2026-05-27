import Footer from "../_components/ui/footer";
import Header from "../_components/ui/header";
import { cormorant, outfit } from "../font";
const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
    <html lang="pt-br">
      <body
        id="top"
        className={`${cormorant.variable} ${outfit.variable} font-body`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
 
export default PublicLayout;
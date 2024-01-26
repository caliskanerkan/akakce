import { Document } from "~/common/components/document/Document";
import Content from "~/common/components/layout/Content";
import Footer from "~/common/components/layout/Footer";
import Header from "~/common/components/layout/Header";
import { ComponentType } from "~/common/model/ComponentType";

export const Layout = ({ children }: ComponentType) => {
  return (
    <Document>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Document>
  );
};

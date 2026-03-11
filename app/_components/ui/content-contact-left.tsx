import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbLink,
  BreadcrumbItem,
} from "./breadcrumb";
import { FormsContact } from "./forms-contact";
import TextTitle from "./text-title";

const ContentContactLeft = () => {
  return (
    <div className="w-full p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Início</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Fale Conosco</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <TextTitle title="Envie sua" subtitle="mensagem" br />
        <p className="max-w-lg text-sm text-gray-500 font-body">
          Preencha o formulário abaixo e um de nossos consultores entrará em
          contato o mais rápido possível.
        </p>
      </div>

      <FormsContact />
    </div>
  );
};

export default ContentContactLeft;

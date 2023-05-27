import { GlobalConfig } from "payload/types";

const GeneralInformation: GlobalConfig = {
  slug: "general-information",
  label: "Informações Gerais",
  fields: [
    {
      name: "companyName",
      label: "Nome da Companhia",
      type: "text",
      required: true,
    },
    {
      name: "firstPhoneNumber",
      label: "Número de telefone",
      type: "text",
      required: true,
    },
    {
      name: "secondPhoneNumber",
      label: "Segundo número de telefone",
      type: "text",
      required: false,
    },
  ],
  access: {
    read: (): boolean => true,
  },
};

export default GeneralInformation;

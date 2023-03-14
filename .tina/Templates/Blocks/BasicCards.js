import header from "./_template/header";

const BasicCards = {
  name: "basicCards",
  label: "Standart Karten",
  fields: [
    ...header,
    {
      name: "cards",
      label: "Karten",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.name }),
      },
      fields: [
        {
          name: "name",
          label: "Name",
          type: "string",
        },
        {
          name: "icon",
          label: "Icon",
          type: "image",
        },
      ],
    },
  ],
};

export default BasicCards;

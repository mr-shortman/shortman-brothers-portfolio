const OffsetCards = {
  name: "offsetCards",
  label: "Versetzte Karten",
  fields: [
    {
      name: "label",
      label: "Label",
      type: "string",
    },
    {
      name: "heading",
      label: "Überschrift",
      type: "string",
    },
    {
      name: "cards",
      label: "Karten",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.title }),
      },
      fields: [
        {
          name: "label",
          label: "Label",
          type: "string",
        },
        {
          name: "title",
          label: "Titel",
          type: "string",
        },
        {
          name: "text",
          label: "Text",
          type: "string",
          component: "textarea",
        },
        {
          name: "image",
          label: "Bild",
          type: "image",
        },
      ],
    },
  ],
};

export default OffsetCards;

import header from "./_template/header";

const Timeline = {
  name: "timeline",
  label: "Timeline",
  fields: [
    ...header,
    {
      name: "timeline",
      label: "Zeitleiste",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.title }),
      },
      fields: [
        {
          name: "title",
          label: "Titel",
          type: "string",
        },
        {
          name: "label",
          label: "Label",
          type: "string",
        },
        {
          name: "image",
          label: "Bild",
          type: "image",
        },
        {
          name: "text",
          label: "Text",
          type: "string",
          component: "textarea",
        },
      ],
    },
  ],
};

export default Timeline;

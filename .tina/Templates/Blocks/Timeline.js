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
          label: "Datum",
          name: "date",
          type: "datetime",
        },
        {
          name: "icon",
          label: "Icon",
          type: "image",
        },
        {
          name: "iconBg",
          label: "Icon Hintergrund",
          type: "string",
          component: "color",
        },
        {
          name: "points",
          label: "Punkte",
          type: "string",
          list: true,
        },
      ],
    },
  ],
};

export default Timeline;

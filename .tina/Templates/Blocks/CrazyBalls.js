const CrazyBalls = {
  name: "crazyBalls",
  label: "Crazy Bälle",
  fields: [
    {
      name: "balls",
      label: "Bälle",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.tooltip }),
      },
      fields: [
        {
          name: "tooltip",
          label: "Tooltip",
          type: "string",
        },
        {
          name: "icon",
          label: "Icon",
          type: "image",
        },
        {
          name: "color",
          label: "Farbe",
          type: "string",
          component: "color",
        },
      ],
    },
  ],
};

export default CrazyBalls;

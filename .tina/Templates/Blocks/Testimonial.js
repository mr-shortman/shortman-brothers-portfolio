const Testimonial = {
  name: "testimonial",
  label: "Testimonial",
  fields: [
    {
      name: "label",
      label: "Label",
      type: "string",
    },
    {
      name: "header",
      label: "Überschrift",
      type: "string",
    },
    {
      name: "testimonials",
      label: "Testimonials",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.author }),
      },
      fields: [
        {
          name: "text",
          label: "Text",
          type: "string",
          component: "textarea",
        },
        {
          name: "author",
          label: "Author",
          type: "string",
        },
        {
          name: "subtitle",
          label: "Untertitel",
          type: "string",
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

export default Testimonial;

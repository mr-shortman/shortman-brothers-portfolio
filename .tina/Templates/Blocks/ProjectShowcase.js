import header from "./_template/header";

const ProjectShowcase = {
  name: "projectShowcase",
  label: "Projekt Präsentation",
  fields: [
    ...header,
    {
      name: "projects",
      label: "Projekte",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item.name,
        }),
      },
      fields: [
        {
          name: "name",
          label: "Name",
          type: "string",
        },
        {
          name: "description",
          label: "Beschreiben",
          type: "string",
          component: "textarea",
        },
        {
          name: "image",
          label: "Bild",
          type: "image",
        },
        {
          name: "links",
          label: "Links",
          type: "object",
          fields: [
            {
              name: "github",
              label: "GitHub",
              type: "string",
            },
            {
              name: "live",
              label: "Live",
              type: "string",
            },
          ],
        },
        {
          name: "tags",
          label: "Tags",
          type: "string",
          list: true,
        },
      ],
    },
  ],
};

export default ProjectShowcase;

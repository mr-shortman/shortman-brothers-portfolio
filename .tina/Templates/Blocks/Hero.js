const Hero = {
  name: "hero",
  label: "Hero Sektion",
  fields: [
    {
      name: "title",
      label: "Titel",
      type: "string",
    },
    {
      name: "clrTitle",
      label: "Farbtitel",
      type: "string",
    },
    {
      name: "description",
      label: "Beschreibung",
      type: "string",
    },
    {
      name: "splineScene",
      label: "Spline 3d",
      description: "gültige URL zu einer Spline Szene.",
      type: "string",
    },
    {
      name: "scrollCTA",
      label: "Scroll Button 'ID'",
      description: "Section ID Scroll Button",
      type: "string",
    },
    {
      name: "background",
      label: "Hintergrundbild",
      type: "image",
    },
  ],
};

export default Hero;

import { defineConfig, defineSchema } from "tinacms";
import {
  BasicCards,
  Hero,
  Timeline,
  CrazyBalls,
  ProjectShowcase,
  Testimonial,
  Contact,
} from "./Templates/Blocks";

const schema = defineSchema({
  collections: [
    {
      label: "Page Content",
      name: "page",
      path: "content/page",
      format: "mdx",
      fields: [
        {
          name: "pageTitle",
          label: "Seiten Titel (SEO)",
          type: "string",
        },
        {
          name: "pageDescription",
          label: "Seiten Beschreibung (SEO)",
          type: "string",
        },
        {
          name: "sectionBlocks",
          label: "Sektionen",
          type: "object",
          list: true,
          templates: [
            BasicCards,
            Hero,
            Timeline,
            CrazyBalls,
            ProjectShowcase,
            Testimonial,
            Contact,
          ],
        },
      ],
      ui: {
        router: ({ document }) => {
          if (document._sys.filename === "home") {
            return `/`;
          }
          return undefined;
        },
      },
    },
    {
      label: "Blog Posts",
      name: "post",
      path: "content/post",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Blog Post Body",
          name: "body",
          isBody: true,
          ui: {
            component: "textarea",
          },
        },
      ],
      ui: {
        router: ({ document }) => {
          return `/posts/${document._sys.filename}`;
        },
      },
    },
  ],
});

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD, // Netlify branch env
  token: process.env.TINA_TOKEN,
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema,
});

export default config;

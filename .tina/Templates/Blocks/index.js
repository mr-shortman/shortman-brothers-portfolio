import _BasicCards from "./BasicCards";
import _Hero from "./Hero";
import _Timeline from "./Timeline";
import _CrazyBalls from "./CrazyBalls";
import _ProjectShowcase from "./ProjectShowcase";
import _Testimonial from "./Testimonial";
import _Contact from "./Contact";

const addId = (obj) => {
  obj.fields.push({ name: "id", label: "Id", type: "string" });
  return obj;
};

const Hero = addId(_Hero);
const BasicCards = addId(_BasicCards);
const Timeline = addId(_Timeline);
const CrazyBalls = addId(_CrazyBalls);
const ProjectShowcase = addId(_ProjectShowcase);
const Testimonial = addId(_Testimonial);
const Contact = addId(_Contact);

export {
  Hero,
  BasicCards,
  Timeline,
  CrazyBalls,
  ProjectShowcase,
  Testimonial,
  Contact,
};

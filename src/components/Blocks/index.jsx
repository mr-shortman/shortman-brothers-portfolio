import React from "react";
import { DynamicSectionWrapper } from "../../hoc";
import {
  BasicCards,
  CrazyBalls,
  Hero,
  Timeline,
  ProjectShowcase,
  Testimonials,
  Contact,
  OffsetCards,
} from "./components";

function SectionBlocks(props) {
  //   if (!blocks) return <div>Keine Sektionen</div>;
  return (
    <>
      <div className="flex flex-col ">
        {props.blocks
          ? props.blocks.map(function (block, i) {
              const _id = block?.id ? block.id : "";
              switch (block.__typename) {
                case "PageSectionBlocksHero":
                  return (
                    <React.Fragment key={i + block.__typename}>
                      <Hero data={block} />
                    </React.Fragment>
                  );
                case "PageSectionBlocksOffsetCards":
                  return (
                    <React.Fragment key={i + block.__typename}>
                      <DynamicSectionWrapper id={_id}>
                        <OffsetCards data={block} />
                      </DynamicSectionWrapper>
                    </React.Fragment>
                  );
                case "PageSectionBlocksBasicCards":
                  return (
                    <React.Fragment key={i + block.__typename}>
                      <DynamicSectionWrapper id={_id}>
                        <BasicCards data={block} />
                      </DynamicSectionWrapper>
                    </React.Fragment>
                  );
                case "PageSectionBlocksTimeline":
                  return (
                    <React.Fragment key={i + block.__typename}>
                      <DynamicSectionWrapper id={_id}>
                        <Timeline data={block} />
                      </DynamicSectionWrapper>
                    </React.Fragment>
                  );
                case "PageSectionBlocksCrazyBalls":
                  return (
                    <React.Fragment key={i + block.__typename}>
                      <DynamicSectionWrapper id={_id}>
                        <CrazyBalls data={block} />
                      </DynamicSectionWrapper>
                    </React.Fragment>
                  );
                case "PageSectionBlocksProjectShowcase":
                  return (
                    <React.Fragment key={i + block.__typename}>
                      <DynamicSectionWrapper id={_id}>
                        <ProjectShowcase data={block} />
                      </DynamicSectionWrapper>
                    </React.Fragment>
                  );
                case "PageSectionBlocksTestimonial":
                  return (
                    <React.Fragment key={i + block.__typename}>
                      <DynamicSectionWrapper id={_id}>
                        <Testimonials data={block} />
                      </DynamicSectionWrapper>
                    </React.Fragment>
                  );
                case "PageSectionBlocksContact":
                  return (
                    <React.Fragment key={i + block.__typename}>
                      <DynamicSectionWrapper id={_id}>
                        <Contact data={block} />
                      </DynamicSectionWrapper>
                    </React.Fragment>
                  );
                default:
                  return null;
              }
            })
          : null}
      </div>
    </>
  );
}

export default SectionBlocks;

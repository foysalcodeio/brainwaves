import { smallSphere, stars } from "../assets";
import Section from "./design/Section";
import Heading from "./Heading";


const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="lg:flex justify-center mb-[6.5rem] hidden relative">
          <img src={smallSphere} className="relative z-1" height={255} width={255} alt="Sphere" />

          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars" />
          </div>
        </div>
        <Heading
          tag="get started with Nuerowave"
          title="Pay once, use anytime"
        />

        <div className="">
            <h1>hello</h1>
        </div>


      </div>
    </Section>
  );
};

export default Pricing;
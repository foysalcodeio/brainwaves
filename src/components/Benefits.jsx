import { benefits } from "../constants";
import Section from "./design/Section";
import Heading from "./Heading";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading className="" title="Chat Smarter, Not Harder with Neurowave" />


        <div className="flex flex-wrap mb-10 gap-10 ">
          {benefits.map((item) => (
            <div key={item.id}>
              <div
                className="block relative p-0.5 md:max-w-[24rem] bg-no-repeat pointer-events-none"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
                key={item.id}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex item-center mt-auto">
                    <img src={item.iconUrl} width={48} height={48} alt={item.title} />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">Explore More</p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
};

export default Benefits;
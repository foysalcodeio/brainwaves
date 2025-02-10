import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Section from "./design/Section";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className=" max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">AI Chat App for seamless Collaboration</h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-5">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button className="md:mt-4">Try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-5 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <div className="w-[22rem] border aspect-square border-n-6 rounded-full flex left-1/2 -translate-x-1/2 scale-75 md:scale-100 relative">
            <div className="flex w-60 border aspect-square m-auto border-n-6 rounded-full">
              <div className="w-[6rem] m-auto aspect-square p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center h-full w-full bg-n-8 rounded-full">
                <span class="animate-ping absolute inline-flex h-[5rem] w-[5rem] rounded-full bg-cyan-400 opacity-50"></span>
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave" />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className="top-0 left-1/2 h-1/2 absolute -ml-[1.6rem] origin-bottom "
                  style={{ transform: `rotate(${index * 45}deg)` }}
                >
                  <div
                    className="w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 flex relative -top-[1.6rem] rounded-xl"
                    style={{ transform: `rotate(${-index * 45}deg)` }}
                  >
                    <img className="m-auto" width={app.width} height={app.height} src={app.icon} alt={app.title} />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
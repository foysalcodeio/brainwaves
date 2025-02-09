import { check } from "../assets";
import { collabContent } from "../constants";
import Section from "./design/Section";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container border lg:flex">
          <div className="border max-w-25rem">
              <h2 className="h2 mb-4 md:mb-8">AI Chat App for seamless Collaboration</h2>
              <ul className="max-w-[22rem] mb-10 md:mb-14">
                {collabContent.map((item) => (
                  <li key={item.id}>
                    <div>
                      <img src={check} width={24} height={24} alt="" />
                    </div>
                  </li>
                ))}
              </ul>
          </div>
      </div>
    </Section>
  );
};

export default Collaboration;
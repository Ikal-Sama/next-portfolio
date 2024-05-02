import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Skills = () => {
  return (
    <section className="mt-20  container" id="skills">
      <div className="">
        <div className="flex items-center  gap-2">
          <div className="dot"></div>
          <h1 className="text-3xl font-bold">Skills</h1>
        </div>
        <p className="text-lg text-zinc-500">
          Throughout my web development career, I've honed my skills in
        </p>
        <div className="flex lg:flex-row flex-col space-y-5 lg:space-ys-0 lg:space-x-10 mt-10">
          <div className="w-full lg:w-1/2 shadow-lg p-3 rounded">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>HTML</AccordionTrigger>
                <AccordionContent>
                  I have 4 years of experience using HTML
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>CSS</AccordionTrigger>
                <AccordionContent>
                  I have 4 years of experience using CSS
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>JavaScript</AccordionTrigger>
                <AccordionContent>
                  I have 4 years of experience using JS but i'm still learning
                  in this language
                </AccordionContent>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Figma</AccordionTrigger>
                  <AccordionContent>
                    I have 4 years of experience using Figma as a design tools
                    for Web Design.
                  </AccordionContent>
                </AccordionItem>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-full lg:w-1/2 bg-primary text-white p-3 rounded">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>ReactJs</AccordionTrigger>
                <AccordionContent>
                  I have 2 years of experience using ReactJs i like this
                  framework beacuse of how versatile i can use the components ,
                  I'm still learning in this language
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>NextJs</AccordionTrigger>
                <AccordionContent>
                  This framework of react is the one i'm really want to learn
                  more
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>TailwindCss</AccordionTrigger>
                <AccordionContent>
                  I have 2 years of experience using this, but i'm still
                  learning.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

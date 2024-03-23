import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="mt-20   bg-primary text-white" id="contact">
      <div className="px-7 lg:px-14 py-8">
        <div className="flex gap-2 items-center">
          <div className="dot bg-white"></div>
          <h1 className="text-2xl font-bold">Contact Me</h1>
        </div>

        <div className="mt-5">
          <form action="https://getform.io/f/ebpdmgqb" method="POST">
            <div className="flex lg:flex-row flex-col gap-5  ">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-[17rem] lg:w-full p-4 bg-transparent border border-gray-200 rounded outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-[17rem] lg:w-full p-4 bg-transparent border border-gray-200 rounded outline-none"
              />
            </div>
            <div className=" mt-5">
              <textarea
                name="message"
                placeholder="Enter your message here..."
                className="w-[17rem] lg:w-full p-4 bg-transparent border border-gray-200 rounded outline-none resize-none min-h-[150px]"
              />
            </div>
            <Button
              type="submit"
              variant="outline"
              className="text-black rounded px-10 py-5 font-semibold hover:bg-transparent hover:text-white mt-5"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

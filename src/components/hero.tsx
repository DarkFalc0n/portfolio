import LinkText from "./linktext";

const Hero = () => {
  return (
    <div className="w-screen h-screen text-white select-none">
      <div className="h-screen max-w-[177.8vh] mx-auto flex flex-col justify-start pt-[12.34vh] px-[4vh]">
        <div className="mb-[2vh] flex justify-between">
          <div>pratyay.dev</div>
          <div className="text-right">
            Frontend web design <br />
            Scalable web apps
            <br />
            WebGL experiences
          </div>
        </div>
        <div className="flex justify-between">
          <div className="font-black text-[18.75vh] leading-[0.78125]">
            <div className="my-10 translate-x-[-1vh]">LET'S</div>
            <div className="my-10 translate-x-[-1vh]">BUILD</div>
            <div className="my-10 translate-x-[-0.5vh]">TOGETHER</div>
          </div>
          <div className="h-full flex flex-col justify-end">
            <LinkText>Have an idea? Let's Talk.</LinkText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

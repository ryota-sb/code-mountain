import { Typewriter } from "react-simple-typewriter";

const TypingAnimation: React.FC = () => {
  const words = ["Next.js", "TypeScript", "React Hook Form", "NodeMailer"];

  return (
    <>
      <section
        className="flex flex-col items-center justify-center"
        style={{ height: `calc(100dvh - 92px)` }}
      >
        <h1 className="mb-2 text-5xl md:text-7xl">
          Welcome to&ensp;
          <br className="md:hidden" />
          Alpine Code.
        </h1>
        <div className="flex text-2xl">
          <h2>
            My site uses
            <span className="ml-2 font-bold text-[#00bfff]">
              <Typewriter
                words={words}
                loop
                cursor
                cursorColor="white"
                typeSpeed={80}
                deleteSpeed={50}
              />
            </span>
          </h2>
        </div>
      </section>
    </>
  );
};

export default TypingAnimation;

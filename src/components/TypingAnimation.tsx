import { Typewriter } from "react-simple-typewriter";

const TypingAnimation: React.FC = () => {
  const words = ["Next.js", "TypeScript", "React Hook Form", "NodeMailer"];

  return (
    <>
      <section
        className="flex min-h-screen flex-col items-center justify-center"
        style={{ height: "100dvh" }}
      >
        <h1 className="text-2xl">Welcome to Code Mountain.</h1>
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

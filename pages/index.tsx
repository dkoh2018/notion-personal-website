import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styled from "styled-components";
import {
  fontSize,
  fontWeight,
  color,
  textAlign,
  margin,
  compose,
} from "styled-system";

const Title = styled.h1`
  margin: 10px 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  ${compose(fontSize, fontWeight, color, textAlign, margin)}
`;

const SubTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
`;

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 bg-gray-100">
        <div className="text-center max-w-2xl">
          <div className="rounded-full overflow-hidden w-40 h-40 mx-auto border-4 border-gray-300">
            {/* <Image
              src="/profile.jpg"
              alt="David Oh"
              width={160}
              height={160}
              className="object-cover"
            /> */}
          </div>
          <Title>Chan Oh</Title>
          <p className="text-xl text-gray-600 mt-2">
            Options Trader → Programmer
          </p>
          <p className="mt-4 text-gray-700">
            I'm a Learner. 7+ Years Options Trading, 6+ Years
            Entrepreneurship in Chicago, now Transitioning into Tech.
          </p>
          <button className="mt-6 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            More about me →
          </button>
        </div>
      </section>
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 bg-white">
        <div className="text-center max-w-2xl">
          <SubTitle>Get in touch</SubTitle>
          <p className="mt-2 text-gray-700">
            I'm actively looking for job opportunities, so my inbox
            is open for you. Feel free to ask me anything!
          </p>
          <div className="mt-6 space-x-4">
            <button className="px-4 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition">
              👋 Say hello
            </button>
            <button className="px-4 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition">
              Schedule a meeting
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

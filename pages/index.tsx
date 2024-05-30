import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import SubTitle from "@/components/SubTitle";
import SubTitle2 from "@/components/SubTitle2";
import Button from "@/components/Button";
import HomeDescription from "@/components/HomeDescription";

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
          <Title>David Oh</Title>
          <SubTitle2>Options Trader → Programmer</SubTitle2>
          <HomeDescription>
            7+ Years Event Driven Options Trading + Entrepreneurship
            in Chicago, now building innovative tech solutions.
          </HomeDescription>
          <Button>More about me →</Button>
        </div>
      </section>
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 bg-white">
        <div className="text-center max-w-2xl">
          <SubTitle>Get in touch</SubTitle>
          <HomeDescription>
            I'm actively looking for job opportunities, so my inbox
            is open for you. Feel free to ask me anything!
          </HomeDescription>
          <div className="mt-6 space-x-4">
            <Button href="mailto:davidoh@gmail.com">
              👋 Say hello
            </Button>
            <Button>Schedule a meeting</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

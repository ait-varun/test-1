import OrangeButton from "./common/orangeButton";
import { PlayCircleIcon } from "lucide-react";

export default function WhyUs() {
  return (
    <>
      <section className="relative">
        <div className="whyChooseUs text-black">
          <div className="pl-6 md:pl-16 flex flex-col justify-center gap-6 w-full pe-6 z-20">
            <h2 className="text-4xl font-extrabold beton-font">
              WHY CHOOSE US?
            </h2>
            <p className="font-bold md:w-[70%]">
              Why waste time and energy making Bacon in the traditional way when
              you can simply use the Bacon Wizard to cook it within a few
              minutes in the Microwave!
            </p>
            <p className="font-bold md:w-[70%]">
              Fat drips away from the bacon for less fat and healthier, crispier
              bacon every time! Cooks Up to a Full pound of bacon at a time.
              Bacon is cooked evenly and perfectly.
            </p>
            <div className="flex items-center gap-12">
              <OrangeButton text="read more" />
              <div className="flex gap-4 items-center">
                <span className="font-bold text-base">WATCH VIDEO</span>
                <PlayCircleIcon className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute top-0 md:top-32 right-0  flex-col gap-2 md:gap-6 text-white z-10">
          <span className="bg-[#f47c27] rounded-l-full py-6 px-14 font-bold text-2xl">
            40% LESS FAT
          </span>
          <span className="bg-[#f47c27] rounded-l-full py-6 px-14 font-bold text-2xl">
            PERFECT SIZE
          </span>
          <span className="bg-[#f47c27] rounded-l-full py-6 px-14 font-bold text-2xl">
            EASY CLEAN UP
          </span>
        </div>
      </section>
    </>
  );
}

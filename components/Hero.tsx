import { Suspense } from "react";

function HeroImageSkeleton() {
  return (
    <div className="relative">
      <div className="w-[400px] h-[500px] bg-white/10 rounded-3xl animate-pulse"></div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative flex justify-center lg:justify-end ">
      <img
        src="images/indian_girl.png"
        alt="Professional AI model selection platform"
        className="object-cover w-full max-w-[300px] lg:max-w-[400px] h-[400px] lg:h-[500px]"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full pt-16 min-h-[70vh] bg-[#0b1021] overflow-hidden">
      {/* content */}
      <div className="relative z-10 flex items-center min-h-[calc(70vh-64px)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text */}
            <div className="text-center lg:text-left space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 leading-tight">
                  Welcome to
                </h1>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  ESCORT SERVICE
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white/80 mt-2">
                  PLATFORM
                </h2>
              </div>

              <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Browse our curated selection of
                <span className="mx-1 font-semibold text-white">
                  Escort girls
                </span>
                and
                <span className="mx-1 font-semibold text-white">
                  super good looking girls
                </span>
                to meet your expectations.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <Suspense fallback={<HeroImageSkeleton />}>
                <HeroImage />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

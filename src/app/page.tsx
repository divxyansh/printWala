import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from 'lucide-react';
import Phone from "@/components/Phone";
import { Icons } from "@/components/icons";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-52 -top-20 hidden lg:block">
                <img src="/logo.png" className="w-full" alt="snake illustration" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a <span className="bg-green-600 px-2 text-white">Custom</span> Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own, <span className="font-semibold">one-of-one</span> phone case. PrintWala allows you to protect your memories, not just your phone.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    5-year print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-1.png" alt="user 1" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-2.png" alt="user 2" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-3.png" alt="user 3" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-4.png" alt="user 4" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" src="/users/user-5.png" alt="user 5" />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>
                  <p><span className="font-semibold">1.250</span> happy customers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-7xl">
              <img src="/your-image.png" className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"/>
              <img src="/line.png" className="absolute w-20 -left-6 -bottom-6 select-none"/>
              <Phone className="w-64" imgSrc="/testimonials/1.jpg"/>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value preposition section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">What our<span className="relative px-2">customers<Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500"/></span>say{''}</h2>
            <img src="/icon-1.png" alt="" className="w-40 order-0 lg:order-2 -pr-50"/>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
              </div>
              <div className="text-lg leading-8">
                <p>
                  "The case feels durable and I even got a compliment on the design. Had the case for two and half months now and <span className="p-0.5 bg-slate-800 text-white">the image is super clear</span>, on the case I had before, the image started fading into yellow-ish color after a couple weeks. Love it"
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img src="/users/user-1.png" alt="user" className="rounded-full h-12 w-12 object-cover " />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600 ">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600"/>
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* second user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
                <Star className="h-5 w-5 text-green-600 fill-green-600"/>
              </div>
              <div className="text-lg leading-8">
                <p>
                  "I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratches on all my last phone case. This one, besides a barely noticeable search on the corner,{''}<span className="p-0.5 bg-slate-800 text-white">looks brand new after about half a year</span>. I dig it."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img src="/users/user-4.png" alt="user" className="rounded-full h-12 w-12 object-cover " />
                <div className="flex flex-col">
                  <p className="font-semibold">Harry</p>
                  <div className="flex gap-1.5 items-center text-zinc-600 ">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600"/>
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews/>
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-6">
            <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">Upload your photo and get{' '}<span className="relative px-2 bg-green-600 text-white">your own case</span>now{''}</h2>
            </div>
          </div>

          <div className=""></div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

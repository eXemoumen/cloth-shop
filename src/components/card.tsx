
import { useSnapshot } from "valtio";
import state from "@/app/store"; 

export function Card() {
  const snap = useSnapshot(state); 
  return (
    <section className="w-screen flex justify-center py-12 md:py-24">
      <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-3 md:gap-8">
        <div className="flex flex-col items-center gap-4 rounded-lg bg-[#EFBD48] p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl ">
          <ShirtIcon className="h-12 w-12 text-gray-900 " />
          <h3 className="text-xl font-bold">Printing on T-shirts</h3>
          <p className="text-center text-xl">
            Customize your apparel with our high-quality printing services.
            Choose from a variety of designs and materials.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 rounded-lg bg-[#EFBD48] p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
          <TruckIcon className="h-12 w-12  " />
          <h3 className="text-xl font-bold">Fast Delivery</h3>
          <p className="text-center text-xl">
            Get your orders shipped quickly and efficiently. We offer same-day
            and next-day delivery options.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 rounded-lg bg-[#EFBD48] p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
          <DiamondIcon className="h-12 w-12 text-gray-900 " />
          <h3 className="text-xl font-bold">High Quality</h3>
          <p className="text-center text-xl">
            Our products are made with the finest materials and crafted with
            meticulous attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
}

function DiamondIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </svg>
  )
}


function ShirtIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}


function TruckIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}

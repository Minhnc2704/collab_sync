// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Hero from "./_components/Hero";
// import Header from "./_components/Header";
// import Footer from "./_components/Footer";

// export default function Home() {
//   return (
//     <div>
//       <Header />
//       <Hero />
//       <Footer />
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

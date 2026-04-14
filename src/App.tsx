/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import WhatYouReceive from "./components/WhatYouReceive";
import WhyChoose from "./components/WhyChoose";
import Bonus from "./components/Bonus";
import Offer from "./components/Offer";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Guarantee from "./components/Guarantee";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <WhatYouReceive />
        <WhyChoose />
        <Bonus />
        <Offer />
        <Testimonials />
        <FAQ />
        <Guarantee />
      </main>
      <Footer />
    </div>
  );
}

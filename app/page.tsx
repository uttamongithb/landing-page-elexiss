"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LongLandingWithGSAP() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);
  const demoCtaRef = useRef<HTMLAnchorElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const mockRef = useRef<HTMLDivElement | null>(null);

  // sections refs for staggered reveal
  const featureRefs = useRef<HTMLDivElement[]>([]);
  const problemRefs = useRef<HTMLLIElement[]>([]);
  const industryRefs = useRef<HTMLDivElement[]>([]);
  const testimonialRefs = useRef<HTMLDivElement[]>([]);

  const setRef = (refArray: React.MutableRefObject<any[]>, el: HTMLElement | null) => {
    if (!el) return;
    if (!refArray.current.includes(el)) refArray.current.push(el);
  };

  useEffect(() => {
    // reduce motion on small devices
    const disableAnimations = window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 640;

    const ctx = gsap.context(() => {
      if (!disableAnimations) {
        // Hero entrance
        const tl = gsap.timeline();
        tl.from(badgeRef.current, { y: -40, opacity: 0, duration: 0.6, ease: "power2.out" })
          .from(headlineRef.current?.querySelectorAll('.hero-line'), {
            y: -60,
            opacity: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: "power3.out"
          }, "-=0.2")
          .from(heroRef.current?.querySelector('p'), {
            y: -40,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out"
          }, "-=0.3")
          .from([ctaRef.current, demoCtaRef.current], {
            y: 40,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out"
          })
          
          .from(cardRefs.current, {
            y: -20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "power3.out"
          }, "-=0.4");

        // Parallax mock
        gsap.to(mockRef.current, {
          y: -80,
          rotation: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current || undefined,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // Feature cards reveal on scroll
        featureRefs.current.forEach((el) => {
          gsap.from(el, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          });
        });

        // Problem bullets stagger
        problemRefs.current.forEach((el, i) => {
          gsap.from(el, {
            x: -20,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.08,
            scrollTrigger: { trigger: el, start: "top 90%" },
          });
        });

        // Industry cards
        industryRefs.current.forEach((el) => {
          gsap.from(el, {
            scale: 0.98,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          });
        });

        // Testimonials stagger
        gsap.from(testimonialRefs.current, {
          y: 20,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: testimonialRefs.current[0], start: "top 85%" },
        });

        // CTA entrance animation (down → up)
        gsap.from(ctaRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out"
        });
        gsap.from(demoCtaRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.1
        });

        // Remove blink + float only primary CTA
        
        
        
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full overflow-x-hidden font-sans">
      {/* HERO */}
      <section ref={heroRef} className="w-full bg-white text-center py-20 lg:py-28">
  <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text mb-4">
    India's modern retail POS
  </h4>

  <h1 ref={headlineRef} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0057e7] overflow-hidden">
    <span className="block hero-line">The most complete retail POS</span>
    <span className="block hero-line">designed to solve real problems.</span>
  </h1>

  <p className="max-w-3xl mx-auto mt-6 text-[#1a1a1a] text-lg leading-relaxed">
    We help retailers eliminate stockouts, speed up billing, simplify inventory, and increase profits. 
    A powerful POS that fixes everyday store challenges — all in one platform.
  </p>

  <div className="flex justify-center gap-4 mt-10">
    <a ref={ctaRef} href="#pricing" className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full px-6 py-3 shadow-md">
      GET STARTED FOR FREE
    </a>
    <a ref={demoCtaRef} href="#demo" className="border border-black rounded-full px-6 py-3 font-semibold text-black">
      GET A DEMO
    </a>
  </div>
</section>

      {/* PROBLEM SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20" id="problems">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-extrabold text-[#071025]">Retail challenges we solve</h2>
            <p className="mt-4 text-[#334155] max-w-xl">From inventory surprises to slow checkouts — retailers lose revenue every day. Here’s how we fix it.</p>

            <ul className="mt-8 space-y-4">
              {['Stockouts cost sales','Slow, error-prone checkout','Disconnected reporting','Manual reconciliations'].map((p, i) => (
                <li key={p} ref={(el)=>setRef(problemRefs, el)} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-md flex items-center justify-center font-semibold">{i+1}</div>
                  <div>
                    <div className="font-semibold text-[#0f172a]">{p}</div>
                    <div className="text-[#475569]">We reduce stockouts with reorder triggers, intelligent forecasting and easy supplier workflows.</div>
                  </div>
                </li>
              ))}
            </ul>

          </div>

          <div className="lg:col-span-6">
            <div className="w-full h-80 rounded-xl border border-gray-100 shadow-lg overflow-hidden">
  <img src="/dashboard.png" alt="Retail POS" className="w-full h-full object-cover" />
</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-[#f8fafc] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-extrabold text-[#0f172a]">Powerful features for retail teams</h3>
          <p className="text-[#64748b] mt-2 max-w-2xl">Everything you need to run stores — inventory, checkout, CRM, and analytics — in a single product.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title:'Inventory intelligence', desc:'Forecast demand, automate reorder and track batches.'},
              {title:'Fast checkout', desc:'Barcode scanning, split payments and receipts.'},
              {title:'Offline mode', desc:'Continue selling even without internet.'},
              {title:'Multi‑store', desc:'Centralized control across outlets.'},
              {title:'Reports & analytics', desc:'Actionable dashboards for your P&L.'},
              {title:'Integrations', desc:'Payments, accounting, e‑commerce.'}
            ].map((f, i) => (
              <div key={f.title} ref={(el)=>setRef(featureRefs, el)} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center font-bold text-indigo-600">{i+1}</div>
                <h4 className="mt-4 font-semibold text-[#0f172a]">{f.title}</h4>
                <p className="mt-2 text-[#64748b]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-extrabold text-[#071025]">Works for every kind of store</h3>
        <p className="text-[#64748b] mt-2 max-w-2xl">From single‑shop boutiques to grocery chains — here are use cases we frequently help.</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Apparel','Grocery','Pharmacy','Electronics','Home & Decor','Cafes'].map((g,i)=> (
            <div key={g} ref={(el)=>setRef(industryRefs, el)} className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-indigo-50 rounded-md flex items-center justify-center font-semibold text-indigo-600">{g[0]}</div>
              <div className="text-sm font-semibold">{g}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO / VISUAL WORKFLOW */}
      <section id="demo" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <h3 className="text-3xl font-extrabold text-[#071025]">See it in action</h3>
            <p className="mt-4 text-[#64748b] max-w-xl">A quick walkthrough of a sale — from scan to receipt to inventory update, all visible in seconds.</p>

            <ul className="mt-6 space-y-4 text-[#334155]">
              <li>• Scan item → add to cart</li>
              <li>• Split or card payments</li>
              <li>• Automated stock decrement and reorder hints</li>
            </ul>

            <div className="mt-8">
              <a href="#" className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full px-6 py-3">Request demo</a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full h-72 rounded-xl border border-gray-100 shadow-lg overflow-hidden">
  <img src="/dashboard.png" alt="Retail POS Demo" className="w-full h-full object-cover" />
</div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-[#f8fafc]">
        <h3 className="text-3xl font-extrabold text-[#071025]">What retailers say</h3>
        <p className="text-[#64748b] mt-2 max-w-2xl">Real stores, real results.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((n,i)=> (
            <div key={n} ref={(el)=>setRef(testimonialRefs, el)} className="bg-white rounded-2xl p-6 shadow">
              <div className="text-[#0f172a] font-semibold">Store {n}</div>
              <div className="text-[#64748b] mt-2">“Using this POS we cut stockouts by 40% and checkout time by half.”</div>
              <div className="mt-4 text-sm text-[#94a3b8]">— Retailer, City</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING / CTA */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-extrabold text-[#071025]">Simple pricing for stores of all sizes</h3>
          <p className="text-[#64748b] mt-2 max-w-2xl mx-auto">Start with a free trial — scale with add‑ons as you grow.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow">
              <div className="text-xl font-bold">Starter</div>
              <div className="mt-3 text-3xl font-extrabold">Free</div>
              <div className="mt-3 text-[#64748b]">Basic features for single shops</div>
              <a className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-full">Get started</a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow border-2 border-indigo-600">
              <div className="text-xl font-bold">Growth</div>
              <div className="mt-3 text-3xl font-extrabold">₹999/mo</div>
              <div className="mt-3 text-[#64748b]">For growing stores and multiple outlets</div>
              <a className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-full">Start trial</a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <div className="text-xl font-bold">Enterprise</div>
              <div className="mt-3 text-3xl font-extrabold">Custom</div>
              <div className="mt-3 text-[#64748b]">Tailored for retail chains</div>
              <a className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-full">Talk to sales</a>
            </div>
          </div>

          <div className="mt-10">
            <a href="#" className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full px-6 py-3">Start free trial</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <h3 className="text-2xl font-extrabold text-[#071025]">Frequently asked questions</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {q:'How long to onboard?', a:'You can onboard in under 30 minutes with our CSV importer.'},
            {q:'Does it work offline?', a:'Yes — sales continue offline and sync when online.'},
            {q:'Payments supported?', a:'We support most card payments and UPI integrations.'},
            {q:'Migration help?', a:'Yes — free migration for the first 3 months.'}
          ].map((f)=> (
            <details key={f.q} className="p-4 border rounded-lg">
              <summary className="font-semibold cursor-pointer">{f.q}</summary>
              <p className="mt-2 text-[#64748b]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#061026] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-bold text-xl">RetailPOS</div>
            <div className="text-sm text-white/70 mt-2">Built for retailers • © {new Date().getFullYear()}</div>
          </div>

          <div className="flex gap-6 text-sm text-white/70">
            <a>Terms</a>
            <a>Privacy</a>
            <a>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

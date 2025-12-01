import React from "react";

export default function ContactUs() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: CONTACT FORM */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Get in touch</h2>
            <p className="text-gray-500 mb-8">We'd love to hear from you. Please fill out this form.</p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">First name</label>
                  <input className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00647F]" placeholder="First name" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Last name</label>
                  <input className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00647F]" placeholder="Last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input type="email" className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00647F]" placeholder="you@company.com" />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Phone number</label>
                <input type="tel" className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00647F]" placeholder="+62 812 3456 7890" />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Message</label>
                <textarea rows={5} className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00647F]" placeholder="Leave us a message..."></textarea>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600">
                <input type="checkbox" id="agree" className="w-4 h-4 rounded" />
                <label htmlFor="agree">You agree to our friendly privacy policy.</label>
              </div>

              <div>
                <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#00647F] to-[#0099b0] shadow-md hover:opacity-95 transition">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: CONTACT INFO */}
          <div className="pt-6 lg:pt-0">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">We'd love to hear from you</h3>
            <p className="text-gray-500 mb-6">Need something cleared up? Here are our most frequently asked questions.</p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#e0f6fb] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8L12 13L21 8" stroke="#FB923C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Email</p>
                  <p className="text-sm text-gray-500">Our friendly team is here to help.</p>
                  <a className="text-sm text-[#00647F] mt-1 inline-block" href="mailto:hi@agency.com">hi@agency.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#e0f6fb] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19 19 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.12 1.01.35 2 .68 2.94a2 2 0 0 1-.45 2.11L8.09 11.91a14 14 0 0 0 6 6l1.14-1.14a2 2 0 0 1 2.1-.45c.93.33 1.92.56 2.93.68A2 2 0 0 1 22 16.92z" stroke="#7C3AED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Phone</p>
                  <p className="text-sm text-gray-500">Mon–Fri from 8am to 5pm.</p>
                  <a className="text-sm text-[#00647F] mt-1 inline-block" href="tel:+15550000000">+1 (555) 000—0000</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#e0f6fb] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 11-9 11s-9-4-9-11a9 9 0 1 1 18 0z" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Office</p>
                  <p className="text-sm text-gray-500">Come say hello at our office HQ.</p>
                  <address className="not-italic text-sm text-[#00647F] mt-1">100 Smith Street<br/>Collingwood VIC 3066 AU</address>
                </div>
              </div>

              {/* Decorative image (user uploaded) */}
              <div className="mt-2">
                <img src="/mnt/data/e658a9a4-552c-47a3-aa64-b725856a0847.png" alt="contact illustration" className="w-full rounded-lg object-cover shadow-sm" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

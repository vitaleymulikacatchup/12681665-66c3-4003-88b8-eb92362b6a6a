"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = /* provided JSON array */;

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="Car Deals" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-green-100">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Find Your Dream Car"
            description="Explore a wide selection of luxury vehicles at unbeatable prices."
            imageSrc={assetMap.find(a => a.id === 'hero-car')?.url}
            buttons={[
              { text: "View All Cars", href: "products" },
              { text: "Contact Us", href: "contact" }
            ]}
            className="bg-green-100"
            titleClassName="text-green-900"
            descriptionClassName="text-green-800"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-green-100">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Quality Cars", description: "Every car is inspected and certified.", icon: CheckCircle },
              { title: "Best Prices", description: "Competitive pricing guaranteed.", icon: CheckCircle }
            ]}
            imageSrc={assetMap.find(a => a.id === 'hero-team')?.url}
            imagePosition="right"
            className="bg-green-100"
            bulletTitleClassName="text-green-900"
            bulletDescriptionClassName="text-green-800"
          />
        </div>
      </div>
      <div id="products" data-section="products" className="scroll-mt-24 bg-green-100">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              { id: "1", name: "Red Sports Car", price: "$75,000", imageSrc: assetMap.find(a => a.id === 'product1')?.url },
              { id: "2", name: "Black SUV", price: "$60,000", imageSrc: assetMap.find(a => a.id === 'product2')?.url },
              { id: "3", name: "White Vintage Car", price: "$85,000", imageSrc: assetMap.find(a => a.id === 'product3')?.url },
            ]}
            title="Explore Our Collection"
            className="bg-green-100"
            cardNameClassName="text-green-900"
            cardPriceClassName="text-green-800"
          />
        </div>
      </div>
      <div id="testimonials" data-section="testimonials" className="scroll-mt-24 bg-green-100">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            testimonials={[
              { id: "1", name: "John Doe", role: "Satisfied Customer", testimonial: "Amazing service and quality cars!", imageSrc: assetMap.find(a => a.id === 'testimonial1')?.url },
              { id: "2", name: "Jane Smith", role: "Happy Buyer", testimonial: "I found the perfect car at a great price!", imageSrc: assetMap.find(a => a.id === 'testimonial2')?.url }
            ]}
            title="Customer Reviews"
            className="bg-green-100"
            nameClassName="text-green-900"
            testimonialClassName="text-green-800"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-green-100">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenterForm
            title="Reach Out to Us"
            description="Have questions? We're here to help. Fill out the form and we'll get back to you soon."
            inputs={[
              { name: "name", type: "text", placeholder: "Your Name" },
              { name: "email", type: "email", placeholder: "Your Email" }
            ]}
            textarea={{ name: "message", placeholder: "Your Message" }}
            className="bg-green-100"
            titleClassName="text-green-900"
            descriptionClassName="text-green-800"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-green-300">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "About", items: [{ label: "Our Story", href: "about" }, { label: "Team", href: "team" }] },
              { title: "Help", items: [{ label: "FAQs", href: "faq" }, { label: "Contact", href: "contact" }] }
            ]}
            copyrightText="© 2025 Car Deals"
            className="bg-green-300"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
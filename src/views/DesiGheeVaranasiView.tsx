import React, { useEffect } from 'react';
import { PageRoute } from '../types';
interface DesiGheeVaranasiViewProps {
  onRouteChange: (route: PageRoute) => void;
}

export function DesiGheeVaranasiView({ onRouteChange }: DesiGheeVaranasiViewProps) {
      useEffect(() => {
    document.title = "Pure Desi Ghee in Varanasi | Rajput Dairy Since 1984";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Buy pure Cow Desi Ghee in Varanasi from Rajput Dairy. Serving since 1984 with traditional taste, premium quality and trusted dairy products."
      );
    }
        // FAQ Schema + Product Schema
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Product",
          "name": "Pure Cow Desi Ghee",
          "description": "Traditional pure Cow Desi Ghee from Rajput Dairy Varanasi, serving customers since 1984.",
          "brand": {
            "@type": "Brand",
            "name": "Rajput Dairy"
          },
          "category": "Desi Ghee",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Where can I buy pure Desi Ghee in Varanasi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can buy pure Desi Ghee from Rajput Dairy Varanasi with local delivery availability."
              }
            },
            {
              "@type": "Question",
              "name": "Since when is Rajput Dairy serving Varanasi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Rajput Dairy has been serving Varanasi since 1984 with quality dairy products."
              }
            },
            {
              "@type": "Question",
              "name": "Is Rajput Dairy Desi Ghee pure?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Rajput Dairy focuses on providing pure dairy products with hygienic preparation and quality checks."
              }
            }
          ]
        }
      ]
    };

   const script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(schema);
document.head.appendChild(script);

return () => {
  document.head.removeChild(script);
};
}, []);

return (
    <div className="min-h-screen bg-white text-[#222222]">

      {/* Hero Section */}
      <section className="py-16 px-6 text-center bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">

          <p className="text-[#F57C00] font-semibold mb-3">
            Rajput Dairy Varanasi | Serving Since 1984
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Pure Desi Ghee in Varanasi
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Experience authentic Cow Desi Ghee from Rajput Dairy Varanasi,
            prepared with premium quality milk using traditional methods and
            modern hygienic processes. Trusted by generations of families
            since 1984.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">

            <a
              href="https://wa.me/919807682217"
              className="px-6 py-3 bg-[#F57C00] text-white rounded-lg font-semibold"
            >
              Order on WhatsApp
            </a>

            <button
              onClick={() => onRouteChange('products')}
              className="px-6 py-3 border border-[#F57C00] text-[#F57C00] rounded-lg font-semibold"
            >
              View Products
            </button>

          </div>

        </div>
      </section>


      {/* Trust Section */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 text-center">

          <div>
            <h3 className="text-2xl font-bold text-[#F57C00]">
              40+
            </h3>
            <p>Years Legacy</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#F57C00]">
              100%
            </h3>
            <p>Pure Dairy</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#F57C00]">
              Daily
            </h3>
            <p>Fresh Production</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#F57C00]">
              Varanasi
            </h3>
            <p>Trusted Families</p>
          </div>

        </div>
      </section>


      {/* About Section */}
      <section className="py-16 px-6 bg-[#FAFAFA]">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Traditional Cow Desi Ghee from Rajput Dairy Varanasi
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Rajput Dairy has been serving pure and fresh dairy products in
            Varanasi since 1984. Our Cow Desi Ghee represents the perfect
            combination of traditional taste, authentic preparation and
            uncompromised quality.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Every batch is prepared with carefully selected milk and strict
            quality checks to maintain rich aroma, golden colour and the
            natural danedar texture that customers love.
          </p>

        </div>

      </section>


          {/* Why Choose Rajput Dairy Ghee */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Why Choose Rajput Dairy Desi Ghee in Varanasi?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Rajput Dairy Desi Ghee is prepared with a focus on purity,
            traditional taste and quality. For more than four decades,
            families across Varanasi have trusted us for authentic dairy
            products made with honesty and care.
          </p>


          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-xl bg-[#FFF8F0]">
              <h3 className="text-xl font-bold mb-3">
                Fresh Village Milk
              </h3>
              <p>
                We source fresh milk from trusted village suppliers to
                maintain natural taste and quality.
              </p>
            </div>


            <div className="p-6 rounded-xl bg-[#FFF8F0]">
              <h3 className="text-xl font-bold mb-3">
                Traditional Taste
              </h3>
              <p>
                Our ghee delivers authentic aroma, golden colour and
                traditional danedar texture.
              </p>
            </div>


            <div className="p-6 rounded-xl bg-[#FFF8F0]">
              <h3 className="text-xl font-bold mb-3">
                Strict Quality Checks
              </h3>
              <p>
                Every batch goes through quality testing before reaching
                our customers.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Preparation Process */}
      <section className="py-16 px-6 bg-[#FAFAFA]">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            How Rajput Dairy Prepares Pure Desi Ghee
          </h2>

          <div className="space-y-5 text-lg text-gray-700">

            <p>
              1. Fresh milk collection from trusted sources.
            </p>

            <p>
              2. Quality checking and purity testing of milk.
            </p>

            <p>
              3. Traditional preparation process to preserve authentic flavour.
            </p>

            <p>
              4. Careful packaging and hygienic storage.
            </p>

          </div>

        </div>

      </section>
            {/* Benefits Section */}
      <section className="py-16 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Benefits of Pure Desi Ghee from Rajput Dairy
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Pure Desi Ghee has been an important part of Indian kitchens for
            generations. Rajput Dairy prepares authentic ghee with natural
            taste, rich aroma and traditional quality standards.
          </p>


          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 bg-[#FFF8F0] rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                Rich Aroma & Traditional Taste
              </h3>
              <p>
                Our Desi Ghee offers a natural golden colour, pleasant aroma
                and authentic taste that reminds you of traditional homemade
                ghee.
              </p>
            </div>


            <div className="p-6 bg-[#FFF8F0] rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                Made from Quality Milk
              </h3>
              <p>
                We focus on selecting quality milk to maintain consistency,
                freshness and the natural goodness of our ghee.
              </p>
            </div>


            <div className="p-6 bg-[#FFF8F0] rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                Perfect for Daily Cooking
              </h3>
              <p>
                Ideal for traditional Indian cooking, sweets, festivals and
                everyday family meals.
              </p>
            </div>


            <div className="p-6 bg-[#FFF8F0] rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                Trusted Since 1984
              </h3>
              <p>
                For over four decades, Rajput Dairy has been serving families
                across Varanasi with pure dairy products.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Varanasi Trust Section */}
      <section className="py-16 px-6 bg-[#FAFAFA]">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Trusted Desi Ghee Shop in Varanasi Since 1984
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Rajput Dairy has become a trusted name for pure Desi Ghee in
            Varanasi. Located in Nirala Nagar, Shivpuram Colony, we serve
            customers who value quality, purity and authentic dairy taste.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            From daily household requirements to bulk orders for hotels,
            sweet shops and caterers, our focus remains the same — delivering
            fresh and reliable dairy products with honesty.
          </p>

        </div>

      </section>
            {/* Customer Trust Section */}
      <section className="py-16 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Why Families in Varanasi Trust Rajput Dairy?
          </h2>

          <div className="space-y-5 text-lg text-gray-700">

            <p>
              For more than 40 years, Rajput Dairy has been serving pure dairy
              products to families across Varanasi. Our commitment towards
              quality, hygiene and honest service has helped us earn the trust
              of generations.
            </p>

            <p>
              Whether it is Cow Desi Ghee for daily cooking, festive occasions
              or special family recipes, customers choose Rajput Dairy for its
              authentic taste and reliable quality.
            </p>

          </div>

        </div>

      </section>


      {/* FAQ Section */}
      <section className="py-16 px-6 bg-[#FAFAFA]">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions About Desi Ghee
          </h2>


          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-bold">
                Where can I buy pure Desi Ghee in Varanasi?
              </h3>
              <p className="mt-2 text-gray-700">
                You can buy authentic Desi Ghee from Rajput Dairy, Shivpuram
                Colony, Nirala Nagar, Varanasi. Home delivery is also
                available for local customers.
              </p>
            </div>


            <div>
              <h3 className="text-xl font-bold">
                Since when is Rajput Dairy serving Varanasi?
              </h3>
              <p className="mt-2 text-gray-700">
                Rajput Dairy has been serving Varanasi since 1984 with pure
                and fresh dairy products.
              </p>
            </div>


            <div>
              <h3 className="text-xl font-bold">
                Is Rajput Dairy Desi Ghee pure?
              </h3>
              <p className="mt-2 text-gray-700">
                Yes, our focus is on providing pure dairy products prepared
                with quality ingredients and hygienic processes.
              </p>
            </div>


            <div>
              <h3 className="text-xl font-bold">
                Do you provide Desi Ghee home delivery in Varanasi?
              </h3>
              <p className="mt-2 text-gray-700">
                Yes, Rajput Dairy provides local delivery services in Varanasi.
              </p>
            </div>


          </div>

        </div>

      </section>


      {/* Final CTA */}
      <section className="py-16 px-6 bg-[#F57C00] text-white text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold">
            Order Pure Desi Ghee from Rajput Dairy Varanasi
          </h2>

          <p className="mt-4 text-lg">
            Experience authentic taste trusted by families since 1984.
          </p>

          <a
            href="https://wa.me/919807682217"
            className="inline-block mt-8 px-8 py-3 bg-white text-[#F57C00] rounded-lg font-bold"
          >
            Order on WhatsApp
          </a>

        </div>

      </section>
      </div>
  );
}
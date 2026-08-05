import React, { useEffect } from "react";
import { PageRoute } from "../types";

interface PaneerVaranasiViewProps {
  onRouteChange: (route: PageRoute) => void;
}

export function PaneerVaranasiView({
  onRouteChange,
}: PaneerVaranasiViewProps) {
  useEffect(() => {
    document.title = "Fresh Paneer in Varanasi | Rajput Dairy Since 1984";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Buy fresh Paneer in Varanasi from Rajput Dairy. Serving since 1984 with hygienically prepared, premium quality paneer for homes, restaurants and sweet shops."
      );
    }

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Product",
"name": "Fresh Paneer",
"description":
  "Fresh hygienically prepared Paneer from Rajput Dairy Varanasi since 1984.",
"brand": {
  "@type": "Brand",
  "name": "Rajput Dairy",
},
"category": "Paneer",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Where can I buy fresh Paneer in Varanasi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "You can buy fresh Paneer from Rajput Dairy in Varanasi with home delivery available in selected areas.",
              },
            },
            {
              "@type": "Question",
              "name": "Is Rajput Dairy Paneer fresh?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Yes. Rajput Dairy prepares fresh Paneer daily using quality milk and hygienic production methods.",
              },
            },
            {
              "@type": "Question",
              "name": "Since when has Rajput Dairy been serving Varanasi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Rajput Dairy has been serving Varanasi since 1984 with trusted dairy products.",
              },
            },
            {
              "@type": "Question",
              "name": "Do you provide Paneer home delivery?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Yes. Home delivery is available in many areas of Varanasi.",
              },
            },
          ],
        },
      ],
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
            Fresh Paneer in Varanasi
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Experience fresh Paneer from Rajput Dairy Varanasi, prepared daily
            from quality milk using hygienic processes. Trusted by families,
            restaurants and sweet shops since 1984.
          </p>
                {/* Trust Section */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 text-center">

          <div>
            <h3 className="text-2xl font-bold text-[#F57C00]">40+</h3>
            <p>Years of Trust</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#F57C00]">100%</h3>
            <p>Fresh Paneer</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#F57C00]">Daily</h3>
            <p>Fresh Production</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#F57C00]">Varanasi</h3>
            <p>Trusted Families</p>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Fresh Paneer from Rajput Dairy Varanasi
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Rajput Dairy has been serving Varanasi since 1984 with fresh,
            hygienically prepared dairy products. Our paneer is made daily from
            quality milk to deliver a soft texture, rich taste and consistent
            freshness for homes, restaurants and sweet shops.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Every batch is prepared under strict quality standards to ensure
            freshness, purity and excellent taste in every bite.
          </p>

        </div>
      </section>
            {/* Why Choose Rajput Dairy Paneer */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Why Choose Rajput Dairy Paneer in Varanasi?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Rajput Dairy prepares fresh paneer every day using quality milk and
            hygienic production methods. For more than four decades, families,
            restaurants and sweet shops across Varanasi have trusted our dairy
            products for freshness, consistency and taste.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-xl bg-[#FFF8F0]">
              <h3 className="text-xl font-bold mb-3">
                Fresh Quality Milk
              </h3>
              <p>
                Our paneer is prepared using carefully selected fresh milk to
                maintain softness, freshness and rich taste.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#FFF8F0]">
              <h3 className="text-xl font-bold mb-3">
                Hygienically Prepared
              </h3>
              <p>
                Every batch is prepared under clean and hygienic conditions to
                ensure premium quality and food safety.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#FFF8F0]">
              <h3 className="text-xl font-bold mb-3">
                Trusted Since 1984
              </h3>
              <p>
                Rajput Dairy has earned the trust of thousands of families in
                Varanasi through consistent quality and honest service.
              </p>
            </div>

          </div>

        </div>
      </section>
            {/* Preparation Process */}
      <section className="py-16 px-6 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            How Rajput Dairy Prepares Fresh Paneer
          </h2>

          <div className="space-y-5 text-lg text-gray-700">

            <p>1. Fresh milk is collected daily from trusted suppliers.</p>

            <p>2. Every batch is quality checked before production.</p>

            <p>3. Paneer is prepared hygienically to maintain softness and freshness.</p>

            <p>4. It is carefully packed and stored to preserve quality until delivery.</p>

          </div>

        </div>
      </section>
      {/* Internal SEO Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Buy Fresh Paneer in Varanasi from Rajput Dairy
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            If you are looking for fresh paneer in Varanasi, Rajput Dairy is a
            trusted choice. We prepare paneer daily using quality milk and
            hygienic methods, making it suitable for homes, restaurants,
            caterers and sweet shops.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Looking for pure desi ghee as well? Explore our{" "}
            <a
              href="/desi-ghee-varanasi"
              className="text-[#F57C00] font-semibold hover:underline"
            >
              Pure Desi Ghee in Varanasi
            </a>{" "}
            page to discover another traditional product from Rajput Dairy.
          </p>

        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Benefits of Fresh Paneer from Rajput Dairy
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Fresh paneer is an essential ingredient in Indian kitchens. Rajput Dairy
            prepares fresh paneer every day using quality milk to deliver excellent
            taste, soft texture and reliable freshness.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 bg-[#FFF8F0] rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                Soft & Fresh
              </h3>
              <p>
                Freshly prepared every day with a soft texture that's perfect for
                home cooking and restaurants.
              </p>
            </div>

            <div className="p-6 bg-[#FFF8F0] rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                Made from Quality Milk
              </h3>
              <p>
                Prepared using carefully selected milk to ensure consistent taste,
                freshness and quality.
              </p>
            </div>

          </div>

        </div>
      </section>
                <div className="grid md:grid-cols-2 gap-6 mt-6">

            <div className="p-6 bg-[#FFF8F0] rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                Perfect for Every Dish
              </h3>
              <p>
                Ideal for paneer curry, tikka, bhurji, snacks, restaurant
                recipes and everyday family meals.
              </p>
            </div>

            <div className="p-6 bg-[#FFF8F0] rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                Trusted Since 1984
              </h3>
              <p>
                Rajput Dairy has been serving fresh dairy products to
                Varanasi families for more than four decades.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Varanasi Trust Section */}
      <section className="py-16 px-6 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Trusted Paneer Shop in Varanasi Since 1984
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Rajput Dairy is one of the trusted destinations for fresh paneer
            in Varanasi. Located in Shivpuram Colony, Nirala Nagar, we serve
            households, restaurants, hotels and sweet shops with fresh,
            hygienically prepared paneer every day.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Our focus has always been on freshness, purity, honest service and
            consistent quality, making us a preferred choice for dairy
            products in Varanasi.
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
              For more than 40 years, Rajput Dairy has been delivering fresh
              dairy products with a commitment to quality, hygiene and honest
              service. Our paneer is prepared daily to ensure freshness and
              consistency.
            </p>

            <p>
              Whether you need paneer for home cooking, restaurants, hotels,
              catering or special occasions, Rajput Dairy is trusted across
              Varanasi for premium quality and reliable service.
            </p>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions About Fresh Paneer
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-bold">
                Where can I buy fresh Paneer in Varanasi?
              </h3>
              <p className="mt-2 text-gray-700">
                You can buy fresh, hygienically prepared paneer from Rajput
                Dairy, Shivpuram Colony, Varanasi. Home delivery is available
                in many local areas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Is Rajput Dairy Paneer prepared fresh every day?
              </h3>
              <p className="mt-2 text-gray-700">
                Yes. Our paneer is prepared daily using quality milk to ensure
                freshness, softness and excellent taste.
              </p>
            </div>

          </div>

        </div>
      </section>
            {/* More FAQs */}
      <section className="py-8 px-6 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto">

          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-bold">
                Since when has Rajput Dairy been serving Varanasi?
              </h3>
              <p className="mt-2 text-gray-700">
                Rajput Dairy has proudly served Varanasi since 1984, providing
                fresh dairy products with consistent quality and trusted service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Do you supply paneer to restaurants and sweet shops?
              </h3>
              <p className="mt-2 text-gray-700">
                Yes. We supply fresh paneer to homes, restaurants, hotels,
                caterers and sweet shops across Varanasi.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Do you provide home delivery?
              </h3>
              <p className="mt-2 text-gray-700">
                Yes. Home delivery is available in many areas of Varanasi.
                Contact us on WhatsApp for availability and bulk orders.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-[#F57C00] text-white text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold">
            Order Fresh Paneer from Rajput Dairy
          </h2>

          <p className="mt-4 text-lg">
            Freshly prepared every day and trusted by Varanasi families since
            1984.
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

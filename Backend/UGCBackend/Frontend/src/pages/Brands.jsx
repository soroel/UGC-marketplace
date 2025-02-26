import Navigation from "../components/Navigation";

export default function Services() {
  const services = [
    {
      title: "Media Buying Services",
      image: "/media/Bulb.jpg",
      link: "https://example.com/media-buying", // External URL
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      image: "/media/Bulbs.jpg",
      link: "https://example.com/cro",
    },
    {
      title: "Content Creation & Marketing",
      image: "/media/coins.jpg",
      link: "https://example.com/content-marketing",
    },
    {
      title: "Print Media",
      image: "/media/Girl.jpg",
      link: "https://example.com/print-media",
    },
    {
      title: "Print Media",
      image: "/media/soil.jpg",
      link: "https://example.com/print-media",
    },
    {
      title: "Print Media",
      image: "/media/Hands.png",
      link: "https://example.com/print-media",
    },
    {
      title: "Print Media",
      image: "/media/Success.jpg",
      link: "https://example.com/print-media",
    },
    {
      title: "Print Media",
      image: "/media/Blog.jpg",
      link: "https://example.com/print-media",
    },
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">
            Connecting Businesses to Top Marketing Agencies
          </h1>
          <p className="text-lg mb-8">
            We bridge the gap between businesses and expert marketing agencies, helping you find the perfect partner to grow your brand. Whether you need media buying, content creation, or conversion optimization, we've got you covered.
          </p>
          <a
            href="#services" // Link to the services section
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Explore Our Services
          </a>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services" className="grid md:grid-cols-4 gap-6 p-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-600 to-transparent p-4">
              {/* Make the title clickable using <a> tag */}
              <a
                href={service.link}
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security best practice for external links
                className="text-white font-semibold hover:underline"
              >
                {service.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
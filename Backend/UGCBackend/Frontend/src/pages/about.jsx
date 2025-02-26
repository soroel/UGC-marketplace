import Navigation from "../components/Navigation";

export default function About() {
  return (
    <>
      <Navigation />
      <div>
        {/* Hero Section */}
        <section className="text-center py-16 px-6">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            At UGC Connect, we are passionate about empowering individuals and businesses to achieve their goals through innovative solutions and a collaborative approach.
          </p>
          {/* Image Row */}
          <div className="flex justify-center gap-4 mt-6">
            <img src="Blog.jpg" className="w-24 h-24 rounded-lg object-cover" alt="Team" />
            <img src="Blog.jpg" className="w-24 h-24 rounded-lg object-cover" alt="Meeting" />
            <img src="Blog.jpg" className="w-24 h-24 rounded-lg object-cover" alt="Discussion" />
            <img src="Blog.jpg" className="w-24 h-24 rounded-lg object-cover" alt="Remote Work" />
          </div>
        </section>

        {/* Business Impact Section */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">We Make Sure Your Ideas Come to Life</h2>
              <p className="text-gray-600 mt-4">
                Our team is dedicated to turning your vision into reality. From concept to execution, we ensure every detail is handled with care and precision.
              </p>
            </div>
            <div>
              <img src="Blog.jpg" className="w-full rounded-lg shadow-md" alt="Business Impact" />
            </div>
          </div>
        </section>

        {/* Small Business Empowerment Section */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img src="Blog.jpg" className="w-full rounded-lg shadow-md" alt="Founder" />
              <p className="text-gray-700 italic mt-2">"Together, we can create a lasting impact." - Socialy Founder</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Empowering Small Businesses</h2>
              <p className="text-gray-600 mt-4">
                We believe in the power of small businesses to drive innovation and growth. Our mission is to provide the tools and support they need to thrive.
              </p>
              <blockquote className="mt-4 italic text-yellow-700 border-l-4 border-yellow-500 pl-4">
                "Success is not just about profits; it's about making a difference in the lives of others."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Business Growth Section */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Helping Businesses Grow Faster and Bigger</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our proven strategies and expert team are here to help your business reach new heights. Let us guide you on your journey to success.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center max-w-xs">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                🏆
              </div>
              <h3 className="font-bold text-gray-800">Professional Team</h3>
              <p className="text-gray-600 text-sm">Our team of experts is dedicated to delivering top-notch solutions tailored to your needs.</p>
            </div>

            <div className="text-center max-w-xs">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                🎯
              </div>
              <h3 className="font-bold text-gray-800">Target Oriented</h3>
              <p className="text-gray-600 text-sm">We focus on achieving your goals with precision and efficiency.</p>
            </div>

            <div className="text-center max-w-xs">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                ✅
              </div>
              <h3 className="font-bold text-gray-800">Success Guarantee</h3>
              <p className="text-gray-600 text-sm">We are committed to delivering results that exceed your expectations.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
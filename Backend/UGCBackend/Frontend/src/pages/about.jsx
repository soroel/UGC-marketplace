import Navigation from "../components/Navigation";

export default function About() {
  return (
    <>
      <Navigation />
      <div>
        {/* Hero Section */}
        <section className="bg-gray-900 text-center py-16 px-6 relative" style={{ borderRadius: '0 0 25% 25%' }}>
        {/* Content */}
        <div className="mb-12"> {/* Added margin-bottom to create space */}
          <h1 className="text-4xl font-bold text-white">About Us</h1>
          <p className="text-white mt-4 max-w-2xl mx-auto">
            At UGC Connect, we are passionate about empowering individuals and businesses to achieve their goals through innovative solutions and a collaborative approach.
          </p>
<<<<<<< HEAD
        </div>
=======
          {/* Image Row */}
          <div className="flex justify-center gap-4 mt-6">
            <img src="Blog.jpg" className="w-24 h-24 rounded-lg object-cover" alt="Team" />
            <img src="Blog.jpg" className="w-24 h-24 rounded-lg object-cover" alt="Meeting" />
            <img src="Blog.jpg" className="w-24 h-24 rounded-lg object-cover" alt="Discussion" />
            <img src="Blog.jpg" className="w-24 h-24 rounded-lg object-cover" alt="Remote Work" />
          </div>
        </section>
>>>>>>> fa3cd0cd77533018a69cdae829c33b506c65fb35

      {/* Image Row */}
      <div className="flex justify-center gap-8 absolute -bottom-12 left-1/2 transform -translate-x-1/2">
        <img src="/media/Bulb.jpg" className="w-24 h-24 rounded-lg object-cover" alt="Team" />
        <img src="/media/Girl.jpg" className="w-29 h-24 rounded-lg object-cover" alt="Meeting" />
        <img src="/media/Hands.png" className="w-24 h-24 rounded-lg object-cover" alt="Discussion" />
        <img src="/media/Success1.jpg" className="w-29 h-24 rounded-lg object-cover" alt="Remote Work" />
      </div>
      </section>
      <div className="mt-19.5"></div> 
        {/* Business Impact Section */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">We Make Sure Your Ideas Come to Life</h2>
              <p className="text-gray-600 mt-4">
                Our team is dedicated to turning your vision into reality. From concept to execution, we ensure every detail is handled with care and precision.
              </p>
            </div>
<<<<<<< HEAD
            <div className="">
              <img src="/media/soil.jpg" className="w-full rounded-lg shadow-md" alt="Business Impact" />
=======
            <div>
              <img src="Blog.jpg" className="w-full rounded-lg shadow-md" alt="Business Impact" />
<<<<<<< HEAD
>>>>>>> fa3cd0cd77533018a69cdae829c33b506c65fb35
=======
>>>>>>> fa3cd0cd77533018a69cdae829c33b506c65fb35
            </div>
          </div>
        </section>

        {/* Small Business Empowerment Section */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
<<<<<<< HEAD
<<<<<<< HEAD
              <img src="/media/coins.jpg" className="w-full rounded-lg shadow-md" alt="Founder" />
=======
              <img src="Blog.jpg" className="w-full rounded-lg shadow-md" alt="Founder" />
>>>>>>> fa3cd0cd77533018a69cdae829c33b506c65fb35
=======
              <img src="Blog.jpg" className="w-full rounded-lg shadow-md" alt="Founder" />
>>>>>>> fa3cd0cd77533018a69cdae829c33b506c65fb35
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
        <section className="bg-gray-900 py-16 px-6 text-center " style={{ borderRadius: '25% 25% 0 0' }}>
          <h2 className="text-3xl font-bold text-white">Helping Businesses Grow Faster and Bigger</h2>
          <p className="text-white mt-4 max-w-2xl mx-auto">
            Our proven strategies and expert team are here to help your business reach new heights. Let us guide you on your journey to success.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center max-w-xs">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                🏆
              </div>
              <h3 className="font-bold text-white">Professional Team</h3>
              <p className="text-white text-sm">Our team of experts is dedicated to delivering top-notch solutions tailored to your needs.</p>
            </div>

            <div className="text-center max-w-xs">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                🎯
              </div>
              <h3 className="font-bold text-white ">Target Oriented</h3>
              <p className="text-white text-sm">We focus on achieving your goals with precision and efficiency.</p>
            </div>

            <div className="text-center max-w-xs">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                ✅
              </div>
              <h3 className="font-bold text-white">Success Guarantee</h3>
              <p className="text-white text-sm">We are committed to delivering results that exceed your expectations.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
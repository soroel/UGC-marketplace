import { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Search, Briefcase } from "lucide-react";
import Navbar from "../components/Navigation";

export default function Jobs() {
  const [search, setSearch] = useState("");
  const [showPopup, setShowPopup] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD

  // Sample data for jobs and brands
  const [jobs] = useState([
    { title: "TikTok Campaign Creator", salary: "KES 10,000 - KES 50,000", location: "Remote | Social Media | Kenya" },
    { title: "Instagram Reels Partner", salary: "KES 15,000 - KES 60,000", location: "Remote | Social Media | Kenya" },
    { title: "YouTube Shorts Reviewer", salary: "KES 20,000 - KES 70,000", location: "Remote | Social Media | Kenya" },
  ]);

  const [brands] = useState([
    { name: "Safaricom", description: "Looking for Kenyan content creators" },
    { name: "Java House", description: "Looking for Kenyan content creators" },
    { name: "EABL", description: "Looking for Kenyan content creators" },
    { name: "Equity Bank", description: "Looking for Kenyan content creators" },
  ]);

  // Filtered jobs and brands based on search input
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(search.toLowerCase())
  );
=======
>>>>>>> fa3cd0cd77533018a69cdae829c33b506c65fb35
=======
>>>>>>> fa3cd0cd77533018a69cdae829c33b506c65fb35

  useEffect(() => {
    if (!localStorage.getItem("hasSeenPopup")) {
      setShowPopup(true);
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="fixed top-0 left-0 w-full bg-blue-700 shadow-md z-50">
        <Navbar />
      </div>

      <section className="text-center my-12">
        <h2 className="text-4xl font-bold">
          Find your <span className="text-blue-600">perfect UGC job</span> in Kenya
        </h2>
        <p className="text-gray-600 mt-4">
          Connect with Kenyan brands looking for authentic user-generated content.
        </p>
        <div className="mt-6 flex justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Search for jobs or brands in Kenya"
            className="p-3 rounded-md shadow-md w-80 border"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button>
            <Search className="mr-2" /> Search
          </Button>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Recommended UGC Jobs in Kenya</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <Card key={index} className="p-4 shadow-md border">
              <CardContent>
                <h4 className="text-lg font-bold">{job.title}</h4>
                <p className="text-gray-600 text-sm">{job.salary}</p>
                <p className="text-blue-500 mt-2">{job.location}</p>
                <Button variant="outline" className="mt-4 w-full">Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Top Kenyan Brands Hiring</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {filteredBrands.map((brand, index) => (
            <Card key={index} className="p-4 shadow-md border">
              <CardContent className="text-center">
                <Briefcase className="mx-auto text-blue-500" size={40} />
                <h4 className="text-lg font-bold mt-2">{brand.name}</h4>
                <p className="text-gray-600 text-sm">{brand.description}</p>
                <Button variant="outline" className="mt-4 w-full">View Jobs</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
<<<<<<< HEAD
=======

      {/* SMS Popup Component */}
      <SMSPopup showPopup={showPopup} setShowPopup={setShowPopup} />
<<<<<<< HEAD
>>>>>>> fa3cd0cd77533018a69cdae829c33b506c65fb35
=======
>>>>>>> fa3cd0cd77533018a69cdae829c33b506c65fb35
    </div>
  );
}
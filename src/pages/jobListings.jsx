import { useState } from "react";
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Search, Briefcase } from "lucide-react";
import Navbar from "../components/Navigation";

export default function Jobs() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md rounded-xl">
        <h1 className="text-2xl font-bold text-blue-600">UGC Connect Kenya</h1>
       <Navbar />
      </header>

      {/* Hero Section */}
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

      {/* Job Listings */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Recommended UGC Jobs in Kenya</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["TikTok Campaign Creator", "Instagram Reels Partner", "YouTube Shorts Reviewer"].map((job, index) => (
            <Card key={index} className="p-4 shadow-md border">
              <CardContent>
                <h4 className="text-lg font-bold">{job}</h4>
                <p className="text-gray-600 text-sm">KES 10,000 - KES 50,000 per campaign</p>
                <p className="text-blue-500 mt-2">Remote | Social Media | Kenya</p>
                <Button variant="outline" className="mt-4 w-full">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Companies */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Top Kenyan Brands Hiring</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {["Safaricom", "Java House", "EABL", "Equity Bank"].map((brand, index) => (
            <Card key={index} className="p-4 shadow-md border">
              <CardContent className="text-center">
                <Briefcase className="mx-auto text-blue-500" size={40} />
                <h4 className="text-lg font-bold mt-2">{brand}</h4>
                <p className="text-gray-600 text-sm">Looking for Kenyan content creators</p>
                <Button variant="outline" className="mt-4 w-full">
                  View Jobs
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Background from "../../public/Icon/Background.png";
import Icon from "../../public/Icon/15k+.png";
export default function Sports() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto p-6">
        {/* Left Side */}
        <div className="flex flex-col justify-center space-y-8">
          {/* First Block */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">In Spotlights</h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">
              ↗ Read More
            </button>
          </div>

          <hr className="border-gray-300" />

          {/* Second Block */}
          <div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">
              ↗ Read More
            </button>
          </div>

          {/* View All Button */}
          <button className="flex items-center gap-2 w-fit px-5 py-2 border border-gray-300 rounded-full text-gray-800 font-medium hover:bg-gray-100">
            ↗ View All
          </button>
        </div>

        {/* Right Side */}
        <div className="relative">
          {/* Background Image */}
          <Image
            src={Background}
            alt="Alumni Meet"
            width={1400}
            height={681}
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0  bg-opacity-40 rounded-lg flex flex-col justify-end p-6">
            <div>
                <Image
                src={Icon}
                alt="15k"
                />
              <h3 className="text-white text-4xl font-bold">ALUMNI</h3>
              <p className="text-white mt-2 flex flex-col">
                JIIT alumni exemplify excellence and
                <span>accomplishment across diverse fields.</span>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 mt-6 bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-4 text-center">
                <p className="text-indigo-600 font-bold text-lg">1000+</p>
                <p className="text-sm font-medium text-gray-600">
                  Civil Servants
                </p>
              </div>
              <div className="p-4 text-center bg-teal-500 text-white">
                <p className="font-bold text-lg">150+</p>
                <p className="text-sm font-medium">
                  CEO&apos;s Across the Globe
                </p>
              </div>
              <div className="p-4 text-center">
                <p className="text-indigo-600 font-bold text-lg">100+</p>
                <p className="text-sm font-medium text-gray-600">
                  Alumni Across the Globe
                </p>
              </div>
            </div>

            {/* Alumni Cell Button */}
            <button className="mt-4 flex items-center gap-2 w-fit px-5 py-2 border border-gray-300 rounded-full bg-white text-gray-800 font-medium hover:bg-gray-100">
              ↗ Alumni Cell
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

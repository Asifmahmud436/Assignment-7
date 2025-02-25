import bgShadow from "../assets/bg-shadow.png";

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Newsletter */}
      <div
        style={{
          backgroundImage: `url(${bgShadow})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative z-10 w-full max-w-4xl flex flex-col items-center mt-8 shadow-lg border border-gray-300 p-6 rounded-lg bg-white bg-opacity-90"
      >
        <h1 className="font-bold text-3xl pb-4 text-center">Subscribe to our Newsletter</h1>
        <p className="pb-6 text-center">Get the latest updates and news right in your inbox!</p>
        <div className="flex w-full max-w-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border-2 border-gray-300 rounded-l-2xl px-4 py-2 outline-none"
          />
          <button
            type="button"
            className="px-4 py-2 rounded-r-2xl bg-lime-500 text-white hover:bg-lime-600 transition duration-200"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="-mt-12 w-full bg-gray-100 px-6 lg:px-20 py-16 relative z-0">
        <div className="flex justify-between flex-wrap gap-8">
          <div className="max-w-80">
            <h1 className="text-2xl font-bold pb-4">About Us</h1>
            <p>We are a Dream11 site that lets you select your favorite players and matchmake with your friends.</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold pb-4">Quick Links</h1>
            <ul className="space-y-2">
              {["Home", "Service", "About", "Contacts"].map((link) => (
                <li key={link} className="hover:text-lime-500 transition-colors cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold pb-4">Subscribe</h1>
            <div className="flex w-full max-w-lg">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 border-2 border-gray-300 rounded-l-2xl px-4 py-2 outline-none"
              />
              <button
                type="button"
                className="px-4 py-2 rounded-r-2xl bg-lime-500 text-white hover:bg-lime-600 transition duration-200"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

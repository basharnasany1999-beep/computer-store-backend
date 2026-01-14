import { Link } from "react-router-dom";


export default function About() {
  return (
    <section className="relative py-15 bg-n-8">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
        
        {/* Text Content */}
        <div className="space-y-7.5">
          <span className="tagline text-color-2">
            About Us
          </span>

          <h2 className="h2 text-n-1">
            We build modern digital products that scale
          </h2>

          <p className="body-2 text-n-3">
            Our mission is to create clean, powerful and reliable web
            applications that help businesses grow and customers enjoy
            seamless experiences. We focus on performance, design and
            real-world usability.
          </p>

          <p className="body-2 text-n-4">
            From idea to deployment, we handle everything with precision
            and care — ensuring that every product we ship is fast,
            secure and easy to use.
          </p>

          <div className="flex gap-5">
            <button className="button bg-color-1 text-n-1 px-7.5 py-3 rounded-[0.80rem]">
              Learn More
            </button>
            <Link to='Contact'>
            <button className="button border border-n-5 text-n-1 px-7.5 py-3 rounded-[0.80rem]">
              Contact Us
            </button>
            </Link>
          </div>
        </div>

        {/* Visual Card */}
        <div className="relative">
          <div className="bg-n-7 border border-n-6 rounded-[1.25rem] p-10 space-y-7.5">
            <h4 className="h4 text-n-1">
              Why choose us?
            </h4>

            <ul className="space-y-5">
              <li className="flex items-start  gap-5">
                <span className="bg-color-4 w-3 h-3 mt-2 rounded-full"></span>
                <p className="body-2 text-n-3">
                  High-performance and scalable architecture
                </p>
              </li>

              <li className="flex items-start gap-5">
                <span className="bg-color-1 w-3 h-3 mt-2 rounded-full"></span>
                <p className="body-2 text-n-3">
                  Clean UI built with modern design systems
                </p>
              </li>

              <li className="flex items-start gap-5">
                <span className="bg-color-5 w-3 h-3 mt-1.5 rounded-full"></span>
                <p className="body-2 text-n-3">
                  Secure, fast and optimized codebase
                </p>
              </li>
            </ul>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-conic-gradient opacity-15 blur-xl rounded-[1.5rem] -z-10"></div>
        </div>
      </div>
    </section>
  );
}

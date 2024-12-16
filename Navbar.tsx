import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
  <div className="flex flex-col justify-center items-center w-full bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <header className="relative w-full min-h-[410px] lg:min-h-[500px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f06b124713d94fc48332d89d74ed122b73024b3ba52030f71cb871ae389a5c54?placeholderIfAbsent=true&apiKey=a273bb3ac63a4ff2bdc8158293b590be"
          alt="Restaurant ambiance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <nav className="relative z-10 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-4 bg-stone-950">
          <a
            href="/"
            className="text-2xl font-bold text-amber-500 mb-4 sm:mb-0"
            aria-label="Foodtuck Home"
          >
            F<span className="text-white">oo</span>d
            <span className="text-amber-500">tuck</span>
          </a>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-white text-base">
            <a
              href="/"
              className="font-bold text-amber-500 hover:text-amber-400"
              aria-current="page"
            >
              Home
            </a>
            <a href="/menu" className="hover:text-amber-500">
              Menu
            </a>
            <a href="/blog" className="hover:text-amber-500">
              Blog
            </a>
            <a href="/pages" className="hover:text-amber-500">
              Pages
            </a>
            <a href="/about" className="hover:text-amber-500">
              About
            </a>
            <a href="/shop" className="hover:text-amber-500">
              Shop
            </a>
            <a href="/contact" className="hover:text-amber-500">
              Contact
            </a>
          </div>
          <div
            className="flex gap-4 mt-4 sm:mt-0"
            role="navigation"
            aria-label="Social media"
          >
            <a
              href="/social1"
              className="text-white hover:text-amber-500"
              aria-label="Visit our Facebook"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8019e3b003ce4873fb406c747ad3afbb58f1179bc24a43ed9f2c7e7a1116c875?placeholderIfAbsent=true&apiKey=a273bb3ac63a4ff2bdc8158293b590be"
                alt=""
                className="w-6 h-6"
              />
            </a>
            <a
              href="/social2"
              className="text-white hover:text-amber-500"
              aria-label="Visit our Twitter"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa676778b948d6aec49e3f3532376a04f8570b321daab770fd20d3723c8d4a81?placeholderIfAbsent=true&apiKey=a273bb3ac63a4ff2bdc8158293b590be"
                alt=""
                className="w-6 h-6"
              />
            </a>
            <a
              href="/social3"
              className="text-white hover:text-amber-500"
              aria-label="Visit our Instagram"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/df9884e236bdd8e835b824ac9cd97a0415c7f06575433ffc6fc9723078966d96?placeholderIfAbsent=true&apiKey=a273bb3ac63a4ff2bdc8158293b590be"
                alt=""
                className="w-6 h-6"
              />
            </a>
          </div>
        </nav>
        <div className="relative flex flex-col items-center justify-center text-center pt-20 pb-16 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Shop
          </h1>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-lg sm:text-xl"
          >
            <a href="/" className="text-white hover:text-amber-500">
              Home
            </a>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/efa31fe73c0c2b542f57754db7182621b2835224ccc10ec79df35ed0addf02d3?placeholderIfAbsent=true&apiKey=a273bb3ac63a4ff2bdc8158293b590be"
              alt=""
              className="w-4 h-4"
            />
            <span className="text-amber-500" aria-current="page">
              Shop
            </span>
          </nav>
        </div>
      </header>
      <main className="py-12 sm:py-16 lg:py-20">
        <section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          aria-label="Menu items"
        >
          <article className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3735204e9eee2f12a04709801efd7b9be186d4b34ed17f7d3e9f0f161a042368?placeholderIfAbsent=true&apiKey=a273bb3ac63a4ff2bdc8158293b590be"
              alt="Grand Italiano dish"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-neutral-600 mb-2">
                Grand Italiano
              </h2>
              <p className="text-zinc-500">26 Items</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-amber-500 font-bold">$32.00</span>
                <button className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                  Order Now
                </button>
              </div>
            </div>
          </article>
        </section>
        <section className="mt-16" aria-label="Newsletter subscription">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-zinc-800 mb-6">
              Subscribe to Our Newsletter
            </h2>
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-amber-500 text-white font-bold rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-stone-950 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="/" className="text-2xl font-bold text-amber-500">
              F<span className="text-white">oo</span>d
              <span className="text-amber-500">tuck</span>
            </a>
            <p className="mt-4 text-gray-400">
              Quality food delivery service you can trust
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/menu" className="hover:text-amber-500">
                  Menu
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-amber-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-amber-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-amber-500">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-400">
              <p>123 Restaurant Street</p>
              <p>City, State 12345</p>
              <p className="mt-2">Phone: (555) 123-4567</p>
              <p>Email: info@foodtuck.com</p>
            </address>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="/social1"
                aria-label="Facebook"
                className="hover:text-amber-500"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8019e3b003ce4873fb406c747ad3afbb58f1179bc24a43ed9f2c7e7a1116c875?placeholderIfAbsent=true&apiKey=a273bb3ac63a4ff2bdc8158293b590be"
                  alt=""
                  className="w-6 h-6"
                />
              </a>
              <a
                href="/social2"
                aria-label="Twitter"
                className="hover:text-amber-500"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa676778b948d6aec49e3f3532376a04f8570b321daab770fd20d3723c8d4a81?placeholderIfAbsent=true&apiKey=a273bb3ac63a4ff2bdc8158293b590be"
                  alt=""
                  className="w-6 h-6"
                />
              </a>
              <a
                href="/social3"
                aria-label="Instagram"
                className="hover:text-amber-500"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/df9884e236bdd8e835b824ac9cd97a0415c7f06575433ffc6fc9723078966d96?placeholderIfAbsent=true&apiKey=a273bb3ac63a4ff2bdc8158293b590be"
                  alt=""
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar

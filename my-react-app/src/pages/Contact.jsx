import React from 'react'

const Contact = () => {
  return (
   <section className="relative py-20 bg-n-8 text-n-1">
  <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">

    {/* Left content */}
    <div>
      <p className="tagline text-color-2 mb-4">Get in touch</p>
      <h2 className="h2 mb-6">
        Let’s talk about your next project
      </h2>
      <p className="body-2 text-n-3 mb-10 max-w-md">
        Have an idea, a question, or a project in mind? Fill out the form and
        we’ll get back to you as soon as possible.
      </p>

      <div className="space-y-6">
        <div>
          <p className="caption text-n-4">Email</p>
          <p className="body-1">hello@yourdomain.com</p>
        </div>

        <div>
          <p className="caption text-n-4">Phone</p>
          <p className="body-1">+1 (234) 567-890</p>
        </div>

        <div>
          <p className="caption text-n-4">Location</p>
          <p className="body-1">Remote • Worldwide</p>
        </div>
      </div>
    </div>

    {/* Right form */}
    <div className="bg-n-7 border border-n-5 rounded-2xl p-8">
      <form className="space-y-6">

        <div>
          <label className="caption text-n-4 mb-2 block">Your Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="input w-full"
          />
        </div>

        <div>
          <label className="caption text-n-4 mb-2 block">Email Address</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="input w-full"
          />
        </div>

        <div>
          <label className="caption text-n-4 mb-2 block">Message</label>
          <textarea
            rows="5"
            placeholder="Tell us about your project..."
            className="input w-full resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="button bg-color-1 text-n-1 px-8 py-4 rounded-xl hover:opacity-80 transition"
        >
          Send Message
        </button>

      </form>
    </div>

  </div>
</section>

  )
}

export default Contact

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

  const MAX_MESSAGE = 400;

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);

    const name = formData.get("user_name")?.toString().trim() || "";
    const email = formData.get("user_email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    if (name.length < 3) {
      toast.error("Name must be at least 3 characters");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Enter a valid email");
      return;
    }

    if (message.length < 15) {
      toast.error("Message must be at least 15 characters");
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_3uuf5px",
        "template_wmvthli",
        form.current,
        "ae8dcAVGxLYzF7VWV"
      );

      toast.success("Message sent successfully 🚀");
      form.current.reset();
      setMessageLength(0);
    } catch (error) {
      toast.error("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="min-h-screen px-6 md:px-16 py-20">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-blue-400 text-center">
        Let's Work Together
      </h2>

      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl 
        p-8 rounded-3xl border border-blue-400/30 shadow-xl">

        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          {/* 2 Column Layout */}
          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="user_name"
              placeholder="Full Name *"
              className="input-style"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email Address *"
              className="input-style"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone (Optional)"
              className="input-style"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input-style"
            />

          </div>

          {/* Dropdowns */}
          <div className="grid md:grid-cols-3 gap-6">

            <select name="project_type" className="input-style">
              <option value="">Project Type</option>
              <option>Website</option>
              <option>Web App</option>
              <option>Full Stack App</option>
              <option>UI/UX Design</option>
            </select>

            <select name="budget" className="input-style">
              <option value="">Budget Range</option>
              <option>Under $500</option>
              <option>$500 - $2000</option>
              <option>$2000+</option>
            </select>

            <select name="timeline" className="input-style">
              <option value="">Timeline</option>
              <option>1-2 Weeks</option>
              <option>1 Month</option>
              <option>Flexible</option>
            </select>

          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Project Details *"
              rows={5}
              maxLength={MAX_MESSAGE}
              onChange={(e) => setMessageLength(e.target.value.length)}
              className="input-style resize-none"
            />
            <div className="text-right text-xs text-gray-400 mt-1">
              {messageLength}/{MAX_MESSAGE}
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 
            hover:opacity-90 px-6 py-3 rounded-lg transition font-semibold 
            flex justify-center items-center gap-2"
          >
            {loading ? (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6 text-2xl text-blue-300">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-white hover:scale-110 transition" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-white hover:scale-110 transition" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
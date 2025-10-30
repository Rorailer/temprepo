import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Title from '../Components/Title';

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Cooldown period in seconds to prevent spam
  const SUBMISSION_COOLDOWN_SECONDS = 1800;

  // --- IMPORTANT ---
  // Replace these with your actual EmailJS credentials from your EmailJS account
  const EMAILJS_SERVICE_ID = 'service_7tlww9f'; // Get from emailjs.com
  const EMAILJS_TEMPLATE_ID = 'template_28wyq4q'; // Get from emailjs.com
  const EMAILJS_PUBLIC_KEY = 'SqgLH4ZqbaOx0pXQA'; // Get from emailjs.com

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    // --- Stricter Email Validation ---
    const email = formRef.current.user_email.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.', { duration: 3000 });
      return;
    }

    // --- Spam Prevention Check ---
    const lastSubmissionTime = sessionStorage.getItem('lastSubmissionTime');
    const now = Date.now();

    if (lastSubmissionTime) {
      const timeSinceLastSubmission = (now - parseInt(lastSubmissionTime, 10)) / 1000;
      if (timeSinceLastSubmission < SUBMISSION_COOLDOWN_SECONDS) {
        const timeLeftInSeconds = Math.ceil(SUBMISSION_COOLDOWN_SECONDS - timeSinceLastSubmission);
        const timeLeftInMinutes = Math.ceil(timeLeftInSeconds / 60);
        const plural = timeLeftInMinutes > 1 ? 's' : '';
        toast.error(`Please wait ${timeLeftInMinutes} more minute${plural} before submitting again.`, { duration: 3000 });
        return;
      }
    }

    // Check if placeholder credentials are still being used
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      toast.error('EmailJS is not configured. Please update credentials in Contact.jsx.', { duration: 5000 });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      toast.success('Message sent successfully! We\'ll get back to you soon.', {
        duration: 4000,
        position: 'bottom-center',
      });

      // Record the successful submission time
      sessionStorage.setItem('lastSubmissionTime', now.toString());

      formRef.current.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again later.', {
        duration: 4000,
        position: 'bottom-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="w-[85vw] mx-auto py-12">
        <Title text="Get In Touch" />

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-gray-800">Contact Information</h2>
            <p className="text-gray-600">
              Have a question or a custom order request? Reach out to us through any of the channels below, or use the form to send us a direct message.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.location.href = 'mailto:BulkOrder@digitalive.org'}>
                <img src="/mail.png" alt="Email" className="w-6 h-6" />
                <span className="text-gray-700 hover:text-blue-600">BulkOrder@digitalive.org</span>
              </div>
              <div className="flex items-center gap-4">
                <img src="/phone.png" alt="Phone" className="w-6 h-6" />
                <span className="text-gray-700">+92 322 4063170</span>
              </div>
              <div className="flex items-center gap-4 cursor-pointer" onClick={() => openLink('https://www.instagram.com/digitalive/')}>
                <img src="/insta.png" alt="Instagram" className="w-6 h-6" />
                <span className="text-gray-700 hover:text-blue-600">@Digitalive</span>
              </div>
              <div className="flex items-center gap-4 cursor-pointer" onClick={() => openLink('https://www.x.com/digitaliveofficial')}>
                <img src="/x.png" alt="X/Twitter" className="w-6 h-6" />
                <span className="text-gray-700 hover:text-blue-600">@Digitalive</span>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 p-8 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-center text-gray-800">Send Us a Query</h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" id="name" name="user_name" placeholder="Your Name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" name="user_email" placeholder="your.email@example.com" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell us about your project or custom order..." required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-3 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

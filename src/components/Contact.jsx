import { Send } from 'lucide-react';
import { useState } from 'react';
import contactImg from '../assets/images/me/avatar-resized/contact-cover 358.360.webp';
import { showToast } from '../utils/toast';
function Contact() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    // بررسی ایمیل
    if (!email) {
      showToast('لطفاً ایمیل خود را وارد کنید.', 'error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      showToast('لطفاً یک ایمیل معتبر وارد کنید.', 'error');
      return;
    } // بررسی پیام
    if (!message) {
      showToast('لطفاً پیام خود را وارد کنید.', 'error');
      return;
    }

    if (message.length < 20) {
      showToast('لطفاً پیام خود را حداقل در ۲۰ کاراکتر وارد کنید.', 'error');
      return;
    }

    const formData = new FormData(e.target);

    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY);

    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        showToast('پیام شما با موفقیت ارسال شد.', 'success');
        e.target.reset();
      } else {
        showToast('ارسال پیام ناموفق بود. لطفاً دوباره تلاش کنید.', 'error');
      }
    } catch (error) {
      console.error(error);

      showToast('خطایی رخ داد. لطفاً دوباره تلاش کنید.', 'error');
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden lg:scroll-mt-[var(--header-height)]"
    >
      <div
        className="container mx-auto max-w-6xl
      relative z-10 px-6 "
      >
        <div className="text-center mb-6" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl
          font-bold mb-3 dark:text-white
          text-gray-900"
          >
            <span className="text-indigo-500 dark:text-indigo-400">
              گفت‌وگو
            </span>{' '}
            کنیم
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 dark:bg-zinc-900/30
            bg-white/50 p-8 sm:p-10 rounded-3xl border
            dark:border-zinc-800 border-gray-100
            backdrop-blur-sm w-full max-w-xl mx-auto
            lg:mx-0 order-2 lg:order-1"
            data-aos="fade-left"
          >
            <input
              type="text"
              name="name"
              placeholder="نام و نام خانوادگی"
              className="w-full px-5 py-4
              rounded-xl border outline-hidden
              text-base transition-all
              dark:border-zinc-800 border-gray-200
              dark:bg-zinc-900/60 bg-white
              dark:text-white text-gray-800
              focus:border-indigo-500 
              dark:focus:border-indigo-400"
            />
            <input
              type="text"
              name="email"
              // required
              data-aos="fade-up"
              data-aos-delay="200"
              placeholder="ایمیل"
              className="w-full px-5 py-4
              rounded-xl border outline-hidden
              text-base transition-all
              dark:border-zinc-800 border-gray-200
              dark:bg-zinc-900/60 bg-white
              dark:text-white text-gray-800
              focus:border-indigo-500 
              dark:focus:border-indigo-400"
            />
            <textarea
              // required
              // minLength={20}
              name="message"
              rows={'5'}
              data-aos="fade-up"
              data-aos-delay="300"
              placeholder="پیام"
              className="w-full px-5 py-4
              rounded-xl border outline-hidden
              text-base transition-all
              dark:border-zinc-800 border-gray-200
              dark:bg-zinc-900/60 bg-white
              dark:text-white text-gray-800
              focus:border-indigo-500 
              dark:focus:border-indigo-400"
            />
            <button
              type="submit"
              className="inline-flex items-center
              justify-center gap-2 px-8 py-4
              rounded-xl text-white font-medium
              text-base bg-indigo-600 hover:bg-indigo-700
              transition-all cursor-pointer
              w-full sm:w-fit"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {loading ? (
                <span>در حال ارسال...</span>
              ) : (
                <>
                  <Send size={20} />
                  ارسال پیام
                </>
              )}
            </button>
          </form>
          <div
            className="flex justify-center w-full
          relative order-1 lg:order-2"
            data-aos="fade-right"
          >
            <div
              className="absolute inset-0 flex
            items-center justify-center pointer-events-none"
            >
              <div
                className="w-75 h-90 dark:bg-indigo-500/40
              blur-3xl scale-110 "
              />
            </div>
            <img
              src={contactImg}
              alt="Contact"
              loading="lazy"
              decoding="async"
              className="size-96 object-cover rounded-3xl
              relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

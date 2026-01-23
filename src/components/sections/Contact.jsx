import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Select from '../ui/Select';

export default function Contact({
  badge,
  title,
  subtitle,
  variant = 'centered',
  showInfo = true,
  onSubmit,
  className = '',
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (onSubmit) {
      await onSubmit(formData);
    } else {
      // Simulate submission
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (variant === 'split') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info side */}
            <div>
              {badge && (
                <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
                  {badge}
                </span>
              )}
              {title && (
                <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
                  {subtitle}
                </p>
              )}

              {showInfo && <ContactInfo className="mt-8" />}
            </div>

            {/* Form side */}
            <ContactForm
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              submitted={submitted}
            />
          </div>
        </div>
      </section>
    );
  }

  // Default: centered
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {badge && (
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-green-lightest text-green-dark dark:bg-green-dark/20 dark:text-green-light">
              {badge}
            </span>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
              {subtitle}
            </p>
          )}
        </div>

        <ContactForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          submitted={submitted}
        />
      </div>
    </section>
  );
}

function ContactForm({ formData, onChange, onSubmit, isSubmitting, submitted }) {
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-xl bg-green-lightest dark:bg-green-dark/20 text-center"
      >
        <svg
          className="w-16 h-16 mx-auto mb-4 text-green-main"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
          Message Sent!
        </h3>
        <p className="text-stone-600 dark:text-stone-400">
          Thank you for reaching out. We'll get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmit}
      className="space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <Input
          name="name"
          label="Name"
          placeholder="Your name"
          value={formData.name}
          onChange={onChange}
          required
        />
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={onChange}
          required
        />
      </div>

      <Select
        name="subject"
        label="Subject"
        value={formData.subject}
        onChange={onChange}
        options={[
          { value: 'general', label: 'General Inquiry' },
          { value: 'support', label: 'Support' },
          { value: 'sales', label: 'Sales' },
          { value: 'partnership', label: 'Partnership' },
        ]}
      />

      <Textarea
        name="message"
        label="Message"
        placeholder="How can we help you?"
        value={formData.message}
        onChange={onChange}
        rows={5}
        required
      />

      <Button
        type="submit"
        size="lg"
        className="w-full justify-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </motion.form>
  );
}

function ContactInfo({ className = '' }) {
  const items = [
    {
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
    },
    {
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Office',
      value: '123 Main St, City, ST 12345',
    },
  ];

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-green-lightest dark:bg-green-dark/20 text-green-dark dark:text-green-light flex items-center justify-center shrink-0">
            <item.icon className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm text-stone-500 dark:text-stone-400">{item.label}</div>
            {item.href ? (
              <a
                href={item.href}
                className="text-stone-900 dark:text-stone-100 hover:text-green-dark dark:hover:text-green-light transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <div className="text-stone-900 dark:text-stone-100">{item.value}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

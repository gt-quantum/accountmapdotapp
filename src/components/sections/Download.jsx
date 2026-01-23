import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Download({
  badge,
  title,
  subtitle,
  appStoreUrl,
  playStoreUrl,
  desktopUrl,
  webAppUrl,
  image,
  qrCode,
  variant = 'default',
  className = '',
}) {
  const stores = [];
  if (appStoreUrl) stores.push({ type: 'appStore', url: appStoreUrl });
  if (playStoreUrl) stores.push({ type: 'playStore', url: playStoreUrl });
  if (desktopUrl) stores.push({ type: 'desktop', url: desktopUrl });
  if (webAppUrl) stores.push({ type: 'webApp', url: webAppUrl });

  if (variant === 'centered') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            <p className="mt-4 text-lg text-stone-600 dark:text-stone-400 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {stores.map((store, index) => (
              <StoreButton key={index} type={store.type} url={store.url} />
            ))}
          </div>

          {qrCode && (
            <div className="mt-8">
              <img src={qrCode} alt="Download QR Code" className="w-32 h-32 mx-auto" />
              <p className="mt-2 text-sm text-stone-500">Scan to download</p>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Default: with device mockup
  return (
    <section className={`py-16 sm:py-24 overflow-hidden ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
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

            <div className="mt-8 flex flex-wrap gap-4">
              {stores.map((store, index) => (
                <StoreButton key={index} type={store.type} url={store.url} />
              ))}
            </div>

            {qrCode && (
              <div className="mt-8 flex items-center gap-4">
                <img src={qrCode} alt="Download QR Code" className="w-24 h-24" />
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  Scan with your phone<br />to download the app
                </p>
              </div>
            )}
          </motion.div>

          {/* Device Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {image ? (
              <img src={image} alt="App screenshot" className="w-full max-w-md mx-auto" />
            ) : (
              <PhoneMockup />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StoreButton({ type, url }) {
  const badges = {
    appStore: {
      label: 'Download on the',
      store: 'App Store',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ),
    },
    playStore: {
      label: 'Get it on',
      store: 'Google Play',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
        </svg>
      ),
    },
    desktop: {
      label: 'Download for',
      store: 'Desktop',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    webApp: {
      label: 'Open in',
      store: 'Browser',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  };

  const badge = badges[type];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-stone-900 dark:bg-white text-white dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors"
    >
      {badge.icon}
      <div className="text-left">
        <div className="text-xs opacity-80">{badge.label}</div>
        <div className="font-semibold">{badge.store}</div>
      </div>
    </a>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-64">
      {/* Phone frame */}
      <div className="relative bg-stone-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="bg-gradient-to-br from-green-light to-green-main rounded-[2.5rem] aspect-[9/19] flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <p className="font-semibold">Your App</p>
          </div>
        </div>
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-stone-900 rounded-full" />
      </div>
    </div>
  );
}

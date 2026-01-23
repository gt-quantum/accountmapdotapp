import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Video({
  badge,
  title,
  subtitle,
  videoUrl,
  thumbnailUrl,
  aspectRatio = '16/9',
  variant = 'default',
  autoplay = false,
  className = '',
}) {
  const [isPlaying, setIsPlaying] = useState(autoplay);

  // Extract video ID for embeds
  const getEmbedUrl = (url) => {
    // YouTube
    const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/);
    if (ytMatch) {
      return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
    }

    // Vimeo
    const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
    }

    // Loom
    const loomMatch = url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
    if (loomMatch) {
      return `https://www.loom.com/embed/${loomMatch[1]}?autoplay=1`;
    }

    return url;
  };

  if (variant === 'inline') {
    return (
      <section className={`py-16 sm:py-24 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoPlayer
            videoUrl={videoUrl}
            thumbnailUrl={thumbnailUrl}
            aspectRatio={aspectRatio}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            getEmbedUrl={getEmbedUrl}
          />
        </div>
      </section>
    );
  }

  // Default with header
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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

        {/* Video */}
        <div className="max-w-4xl mx-auto">
          <VideoPlayer
            videoUrl={videoUrl}
            thumbnailUrl={thumbnailUrl}
            aspectRatio={aspectRatio}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            getEmbedUrl={getEmbedUrl}
          />
        </div>
      </div>
    </section>
  );
}

function VideoPlayer({ videoUrl, thumbnailUrl, aspectRatio, isPlaying, setIsPlaying, getEmbedUrl }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden shadow-2xl bg-stone-900"
      style={{ aspectRatio }}
    >
      <AnimatePresence mode="wait">
        {!isPlaying && thumbnailUrl ? (
          <motion.div
            key="thumbnail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <img
              src={thumbnailUrl}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
              >
                <svg
                  className="w-8 h-8 text-stone-900 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.iframe
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={getEmbedUrl(videoUrl)}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Video with side content
Video.WithContent = function VideoWithContent({
  badge,
  title,
  subtitle,
  content,
  features = [],
  videoUrl,
  thumbnailUrl,
  videoPosition = 'right',
  className = '',
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const isVideoLeft = videoPosition === 'left';

  const getEmbedUrl = (url) => {
    const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
    const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
    return url;
  };

  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={isVideoLeft ? 'lg:order-2' : ''}>
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
            {content && (
              <p className="mt-4 text-stone-600 dark:text-stone-400">
                {content}
              </p>
            )}
            {features.length > 0 && (
              <ul className="mt-6 space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0 mt-0.5 text-green-main" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-stone-700 dark:text-stone-300">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Video */}
          <div className={isVideoLeft ? 'lg:order-1' : ''}>
            <VideoPlayer
              videoUrl={videoUrl}
              thumbnailUrl={thumbnailUrl}
              aspectRatio="16/9"
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              getEmbedUrl={getEmbedUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

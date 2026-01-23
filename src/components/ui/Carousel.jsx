import { useState, useEffect, useCallback, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = forwardRef(function Carousel({
  children,
  autoPlay = false,
  interval = 5000,
  showArrows = true,
  showDots = true,
  loop = true,
  className = '',
  ...props
}, ref) {
  const items = Array.isArray(children) ? children : [children];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    } else if (loop) {
      setDirection(1);
      setCurrentIndex(0);
    }
  }, [currentIndex, items.length, loop]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    } else if (loop) {
      setDirection(-1);
      setCurrentIndex(items.length - 1);
    }
  }, [currentIndex, items.length, loop]);

  // Auto play
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full"
          >
            {items[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            disabled={!loop && currentIndex === 0}
            className={`
              absolute left-4 top-1/2 -translate-y-1/2
              w-10 h-10 rounded-full
              bg-white/80 dark:bg-stone-800/80
              backdrop-blur-sm
              shadow-lg
              flex items-center justify-center
              text-stone-700 dark:text-stone-300
              hover:bg-white dark:hover:bg-stone-800
              transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed
              z-10
            `}
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            disabled={!loop && currentIndex === items.length - 1}
            className={`
              absolute right-4 top-1/2 -translate-y-1/2
              w-10 h-10 rounded-full
              bg-white/80 dark:bg-stone-800/80
              backdrop-blur-sm
              shadow-lg
              flex items-center justify-center
              text-stone-700 dark:text-stone-300
              hover:bg-white dark:hover:bg-stone-800
              transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed
              z-10
            `}
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots indicator */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-2 h-2 rounded-full transition-all
                ${index === currentIndex
                  ? 'bg-green-main w-6'
                  : 'bg-white/50 hover:bg-white/80'
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
});

// Carousel item wrapper
Carousel.Item = forwardRef(function CarouselItem({
  children,
  className = '',
  ...props
}, ref) {
  return (
    <div ref={ref} className={`w-full ${className}`} {...props}>
      {children}
    </div>
  );
});

// Thumbnail carousel variant
Carousel.Thumbnails = function CarouselThumbnails({
  images = [],
  className = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={className}>
      {/* Main image */}
      <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]?.src}
            alt={images[currentIndex]?.alt || ''}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              shrink-0 w-20 h-14 rounded-lg overflow-hidden
              border-2 transition-colors
              ${index === currentIndex
                ? 'border-green-main'
                : 'border-transparent hover:border-stone-300 dark:hover:border-stone-600'
              }
            `}
          >
            <img
              src={image.src}
              alt={image.alt || ''}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

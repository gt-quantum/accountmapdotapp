import { motion } from 'framer-motion';
import Avatar from '../ui/Avatar';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Team({
  badge,
  title,
  subtitle,
  members = [],
  columns = 4,
  variant = 'cards',
  className = '',
}) {
  const columnClasses = {
    2: 'sm:grid-cols-2 max-w-2xl mx-auto',
    3: 'sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
    5: 'sm:grid-cols-2 lg:grid-cols-5',
  };

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

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className={`grid gap-8 ${columnClasses[columns]}`}
        >
          {members.map((member, index) => (
            <TeamMember key={index} member={member} variant={variant} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TeamMember({ member, variant }) {
  const { name, role, image, bio, social = {} } = member;

  if (variant === 'simple') {
    return (
      <motion.div variants={itemVariants} className="text-center">
        <div className="mb-4">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />
          ) : (
            <Avatar name={name} size="2xl" className="mx-auto" />
          )}
        </div>
        <h3 className="font-semibold text-stone-900 dark:text-stone-100">{name}</h3>
        <p className="text-sm text-green-dark dark:text-green-light">{role}</p>
        <SocialLinks social={social} className="mt-3 justify-center" />
      </motion.div>
    );
  }

  // Default: cards
  return (
    <motion.div
      variants={itemVariants}
      className="p-6 rounded-xl bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 text-center"
    >
      <div className="mb-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-28 h-28 rounded-full mx-auto object-cover"
          />
        ) : (
          <Avatar name={name} size="2xl" className="mx-auto" />
        )}
      </div>
      <h3 className="font-semibold text-lg text-stone-900 dark:text-stone-100">{name}</h3>
      <p className="text-sm text-green-dark dark:text-green-light mb-2">{role}</p>
      {bio && (
        <p className="text-sm text-stone-600 dark:text-stone-400 mb-4">{bio}</p>
      )}
      <SocialLinks social={social} className="justify-center" />
    </motion.div>
  );
}

function SocialLinks({ social, className = '' }) {
  const icons = {
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  };

  const links = Object.entries(social).filter(([_, url]) => url);
  if (links.length === 0) return null;

  return (
    <div className={`flex gap-3 ${className}`}>
      {links.map(([platform, url]) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
        >
          {icons[platform] || null}
        </a>
      ))}
    </div>
  );
}

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const VARIANTS = {
  up: { hidden: { opacity: 0, y: 46 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -46 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -56 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 56 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.86 }, show: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
};

/**
 * Reveal — fades/slides a single element in as it scrolls into view.
 *   <Reveal direction="up" delay={0.1}>...</Reveal>
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  amount = 0.2,
  once = true,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={VARIANTS[direction] || VARIANTS.up}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * RevealGroup — staggers its RevealItem children in as the group enters view.
 *   <RevealGroup className="grid"><RevealItem>...</RevealItem>...</RevealGroup>
 */
export function RevealGroup({
  children,
  className = "",
  stagger = 0.12,
  amount = 0.15,
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{ show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, direction = "up", className = "" }) {
  return (
    <motion.div
      className={className}
      variants={VARIANTS[direction] || VARIANTS.up}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

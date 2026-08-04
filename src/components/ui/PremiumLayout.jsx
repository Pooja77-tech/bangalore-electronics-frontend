import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.58, ease: "easeOut" },
};

export const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, amount: 0.18 },
  transition: { staggerChildren: 0.08 },
};

export const itemReveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.46, ease: "easeOut" },
};

const merge = (...classes) => classes.filter(Boolean).join(" ");

export function PageShell({ children, className = "" }) {
  return (
    <section
      className={merge(
        "premium-page relative isolate min-h-screen overflow-hidden px-4 py-20 text-[var(--color-text)] sm:px-6 sm:py-24 lg:px-8 lg:py-28",
        className
      )}
    >
      {children}
    </section>
  );
}

export function Container({ children, className = "" }) {
  return (
    <div className={merge("relative z-10 mx-auto w-full max-w-7xl", className)}>
      {children}
    </div>
  );
}

export function SectionHeader({
  title,
  description,
  align = "left",
  className = "",
  titleClassName = "",
}) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : align === "right"
        ? "ml-auto text-right"
        : "";

  return (
    <motion.div
      {...fadeUp}
      className={merge("max-w-4xl", alignment, className)}
    >
      <h1
        className={merge(
          "text-5xl font-bold leading-[0.96] tracking-[-0.035em] text-[var(--color-text)] sm:text-6xl lg:text-7xl xl:text-8xl",
          titleClassName
        )}
      >
        {title}
      </h1>
      {description ? (
        <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

export function SurfaceCard({ children, className = "", ...motionProps }) {
  return (
    <motion.div
      {...motionProps}
      className={merge("premium-card rounded-[30px] p-6 sm:p-8", className)}
    >
      {children}
    </motion.div>
  );
}

export function PillLink({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
  ...props
}) {
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <ArrowRight className="premium-arrow h-4 w-4" /> : null}
    </>
  );

  const classes = merge("premium-button", className);

  if (to) {
    return (
      <Link to={to} data-variant={variant} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} data-variant={variant} className={classes} {...props}>
      {content}
    </a>
  );
}

export function TextLink({ to, href, children, className = "", ...props }) {
  const classes = merge(
    "premium-link inline-flex items-center gap-2 font-semibold text-[var(--color-accent)] transition hover:opacity-80",
    className
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight className="premium-arrow h-4 w-4" />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {content}
    </a>
  );
}

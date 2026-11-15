import { useState } from "react";
import { certificates, degrees, inProgress } from "../../lists/education";
import DegreeItem from "../DegreeItem";
import CertificateCard from "../CertificateCard";
import { motion } from "motion/react";
import { fade, viewPortValues } from "../../motion/variants";

const INITIAL_CERTS = 4;

export default function Education() {
  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll
    ? certificates
    : certificates.slice(0, INITIAL_CERTS);
  const hasMore = certificates.length > INITIAL_CERTS;

  return (
    <section id="education" className="flex flex-col gap-10">
      <motion.h2
        variants={fade()}
        initial="hidden"
        animate="visible"
        className="text-4xl font-semibold tracking-tight text-content"
      >
        Education
      </motion.h2>

      <motion.div variants={fade()}>
        <h3 className="text-xl font-semibold text-content">
          University Studies
        </h3>
        <div className="relative mt-6">
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-0 top-2 w-px bg-slate-700 lg:right-0 lg:w-full lg:h-px lg:-top-2"
          />
          <motion.ul
            variants={fade({ withStagger: true })}
            initial="hidden"
            whileInView="visible"
            viewport={viewPortValues}
            className="space-y-10 lg:grid lg:grid-cols-2"
          >
            {degrees.map((d) => (
              <DegreeItem key={d.title} item={d} />
            ))}
          </motion.ul>
        </div>
      </motion.div>

      <motion.div variants={fade()}>
        <h3 className="text-xl font-semibold text-content">
          Course Certificates
        </h3>
        <motion.ul
          variants={fade({ withStagger: true })}
          initial="hidden"
          whileInView="visible"
          viewport={viewPortValues}
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleCerts.map((c) => (
            <CertificateCard key={c.url} item={c} />
          ))}
        </motion.ul>
        {hasMore && (
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="mt-6 rounded-md border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            {showAll ? "Show less" : `Show all (${certificates.length})`}
          </button>
        )}
      </motion.div>

      <motion.div variants={fade()}>
        <h3 className="text-xl font-semibold text-content">Learning now</h3>
        <motion.ul
          variants={fade({ withStagger: true })}
          initial="hidden"
          whileInView="visible"
          viewport={viewPortValues}
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {inProgress.map((c) => (
            <CertificateCard key={c.title} item={c} />
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}

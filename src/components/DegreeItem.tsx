import type { DegreeType } from "../types";
import Badge from "./Badge";
import { motion } from "motion/react";
import { fade, viewPortValues } from "../motion/variants";
import useBreakpoints from "../hooks/useBreakpoints";

export default function DegreeItem({ item }: { item: DegreeType }) {
  const isDone = item.status === "done";
  const { isLg } = useBreakpoints();

  return (
    <motion.li
      variants={fade()}
      {...(!isLg && {
        initial: "hidden",
        whileInView: "visible",
        viewport: viewPortValues,
      })}
      className="relative pl-8 lg:p-0"
    >
      <span
        className={
          "absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full lg:left-1/2 -translate-x-1/2 lg:-top-1.5 " +
          (isDone ? "bg-completion" : "bg-accent")
        }
      />
      <span
        className={
          "absolute left-0 top-1.5 h-3.5 lg:left-1/2 -translate-x-1/2 lg:-top-3.5 w-1.5 rounded-full " +
          (isDone ? "bg-completion" : "bg-accent")
        }
      />
      <div className="text-start lg:flex lg:flex-col lg:items-center lg:text-center mt-4">
        <Badge
          color={item.status === "done" ? "completion" : "accent"}
          text={item.status === "done" ? "Completed" : "In Progress"}
        />
        <h4 className="text-lg font-semibold text-content">{item.title}</h4>
        <p className="mt-1 text-sm text-slate-400">
          {item.place}, {item.period}
        </p>
        <p className="mt-3 max-w-prose text-slate-300">{item.description}</p>
      </div>
      {item.topics && (
        <div className="flex gap-1 flex-wrap lg:justify-center mt-2">
          {item.topics.map((t) => (
            <Badge key={t} color="#fff" text={t} />
          ))}
        </div>
      )}
    </motion.li>
  );
}

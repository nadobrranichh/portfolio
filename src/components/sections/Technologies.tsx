import type { CSSProperties } from "react";
import { technologies } from "../../lists/technologies";

export default function Technologies() {
  return (
    <section id="technologies">
      <h2 className="text-4xl font-semibold tracking-tight text-content">
        Technologies I use:
      </h2>
      <div className="flex flex-col lg:flex-row flex-wrap gap-8 lg:gap-0 justify-around mt-10">
        {technologies.map((group) => (
          <div key={group.title}>
            <p className="text-content font-semibold mb-1 text-center">
              {group.title}
            </p>
            <div
              className="flex flex-wrap justify-center lg:grid lg:grid-flow-col gap-3"
              style={{
                gridTemplateRows: `repeat(${Math.min(4, group.items.length)}, auto)`,
              }}
            >
              {group.items.map((item) => (
                <div
                  key={item.name}
                  style={{ "--color-to-use": item.color } as CSSProperties}
                  className="flex flex-col items-center w-16 lg:w-auto"
                >
                  <div className="bg-(--color-to-use) rounded-md p-2 lg:p-4">
                    <item.icon className="size-5 lg:size-7 shrink-0 text-black" />
                  </div>
                  <p className="text-(--color-to-use) text-center text-xs lg:text-sm font-medium">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

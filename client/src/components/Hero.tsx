import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center">
      {/* Right: visual */}
      <div className="right w-full lg:w-[40%] flex items-center justify-center lg:justify-end order-1 lg:order-2">
        <div className="relative">
          <Image
            src="/hero.jpg"
            width={400}
            height={400}
            alt="Snail Tech team illustration"
            className="relative rounded-3xl shadow-2xl border border-border"
            priority={true}
          />
        </div>
      </div>

      {/* Left: contents */}
      <div className="left w-full lg:w-[60%] order-2 lg:order-1">
        <div className="bg-card/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-border">
          {/* Eyebrow */}
          <div className="flex items-center mb-6">
            <div className="h-1 w-12 bg-primary rounded-full mr-4"></div>
            <p
              style={{ fontWeight: 200, letterSpacing: 3 }}
              className="text-sm font-semibold text-muted-foreground uppercase tracking-wider"
            >
              Meet the Team
            </p>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Snail</span>{" "}
            <span className="text-foreground">Tech</span>
          </h1>

          {/* Roles badges */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                2× Full-stack Dev
              </span>
              <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                QA Engineer
              </span>
              <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                UI/UX & PM
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-lg text-justify">
            We are a compact team of four: two Full‑stack Developers, one QA
            Engineer, and one UI/UX Designer who also serves as Project Manager.
            We build end‑to‑end web products with high quality standards, fast
            iteration, and user‑centered design.
          </p>

          {/* CTAs */}
          <div className="flex justify-between sm:justify-normal gap-4 mt-8">
            <a
              href="#contact"
              className="cursor-pointer text-center bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-200 shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="#projects"
              className="cursor-pointer text-center border border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  Heart,
  Sparkles,
  Users,
  Lightbulb,
  Target,
  Handshake,
  ArrowRight,
} from "lucide-react";
import campFarewell from "@/assets/camp-farewell.jpg";
import reflectivePortrait from "@/assets/reflective-portrait.jpg";

const lessons = [
  {
    icon: Lightbulb,
    title: "Turning ideas into reality",
    description:
      "An idea in your head is only the beginning. The art is bringing it to life step by step.",
  },
  {
    icon: Target,
    title: "Problem validation",
    description:
      "Understand the problem first, then seek a solution. Talk to users—the first step.",
  },
  {
    icon: Sparkles,
    title: "Pitching",
    description:
      "Explain your idea to the world in 3 minutes. Simple words, big meaning.",
  },
  {
    icon: Handshake,
    title: "Working as a team",
    description: "Alone you move fast; with a team, you go far.",
  },
];

const mentors = [
  "Alisher Sadullayev Zafarovich",
  "Abdulaziz Yakubov",
  "Orzugul Umarovna",
  "Azizbek Kurbonov",
  "Alisher Alimov",
  "Gulasal Butaeva",
  "Firdavs O'rinov",
];

export default function CampConclusion() {
  return (
    <section
      id="conclusion"
      aria-labelledby="conclusion-title"
      className="relative min-h-screen bg-gradient-sunset py-16 md:py-24"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm tracking-wide uppercase mb-4">
            <Heart className="w-4 h-4" aria-hidden="true" />
            <span>Personal Experience</span>
          </span>
          <h2
            id="conclusion-title"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6"
          >
            Conclusion: A journey that began in Fergana —{" "}
            <span className="text-gradient-warm">7 days of growth</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Camp experience • 7 days • Personal growth
          </p>
        </header>

        {/* Main Story */}
        <article
          className="bg-card rounded-2xl shadow-elevated p-6 md:p-10 lg:p-12 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 first-letter:text-5xl first-letter:font-display first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              When my father said, "Yes, go and come back," my heart was mixed
              with excitement and anxiety—as an ordinary student from Oltiariq
              district, I felt how big a step this trip was. When I arrived at
              the camp, most people were from the "presidential school"—I felt
              a bit out of place. But from the first night in our four-person
              dorm, that feeling began to fade: we were all young people
              striving toward one goal.
            </p>

            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6">
              Every day brought new topics, new skills: information about
              universities, ML fundamentals, shaping startup ideas, the art of
              pitching, and most importantly—working as a team. At the
              beginning, I knew very little about startups, but over these 7
              days I{" "}
              <strong className="text-primary">
                learned how to turn ideas into reality
              </strong>
              ,{" "}
              <strong className="text-primary">
                identify the problem correctly
              </strong>
              ,{" "}
              <strong className="text-primary">
                explain my idea in three minutes
              </strong>{" "}
              and{" "}
              <strong className="text-primary">
                achieve results together as a team
              </strong>
              .
            </p>

            <p className="text-foreground text-lg md:text-xl leading-relaxed">
              Our mentors—Alisher Sadullayev Zafarovich, Abdulaziz Yakubov,
              Orzugul Umarovna, Azizbek Kurbonov, Alisher Alimov, Gulasal
              Butaeva, Firdavs O'rinov, and the entire{" "}
              <strong>Startup Ambassadors</strong> and{" "}
              <strong>Yoshlar Ventures</strong> team—gave me not only knowledge
              but also confidence. They said, "You can do it too"—and I believed
              it.
            </p>
          </div>
        </article>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.title}
              className="group bg-card hover:bg-secondary/50 rounded-xl p-6 shadow-warm transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <lesson.icon
                    className="w-6 h-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {lesson.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <figure
            className="relative overflow-hidden rounded-2xl shadow-elevated group animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <img
              src={campFarewell}
              alt="Farewell scene at camp — participants hugging in the evening sunlight"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 text-primary-foreground text-sm">
              A farewell moment—friendship lasts forever
            </figcaption>
          </figure>

          <figure
            className="relative overflow-hidden rounded-2xl shadow-elevated group animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <img
              src={reflectivePortrait}
              alt="A young participant thinking about the future — a reflective moment by a window"
              className="w-full h-64 md:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 text-primary-foreground text-sm">
              Confidence in the future—the biggest gift this camp gave me
            </figcaption>
          </figure>
        </div>

        {/* Future Plans */}
        <div
          className="bg-gradient-hope rounded-2xl p-8 md:p-12 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="flex items-start gap-4 mb-6">
            <Users
              className="w-8 h-8 text-primary flex-shrink-0"
              aria-hidden="true"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
                Looking ahead
              </h3>
              <p className="text-foreground text-lg leading-relaxed">
                Now I want to put what I've learned into practice. Building
                startups, supporting young people in my region, and solving real
                problems through technology—this is my path.{" "}
                <span className="font-semibold text-primary">
                  An ordinary student from Oltiariq now aims for big dreams
                </span>{" "}
                —and this camp helped me take the first step.
              </p>
            </div>
          </div>
        </div>

        {/* Gratitude Section */}
        <aside
          className="text-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-muted-foreground mb-4">Special thanks:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {mentors.map((mentor) => (
              <span
                key={mentor}
                className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {mentor}
              </span>
            ))}
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Startup Ambassadors
            </span>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Yoshlar Ventures
            </span>
          </div>
        </aside>

        {/* CTA */}
        <div
          className="text-center animate-fade-in-up"
          style={{ animationDelay: "0.9s" }}
        >
          <p className="text-foreground text-lg md:text-xl mb-6 font-serif italic">
            "Every great journey begins with a single step. My step was this
            camp."
          </p>
          <p className="text-muted-foreground text-sm mt-4">
            Bring your own idea to life—we'll help.
          </p>
        </div>
      </div>
    </section>
  );
}

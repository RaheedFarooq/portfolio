import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";

const LINKS = {
  email: "mailto:raheedfarooq65@gmail.com",
  github: "https://github.com/RaheedFarooq",
  linkedin: "https://de.linkedin.com/in/raheed-farooq",
  voyager: "https://voyager-rouge-nine.vercel.app",
  voyagerSrc: "https://github.com/RaheedFarooq/Voyager",
  shark: "https://github.com/RaheedFarooq/shark",
};

const SHARK_ARTIFACT = `<span class="t">// sample output: the scorecard</span>
CONCEPT
Core insight        <span class="bar">████████▌░</span>  <span class="num-v">8.5</span>
Retention today     <span class="bar">███░░░░░░░</span>  <span class="num-v">3.0</span>
EXECUTION
Craft               <span class="bar">█████████░</span>  <span class="num-v">9.0</span>
MARKET
Shareability        <span class="bar">██░░░░░░░░</span>  <span class="num-v">2.0</span>
<div class="verdict"><b>Verdict:</b> concept 8, execution 6. The gap is closable. I'm in on the product, out on the business. Ship deep links first.</div>`;

const CUSTOMAPIS_ARTIFACT = `<span class="c">// the input: describe your shape</span>
{
  <span class="k">"length"</span>: <span class="n">5</span>,
  <span class="k">"name"</span>:  { <span class="k">"type"</span>: <span class="s">"STRING"</span> },
  <span class="k">"age"</span>:   { <span class="k">"type"</span>: <span class="s">"INTEGER"</span> },
  <span class="k">"bio"</span>:   { <span class="k">"type"</span>: <span class="s">"TEXT"</span>, <span class="k">"min"</span>: <span class="n">20</span>, <span class="k">"max"</span>: <span class="n">40</span> },
  <span class="k">"tags"</span>:  { <span class="k">"type"</span>: <span class="s">"ARRAY"</span>, <span class="k">"of"</span>: <span class="s">"integer"</span>, <span class="k">"length"</span>: <span class="n">5</span> },
  <span class="k">"address"</span>: {
    <span class="k">"type"</span>: <span class="s">"OBJECT"</span>,
    <span class="k">"properties"</span>: {
      <span class="k">"street"</span>: { <span class="k">"type"</span>: <span class="s">"TEXT"</span> },
      <span class="k">"geo"</span>:    { <span class="k">"type"</span>: <span class="s">"OBJECT"</span>, <span class="k">"properties"</span>: { <span class="k">"lat"</span>: { <span class="k">"type"</span>: <span class="s">"DECIMAL"</span> } } }
    }
  },
  <span class="k">"status"</span>: { <span class="k">"type"</span>: <span class="s">"CUSTOM"</span>, <span class="k">"value"</span>: <span class="s">"active"</span> }
}
<span class="c">// → live endpoints, generated from this shape</span>`;

const DESIGN_WORKS = [
  { src: "/design/gsl-poster.jpg", alt: "Girls Sports League launch poster" },
  { src: "/design/winter-games.jpg", alt: "IBA Winter Games badge poster" },
  { src: "/design/iss-launch.jpg", alt: "IBA Sports Society launch poster" },
  { src: "/design/k-league.jpg", alt: "K League identity mark" },
  { src: "/design/ozil.jpg", alt: "Mesut Özil poster edit" },
  { src: "/design/asensio.jpg", alt: "Marco Asensio poster edit" },
];

export default function Home() {
  const years = new Date().getFullYear() - 2019;

  return (
    <div className="wrap">
      <div className="top">
        <div className="id">
          <div className="avatar">RF</div>
          <div>
            <b>Raheed Farooq</b>
            <span>Full-Stack Engineer · Berlin</span>
          </div>
        </div>
        <a className="cta" href={LINKS.linkedin} target="_blank" rel="noopener">
          Get in touch
        </a>
      </div>

      <div className="bento">
        <Reveal className="cell hero">
          <div className="lbl">About</div>
          <h1>
            I build high-traffic <em>TypeScript</em> products, end to end.
          </h1>
          <p>
            React/Next.js front-ends, Node.js services, and the data &
            observability layers underneath. Drawn to the hard parts:{" "}
            <b>payments & billing</b>, <b>event-driven systems</b>,{" "}
            <b>ETL pipelines</b>, and the monitoring around them.
          </p>
        </Reveal>

        <Reveal className="cell status">
          <div className="lbl">Status</div>
          <div className="big">
            <span className="dot"></span>Shipping
            <small>Berlin · UTC+1 · since 2019</small>
          </div>
          <div>
            <div className="row">
              <span>Current focus</span>
              <b>Booking & loyalty infra</b>
            </div>
            <div className="row">
              <span>Freelance network</span>
              <b>Toptal-vetted</b>
            </div>
            <div className="row">
              <span>Open to</span>
              <b>Interesting problems</b>
            </div>
          </div>
        </Reveal>

        <Reveal className="cell nums">
          <div className="num">
            <b>{years}+</b>
            <span>years shipping</span>
          </div>
          <div className="num">
            <b>10+</b>
            <span>products & projects shipped</span>
          </div>
          <div className="num">
            <b>5</b>
            <span>industries served</span>
          </div>
          <div className="num">
            <b>2</b>
            <span>countries · Karachi → Berlin</span>
          </div>
          <div className="num">
            <b>3</b>
            <span>languages spoken</span>
          </div>
          <div className="num">
            <b>Top 3%</b>
            <span>Toptal network</span>
          </div>
        </Reveal>

        <div className="divider">
          <h2>
            Engineering <em>stories</em>
          </h2>
          <p>A closer look at some of the work: what the problem was and how it got solved.</p>
        </div>

        <Reveal className="cell story">
          <h3>
            <span className="tagno">CASE 01 · PAYMENTS</span>Owning the money
            path
          </h3>
          <p>
            Subscription billing has a lot of ways to go wrong: renewals that
            half-complete, webhooks that arrive twice, membership states that
            drift away from what was actually paid. I integrated <b>Chargebee</b>{" "}
            and handled the <b>full webhook lifecycle</b> (renewals, failures,
            cancellations, state sync) so the state customers see stays in
            line with what was billed.
          </p>
          <div className="out">
            Outcome → <b>billing that stays correct</b>, including the edge
            cases.
          </div>
        </Reveal>

        <Reveal className="cell story s2">
          <h3>
            <span className="tagno">CASE 02 · EVENT-DRIVEN</span>Rewards as a
            state machine
          </h3>
          <p>
            Turning a booking into loyalty points involves several steps that
            can each fail or repeat. I modelled the booking-to-points lifecycle
            as an explicit <b>state machine</b>, with{" "}
            <b>idempotent third-party crediting</b>, so that retries, replays
            and race conditions don&apos;t lead to duplicate awards.
          </p>
          <div className="out">
            Outcome → <b>retries and replays are safe</b>; duplicate awards
            don&apos;t happen.
          </div>
        </Reveal>

        <Reveal className="cell story s3">
          <h3>
            <span className="tagno">CASE 03 · OBSERVABILITY</span>Seeing in the
            dark
          </h3>
          <p>
            I instrumented the platform with <b>Datadog</b> for monitoring and
            logging and <b>PostHog</b> for product events, and built{" "}
            <b>ETL pipelines</b> that bring affiliate lead & sales data into{" "}
            <b>BigQuery</b> for the finance team&apos;s analytics. Failures show
            up in dashboards rather than in support tickets.
          </p>
          <div className="out">
            Outcome → problems get noticed early, and{" "}
            <b>decisions are based on real data</b>.
          </div>
        </Reveal>

        <Reveal className="cell story s4">
          <h3>
            <span className="tagno">CASE 04 · TEAM</span>Rebuilding how we hire
          </h3>
          <p>
            Our hiring process wasn&apos;t telling us much about how someone
            would actually do the job. I redesigned it end to end: reworked
            the <b>coding challenge</b>, added a <b>system-design round</b>,
            and restructured the interviews into focused stages. I also
            conducted interviews to help shape the hiring decisions.
          </p>
          <div className="out">
            Outcome → interviews that <b>reflect the actual day-to-day work</b>.
          </div>
        </Reveal>

        <div className="divider">
          <h2>
            Selected <em>work</em>
          </h2>
          <p>Built nights and weekends. Voyager is live, if you&apos;d like to poke around.</p>
        </div>

        <Reveal className="cell proj-deep">
          <div className="proj-copy">
            <div className="lbl">Project 01 · Live</div>
            <h3>Voyager</h3>
            <p>
              An interactive 3D globe of world history: scrub through{" "}
              <b>5,000 years</b> and see who was alive, anywhere on Earth, at
              any moment. <b>The design came first</b>: the whole look, from
              art direction to typography, was settled before any code was
              written.
            </p>
            <ul>
              <li>
                A <b>hand-vetted dataset</b> of 1,000+ historical figures &
                dynasties
              </li>
              <li>
                <b>Procedural WebGL landmarks</b>: low-poly monuments built
                from a parts kit
              </li>
              <li>
                Antique-atlas art direction: sepia cartography, wireframe
                globe, hand-tuned serif type
              </li>
              <li>
                React · TypeScript · Three.js (react-three-fiber) · Zustand ·
                on-demand rendering
              </li>
            </ul>
            <div className="links">
              <a href={LINKS.voyager} target="_blank" rel="noopener">
                open live ↗
              </a>
              <a href={LINKS.voyagerSrc} target="_blank" rel="noopener">
                source
              </a>
            </div>
          </div>
          <div className="proj-visual">
            <iframe
              src={LINKS.voyager}
              loading="lazy"
              title="Voyager live demo"
            />
            <div className="cap">live embed · voyager-rouge-nine.vercel.app</div>
          </div>
        </Reveal>

        <Reveal className="cell proj-deep flip">
          <div className="proj-copy">
            <div className="lbl">Project 02 · Open source</div>
            <h3>Shark</h3>
            <p>
              A brutally honest AI product evaluator for Claude Code. Pitch it
              your idea; it asks the questions that move scores, then returns a{" "}
              <b>verdict-first teardown</b>: concept vs. execution, market fit,
              and what to build first.
            </p>
            <ul>
              <li>
                Scored ASCII scorecards across concept, execution, market &
                growth
              </li>
              <li>
                <b>Mentor mode</b>: researches the real competitive landscape,
                then builds an action plan
              </li>
              <li>
                Installable as a Claude Code skill or plugin marketplace, one
                command
              </li>
            </ul>
            <div className="links">
              <a href={LINKS.shark} target="_blank" rel="noopener">
                source ↗
              </a>
            </div>
          </div>
          <div className="proj-visual">
            <pre
              className="artifact"
              dangerouslySetInnerHTML={{ __html: SHARK_ARTIFACT }}
            />
          </div>
        </Reveal>

        <Reveal className="cell proj-deep">
          <div className="proj-copy">
            <div className="lbl">Project 03 · Tool</div>
            <h3>CustomApis</h3>
            <p>
              A schema-based <b>mock API generator</b>: describe the shape of
              your data, get live mock endpoints to develop against. Built to
              unblock front-end work while the real backend is still being
              built. Node.js + Firestore behind, React + Tailwind in front.
            </p>
          </div>
          <div className="proj-visual">
            <pre
              className="artifact"
              dangerouslySetInnerHTML={{ __html: CUSTOMAPIS_ARTIFACT }}
            />
          </div>
        </Reveal>

        <div className="divider">
          <h2>
            Also <em>built</em>
          </h2>
          <p>Client work & earlier projects.</p>
        </div>

        <Reveal className="cell mini">
          <div className="lbl">Client · Lead</div>
          <h4>Scout</h4>
          <p>
            Activity management app for working parents. Led the front-end:
            feature estimation, team coordination, delivery.
          </p>
          <div className="role">React · Team Lead</div>
        </Reveal>
        <Reveal className="cell mini">
          <div className="lbl">Client</div>
          <h4>Litterati</h4>
          <p>
            Environmental platform fighting litter with data. Full-stack work
            with a backend focus: APIs, AWS Lambda functions, and React
            dashboards with data visualisations.
          </p>
          <div className="role">Full-stack · Backend-lean · AWS</div>
        </Reveal>
        <Reveal className="cell mini">
          <div className="lbl">Product</div>
          <h4>WeFetch</h4>
          <p>
            Appointment scheduling for veterinary clinics, with a React admin
            dashboard on a Node/Sails.js API.
          </p>
          <div className="role">Full-stack</div>
        </Reveal>
        <Reveal className="cell mini">
          <div className="lbl">Product · Travel</div>
          <h4>Suitespot</h4>
          <p>
            Luxury-hotel booking platform spun out of reisetopia: 4,200+
            hotels worldwide with VIP benefits on every booking. Core platform
            engineering across booking, billing and rewards.
          </p>
          <div className="role">TypeScript · Next.js · Full-stack</div>
        </Reveal>

        <div className="divider">
          <h2>
            The <em>record</em>
          </h2>
          <p>Where, and what actually got done there.</p>
        </div>

        <Reveal className="cell xp wide">
          <div className="xp-main">
            <div className="lbl">2023 → now</div>
            <div className="co">
              <h3>reisetopia</h3>
              <span className="when">Berlin</span>
            </div>
            <div className="about-co">
              Berlin travel-tech, the company behind suitespot (luxury-hotel
              bookings with VIP benefits) and a growing finance product.
            </div>
            <div className="role">TypeScript Fullstack Engineer</div>
            <ul>
              <li>
                <b>Hotel booking & reservations</b> via the Sabre GDS API
              </li>
              <li>
                <b>Subscription membership billing</b> built on Chargebee,
                covering the full webhook lifecycle: renewals, failures, state
                sync
              </li>
              <li>
                <b>Rewards state machine</b> with idempotent third-party
                crediting
              </li>
              <li>
                ETL pipelines → <b>BigQuery</b> for the finance product&apos;s
                analytics
              </li>
              <li>
                <b>Salesforce sync</b> via jsforce, so bookings become
                Opportunities automatically
              </li>
            </ul>
          </div>
          <div className="xp-extra">
            <div className="lbl">Beyond the code</div>
            <ul>
              <li>
                Redesigned the <b>engineering hiring process</b>: new
                challenge, system-design round, staged interviews
              </li>
              <li>
                Set <b>engineering standards</b>; led architecture decisions
                across the team
              </li>
              <li>
                Instrumented the platform with <b>Datadog + PostHog</b>:
                monitoring, logging, product events
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal className="cell xp">
          <div className="lbl">2021 → 2023</div>
          <div className="co">
            <h3>Filestage</h3>
            <span className="when">Remote (DE)</span>
          </div>
          <div className="about-co">
            B2B SaaS where marketing & creative teams review and approve
            content.
          </div>
          <div className="role">JS Fullstack Engineer</div>
          <ul>
            <li>
              <b>Event automation</b>: user-configured triggers advance
              projects & notify collaborators
            </li>
            <li>
              AngularJS → <b>React migration</b> within a monorepo
            </li>
            <li>
              Real-time backend on <b>WebSockets</b>; stabilised a flaky
              Jest/Playwright suite
            </li>
          </ul>
        </Reveal>

        <Reveal className="cell xp">
          <div className="lbl">2019 → 2021</div>
          <div className="co">
            <h3>Creative Chaos</h3>
            <span className="when">Karachi</span>
          </div>
          <div className="about-co">
            Software consultancy building and scaling products for US-based
            clients, Litterati and Scout among them.
          </div>
          <div className="role">Software Engineer ← Associate</div>
          <ul>
            <li>
              Data-intensive <b>analytics dashboard</b>: React charting over
              PostgreSQL with an <b>AWS RedShift data lake</b>
            </li>
            <li>
              Independent <b>Open Data platform</b>: GraphQL API on Apollo
              Server, Apollo Client on React
            </li>
            <li>
              Serverless workflows on <b>AWS Lambda</b>; technical concept docs
              & estimates
            </li>
          </ul>
        </Reveal>

        <div className="divider">
          <h2>
            What people <em>say</em>
          </h2>
          <p>LinkedIn recommendations, quoted as written.</p>
        </div>

        <Reveal className="cell voice">
          <div className="lbl">Recommendation</div>
          <div className="q">
            Raheed consistently delivered high-quality code… his expertise in
            end-to-end testing was particularly impressive, and his dedication
            to ensuring the reliability and stability of our software was
            invaluable. His good sense of humor and pleasant demeanor made him
            a joy to work with.
          </div>
          <div className="who">
            <b>Elio Capella</b>Head of Development, Filestage
          </div>
        </Reveal>
        <Reveal className="cell voice">
          <div className="lbl">Recommendation</div>
          <div className="q">
            His technical skills are outstanding, encompassing both front-end
            and back-end technologies. What truly sets him apart is his
            exceptional empathy, enabling him to understand and address the
            needs of clients and end-users in the solutions he creates.
          </div>
          <div className="who">
            <b>Klaas Hermans</b>Product Manager, Filestage
          </div>
        </Reveal>
        <Reveal className="cell voice">
          <div className="lbl">Network</div>
          <div className="q plain">
            Vetted member of the <b>Toptal</b> freelance network, screened for
            technical skill and communication, among the top tier of
            applicants.
          </div>
          <div className="who">
            <b>Toptal</b>TypeScript Engineer · since 2022
          </div>
        </Reveal>

        <div className="divider">
          <h2>
            The <em>backstory</em>
          </h2>
          <p>Design first, software second, and life outside both.</p>
        </div>

        <Reveal className="cell backstory">
          <div className="lbl">Before code</div>
          <p>
            Before software, I was a graphic designer. I led design for my
            university&apos;s sports society (event branding, league
            identities, launch posters) and ran <b>Fanaticks</b>, a
            football-screening community in Karachi, designing most of its
            match posters myself. At some point, building the things I was
            designing became more interesting than designing them. But the eye
            stayed. It&apos;s why <b>Voyager</b> looks the way it does.
          </p>
          <Gallery works={DESIGN_WORKS} />
        </Reveal>

        <Reveal className="cell offclock">
          <div className="lbl">Off the clock</div>
          <div className="row">
            <span>Football</span>
            <b>Watching & playing</b>
          </div>
          <div className="row">
            <span>Family</span>
            <b>Husband & father</b>
          </div>
          <div className="row">
            <span>Home</span>
            <b>Berlin</b>
          </div>
        </Reveal>

        <div className="divider">
          <h2>
            How I <em>work</em>
          </h2>
        </div>

        <Reveal className="cell prin">
          <h4>Instrument everything</h4>
          <p>
            I like knowing how a system is doing before anyone has to report a
            problem. To me, monitoring and logging are part of building the
            feature itself.
          </p>
        </Reveal>
        <Reveal className="cell prin">
          <h4>Own the hard parts</h4>
          <p>
            Payments, retries, race conditions: the unglamorous work where
            products actually break. I&apos;ve come to genuinely enjoy it.
          </p>
        </Reveal>
        <Reveal className="cell prin">
          <h4>Boring over clever</h4>
          <p>
            Code gets read by tired people under pressure. I&apos;d rather
            write something plain and predictable than something clever.
          </p>
        </Reveal>
        <Reveal className="cell prin">
          <h4>Raise the bar</h4>
          <p>
            Good standards, honest reviews and better hiring help the whole
            team move faster, and the effect adds up over time.
          </p>
        </Reveal>

        <Reveal className="cell stack">
          <div className="lbl">Toolkit</div>
          <div className="groups">
            <div>
              <h4>Core</h4>
              <ul>
                <li className="hi">TypeScript</li>
                <li className="hi">React / Next.js</li>
                <li className="hi">Node.js</li>
                <li>GraphQL · Express</li>
                <li>Angular · PHP</li>
              </ul>
            </div>
            <div>
              <h4>Data</h4>
              <ul>
                <li className="hi">PostgreSQL</li>
                <li>MySQL · MongoDB</li>
                <li className="hi">BigQuery</li>
                <li>RedShift</li>
              </ul>
            </div>
            <div>
              <h4>Ops</h4>
              <ul>
                <li className="hi">Datadog</li>
                <li>Sentry · PostHog</li>
                <li>Docker · AWS</li>
                <li>GH Actions · Jenkins</li>
              </ul>
            </div>
            <div>
              <h4>Quality</h4>
              <ul>
                <li className="hi">Jest · Playwright</li>
                <li>Redux · Zustand</li>
                <li>React Query</li>
                <li>Storybook</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="cell meta">
          <div className="lbl">Details</div>
          <div className="row">
            <span>Location</span>
            <b>Berlin, Germany</b>
          </div>
          <div className="row">
            <span>Education</span>
            <b>BSc Computer Science, IBA</b>
          </div>
          <div className="row">
            <span>English</span>
            <b>Full professional</b>
          </div>
          <div className="row">
            <span>Urdu</span>
            <b>Native</b>
          </div>
          <div className="row">
            <span>German</span>
            <b>Basic (learning)</b>
          </div>
        </Reveal>

        <Reveal className="cell contact">
          <h2>
            Have a hard problem? <em>Let&apos;s talk.</em>
          </h2>
          <p>Payments, pipelines, event-driven systems. The messier, the better.</p>
          <div className="btns">
            <a className="btn pri" href={LINKS.email}>
              raheedfarooq65@gmail.com
            </a>
            <a className="btn sec" href={LINKS.github} target="_blank" rel="noopener">
              GitHub
            </a>
            <a className="btn sec" href={LINKS.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>

      <footer>© {new Date().getFullYear()} Raheed Farooq · Berlin</footer>
    </div>
  );
}

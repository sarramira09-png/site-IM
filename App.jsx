import { useEffect } from "react";
import "./App.css"; // put your CSS in this file

export default function App() {
  useEffect(() => {
    // 1. Scroll-reveal: adds .in-view to .fade-up etc. when they enter the viewport
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document
      .querySelectorAll(".fade-up, .fade-left, .fade-right, .scale-up")
      .forEach((el) => revealIO.observe(el));

    // 2. Drawer images: slide down (.open) when their section scrolls into view.
    // We observe the clipping parent (.drawer), because the image itself starts
    // translated out of view and would never count as intersecting.
    const drawerIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelector("[data-drawer]")?.classList.add("open");
            drawerIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll(".drawer").forEach((el) => drawerIO.observe(el));

    // 3. Drag-to-scroll gallery
    const track = document.getElementById("gallery");
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onDown = (e) => {
      isDown = true;
      track.style.cursor = "grabbing";
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };
    const onEnd = () => {
      isDown = false;
      track.style.cursor = "grab";
    };
    const onMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      track.scrollLeft = scrollLeft - (x - startX) * 1.4;
    };

    track?.addEventListener("mousedown", onDown);
    track?.addEventListener("mouseleave", onEnd);
    track?.addEventListener("mouseup", onEnd);
    track?.addEventListener("mousemove", onMove);

    return () => {
      revealIO.disconnect();
      drawerIO.disconnect();
      track?.removeEventListener("mousedown", onDown);
      track?.removeEventListener("mouseleave", onEnd);
      track?.removeEventListener("mouseup", onEnd);
      track?.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      {/* ================= HAMMAMET ================= */}
      <section className="dest" id="hammamet">
        <div className="drawer">
          <div className="drawer-img" data-drawer>
            <img
              src="/blue.jpg"
              alt="Traditional whitewashed medina walls with blue accents"
            />
            <div className="drawer-overlay"></div>
            <div className="drawer-label">
              <span className="drawer-num">01</span>
              <span className="drawer-title">Hammamet</span>
            </div>
          </div>
        </div>

        <div className="dest-body">
          <div className="fade-up">
            <span className="dest-tag">Beach · Medina · History</span>
          </div>
          <h2 className="dest-h2 fade-up" style={{ "--delay": ".08s" }}>
            Hammamet<em>حمّامات</em>
          </h2>
          <p className="dest-lead fade-up" style={{ "--delay": ".14s" }}>
            Tunisia's most iconic resort where whitewashed medina walls tumble
            into golden sand on the Gulf of Hammamet. Beloved by writers and
            artists since the 1920s, it blends Andalusian heritage with the
            finest Mediterranean leisure.
          </p>

          <div className="cards">
            <div className="card fade-up" style={{ "--delay": ".0s" }}>
              <h3>Golden Beaches</h3>
              <p>
                Kilometres of fine white sand and warm turquoise water — some of
                North Africa's finest swimming.
              </p>
            </div>
            <div className="card fade-up" style={{ "--delay": ".08s" }}>
              <h3>Ancient Medina</h3>
              <p>
                A labyrinth of jasmine-lined alleys, artisan workshops and a
                dramatic seaside kasbah dating to the 9th century.
              </p>
            </div>
            <div className="card fade-up" style={{ "--delay": ".16s" }}>
              <h3>Sebastian Villa</h3>
              <p>
                An Art Deco masterpiece once visited by Churchill and
                Eisenhower. Now the International Cultural Centre.
              </p>
            </div>
            <div className="card fade-up" style={{ "--delay": ".24s" }}>
              <h3>Yasmine Marina</h3>
              <p>
                The modern resort district — luxury hotels, a marina, waterparks
                and vibrant waterfront dining.
              </p>
            </div>
          </div>

          <div className="mosaic fade-up" style={{ "--delay": ".08s" }}>
            <div className="mosaic-photo mosaic-tall">
              <img src="/door.jpg" alt="Traditional Tunisian door and architecture" />
              <div className="mosaic-photo-lbl">The Medina</div>
            </div>
            <div className="mosaic-col">
              <div className="mosaic-photo">
                <img src="/boats.jpg" alt="Fishing boats on the Mediterranean coast" />
                <div className="mosaic-photo-lbl">Fishing Boats</div>
              </div>
              <div className="mosaic-photo">
                <img src="/golf.jpg" alt="Turquoise Mediterranean Sea" />
                <div className="mosaic-photo-lbl">Gulf of Hammamet</div>
              </div>
            </div>
          </div>

          <div className="info-band fade-up" style={{ "--delay": ".1s" }}>
            <div className="info-cell">
              <strong>Best Time</strong>
              <span>April – October</span>
            </div>
            <div className="info-cell">
              <strong>From Tunis</strong>
              <span>65 km · 1 hour</span>
            </div>
            <div className="info-cell">
              <strong>Must Eat</strong>
              <span>Brik &amp; Couscous Poisson</span>
            </div>
            <div className="info-cell">
              <strong>Don't Miss</strong>
              <span>Kasbah at sunset</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <div className="quote-section">
        <div className="quote-inner">
          <p className="quote-text fade-up">
            Hammamet is a place where time dissolves into the colour of the sea.
          </p>
          <p className="quote-cite fade-up" style={{ "--delay": ".1s" }}>
            — André Gide, Nobel Laureate in Literature
          </p>
        </div>
      </div>

      {/* ================= KELIBIA ================= */}
      <section className="dest dest-dark" id="kelibia">
        <div className="drawer">
          <div className="drawer-img" data-drawer>
            <img src="/klebia.jpg" alt="Coastal fortress ruins near the sea" />
            <div className="drawer-overlay"></div>
            <div className="drawer-label">
              <span className="drawer-num">02</span>
              <span className="drawer-title">Kelibia</span>
            </div>
          </div>
        </div>

        <div className="dest-body">
          <div className="fade-up">
            <span className="dest-tag">Fortress · Sea · Seafood</span>
          </div>
          <h2 className="dest-h2 fade-up" style={{ "--delay": ".08s" }}>
            Kelibia<em>قليبية</em>
          </h2>
          <p className="dest-lead fade-up" style={{ "--delay": ".14s" }}>
            At the very tip of Cap Bon, Kelibia is raw, authentic and
            breathtaking. A Byzantine fortress crowns a 150-metre volcanic
            cliff. Below it: one of Tunisia's finest beaches, a working fishing
            harbour, and legendary Muscat wine unique to this coast.
          </p>

          <div className="cards">
            <div className="card fade-up" style={{ "--delay": ".0s" }}>
              <h3>Byzantine Fortress</h3>
              <p>
                Tunisia's largest preserved citadel, with Carthaginian origins
                in the 5th century BC. Views can reach Sicily on clear days.
              </p>
            </div>
            <div className="card fade-up" style={{ "--delay": ".08s" }}>
              <h3>Fishing Harbour</h3>
              <p>
                Watch traditional wooden boats unload the morning catch. Eat the
                freshest seafood at simple tables steps from the water.
              </p>
            </div>
            <div className="card fade-up" style={{ "--delay": ".16s" }}>
              <h3>Mansoura Beach</h3>
              <p>
                A flawless crescent of turquoise water and white sand —
                consistently among the Mediterranean's most beautiful beaches.
              </p>
            </div>
            <div className="card fade-up" style={{ "--delay": ".24s" }}>
              <h3>Muscat de Kelibia</h3>
              <p>
                A unique sweet white wine produced only on Cap Bon — golden,
                aromatic and found nowhere else in the world.
              </p>
            </div>
          </div>

          <div
            className="mosaic fade-up"
            style={{ "--delay": ".08s", gridTemplateColumns: "1fr 1.55fr" }}
          >
            <div className="mosaic-col">
              <div className="mosaic-photo">
                <img
                  src="/klebia.jpg"
                  alt="Clear turquoise Mediterranean water breaking on beach"
                />
                <div className="mosaic-photo-lbl">Crystal Water</div>
              </div>
              <div className="mosaic-photo">
                <img
                  src="/boatklebia.jpg"
                  alt="Mediterranean fishing harbour with boats"
                />
                <div className="mosaic-photo-lbl">The Harbour</div>
              </div>
            </div>
            <div className="mosaic-photo mosaic-tall">
              <img src="/Tunisia.kelibia.jpg" alt="Mediterranean coastal horizon" />
              <div className="mosaic-photo-lbl">Cap Bon Horizon</div>
            </div>
          </div>

          <div className="info-band fade-up" style={{ "--delay": ".1s" }}>
            <div className="info-cell">
              <strong>Best Time</strong>
              <span>June – September</span>
            </div>
            <div className="info-cell">
              <strong>From Tunis</strong>
              <span>110 km · 1.5 hours</span>
            </div>
            <div className="info-cell">
              <strong>Must Drink</strong>
              <span>Muscat de Kelibia</span>
            </div>
            <div className="info-cell">
              <strong>Don't Miss</strong>
              <span>Fortress at dusk</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <div className="gallery-section">
        <p className="gallery-heading fade-up">The Cap Bon Experience</p>
        <div className="gallery-track" id="gallery">
          <figure className="gallery-item">
            <img src="/pottery.jpg" alt="Artisan pottery" />
            <figcaption>Artisan Pottery</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="/cuisine.jpg" alt="Coastal cuisine" />
            <figcaption>Coastal Cuisine</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="/sunset.jpg" alt="Sunset over the coast" />
            <figcaption>Legendary Sunsets</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="/madina.jpg" alt="Ancient medina" />
            <figcaption>Ancient Medinas</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="/water.webp" alt="Water adventures" />
            <figcaption>Water Adventures</figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="/local.jpg" alt="Local life" />
            <figcaption>Local Life</figcaption>
          </figure>
        </div>
        <p className="gallery-hint">← drag to explore →</p>
      </div>

      {/* ================= NABEUL ================= */}
      <section className="dest" id="nabeul">
        <div className="drawer">
          <div className="drawer-img" data-drawer>
            <div className="drawer-overlay"></div>
            <div className="drawer-label">
              <span className="drawer-num">03</span>
              <span className="drawer-title">Nabeul</span>
            </div>
          </div>
        </div>

        <div className="dest-body">
          <div className="fade-up">
            <span className="dest-tag">Pottery · Markets · Culture</span>
          </div>
          <h2 className="dest-h2 fade-up" style={{ "--delay": ".08s" }}>
            Nabeul<em>نابل</em>
          </h2>
          <p className="dest-lead fade-up" style={{ "--delay": ".14s" }}>
            The craft capital of Cap Bon, whose name echoes the ancient Greek
            "Neapolis." Over 70% of Tunisia's pottery is made here. Explore
            workshops where artisans hand-paint vivid ceramics, then lose
            yourself in the legendary Friday souk.
          </p>

          <div className="cards">
            <div className="card fade-up" style={{ "--delay": ".0s" }}>
              <h3>Pottery Capital</h3>
              <p>
                70% of Tunisia's ceramics are produced in Nabeul. Tour workshops
                and watch masters paint intricate multicoloured geometric
                designs.
              </p>
            </div>
            <div className="card fade-up" style={{ "--delay": ".08s" }}>
              <h3>Friday Grand Souk</h3>
              <p>
                The largest weekly market in Cap Bon — spices, fresh produce,
                leather, rugs, ceramics and the irresistible scent of harissa.
              </p>
            </div>
            <div className="card fade-up" style={{ "--delay": ".16s" }}>
              <h3>Jasmine Perfume</h3>
              <p>
                Nabeul crafts delicate perfumes from jasmine, orange blossom and
                geranium — the true aromatic signature of Cap Bon.
              </p>
            </div>
            <div className="card fade-up" style={{ "--delay": ".24s" }}>
              <h3>Roman Neapolis</h3>
              <p>
                The Archaeological Museum and ruins of the ancient Roman city
                preserve mosaics and columns from a civilisation 2,000 years
                old.
              </p>
            </div>
          </div>

          <div className="pottery-split fade-up" style={{ "--delay": ".08s" }}>
            <div className="pottery-text">
              <h3>The Art of Nabeul Ceramics</h3>
              <p>
                Influenced by Phoenicians, Romans, and Andalusian exiles from
                Spain, Nabeul's ceramic tradition spans millennia. Workshops
                line every street watch masters layer intricate patterns in
                vivid yellows, blues and greens before pieces are fired in
                wood-burning kilns.
              </p>
              <p>
                Visit the government ONAT shop on Avenue Habib Thameur for
                transparent pricing, or haggle in the souks. Coloured tile
                panels, Ottoman-style dishes and designer tableware make
                exceptional, lightweight gifts.
              </p>
            </div>
            <div className="pottery-imgs">
              <div className="p-main">
                <img
                  src="/nabeulpot.jpg"
                  alt="Stacks of colourful hand-painted Tunisian plates and bowls"
                />
              </div>
              <div className="p-side">
                <img
                  src="/spices.webp"
                  alt="Vibrant piles of spices in a traditional market"
                />
              </div>
              <div className="p-side">
                <img
                  src="/rugs.jpg"
                  alt="Close up view of traditional crafted rugs and fabrics"
                />
              </div>
            </div>
          </div>

          <div className="info-band fade-up" style={{ "--delay": ".1s" }}>
            <div className="info-cell">
              <strong>Best Time</strong>
              <span>March – November</span>
            </div>
            <div className="info-cell">
              <strong>From Tunis</strong>
              <span>65 km · 1 hour</span>
            </div>
            <div className="info-cell">
              <strong>Must Buy</strong>
              <span>Ceramic tiles &amp; Harissa</span>
            </div>
            <div className="info-cell">
              <strong>Don't Miss</strong>
              <span>Friday Souk</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

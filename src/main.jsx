import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import {
  ArrowRight,
  BadgePercent,
  ChevronRight,
  Clock3,
  Compass,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  ShoppingBasket,
  Star,
  Store,
  X,
} from "lucide-react";

import "./style.css";

const cats = [
  [
    "Rice & Grains",
    "/images/01.jpg",
    "Staples for every kitchen",
  ],
  [
    "Dals & Pulses",
    "/images/02.jpg",
    "Protein-packed pantry picks",
  ],
  [
    "Flour & Atta",
    "/images/03.jpg",
    "Fresh everyday flours",
  ],
  [
    "Cooking Oil",
    "/images/04.jpg",
    "Kitchen essentials",
  ],
  [
    "Spices & Masalas",
    "/images/05.jpg",
    "Add a little magic",
  ],
  [
    "Snacks",
    "/images/06.jpg",
    "Tea-time favourites",
  ],
  [
    "Biscuits",
    "/images/07.jpg",
    "Family-friendly bites",
  ],
  [
    "Beverages",
    "/images/08.jpg",
    "Tea, coffee & more",
  ],
  [
    "Pooja Items",
    "/images/09.jpg",
    "Agarbatti, Dhoop, Matchstick & more",
  ],
  [
    "Chocolates",
    "/images/10.jpg",
    "Wafer, Crispy Chocolates, Standard Milk Chocolates & more",
  ],
  [
    "Household Essentials",
    "/images/11.jpg",
    "Things your home needs",
  ],
  [
    "Cleaning Products",
    "/images/12.jpg",
    "Things that keep home fresh",
  ],
];

const fav = [
  [
    "Aashirvaad Atta",
    "https://www.bbassets.com/media/uploads/p/l/30006887_9-aashirvaad-atta-whole-wheat.jpg",
    "5 kg",
    "Flour & Atta",
  ],
  [
    "India Gate Basmati Rice",
    "https://content.jdmagicbox.com/v2/comp/alipurduar/n4/9999p3564.3564.170825142706.v2n4/catalogue/g-d-enterprise-alipurduar-ho-alipurduar-grocery-wholesalers-04szuonenj-250.jpg",
    "5 kg",
    "Rice & Grains",
  ],
  [
    "Tata Salt",
    "https://rukminim2.flixcart.com/image/1280/1280/xif0q/salt/c/2/r/970-saltfree-flowing-and-iodised-namak-1-iodized-salt-tata-original-imah8ukfxwd73hgh.jpeg?q=90",
    "1 kg",
    "Spices & Masalas",
  ],
  [
    "Cooking Oil",
    "https://www.panchamrutha.com/cdn/shop/collections/4_a6586893-6e23-46ae-80fd-3ea8ca7b57b2.png?v=1760696177",
    "1 L",
    "Cooking Oil",
  ],
  [
    "Toor Dal",
    "https://koreagro.com/images/products/pulses/toordal.webp",
    "1 kg",
    "Dals & Pulses",
  ],
  [
    "Beverages",
    "https://m.media-amazon.com/images/G/31/img17/Pantry/Jan19/SVDTea750x375.jpg",
    "500 g",
    "Beverages",
  ],
  [
    "Energy Drinks",
    "https://cdn.zeebiz.com/sites/default/files/2019/02/21/75241-gsk-official-website.png",
    "1000 g",
    "Beverages",
  ],
  [
    "Biscuit, Snacks & Chocolates",
    "https://www.sendbestgift.com/assets/images/product/202007081594206297.jpg",
    "Packs",
    "Snacks",
  ],
  [
    "Agarabatti, Dhoop, & Matchstick",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONkDgSImz27URSF4ERq5a2QnwLlqJ5WH8qJnCOr9JApfU5VHjUrhUzfg0&s=10",
    "Packs",
    "Pooja Items",
  ],
  [
    "Body Soap",
    "https://dukaan.b-cdn.net/1000x1000/webp/20107/ebae61d7-dc26-4b2e-8f0a-448327ca1cae.png",
    "Pack",
    "Household Essentials",
  ],
  [
    "MTR Ready Mix Products",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9k4NEjpBW4azc6RJ-xmjU0YISs0b_918hGEpXij8u3iOoKmbwgIId5WI&s=10",
    "500 g",
    "MTR Spices and Masala",
  ],
];

/* =========================================================
   CATEGORY VISUAL
   Supports BOTH image URLs and emojis
========================================================= */

function CategoryVisual({ category }) {
  const value = category[1];

  const isImage =
    typeof value === "string" &&
    (value.startsWith("http://") ||
      value.startsWith("https://") ||
      value.startsWith("/"));

  return (
    <span className="catImage">
      {isImage ? (
        <img src={value} alt={category[0]} />
      ) : (
        <span className="emojiVisual">{value}</span>
      )}
    </span>
  );
}

/* =========================================================
   HEADER
========================================================= */

function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    ["Home", "/"],
    ["Our Store", "/store"],
    ["Essentials", "/essentials"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  return (
    <>
      <div className="top">
        ✦ LOCAL STORE • TRUSTED SERVICE • EVERYDAY ESSENTIALS
      </div>

      <header>
        <div className="wrap head">
          <Link className="logo" to="/">
            <span>
              <ShoppingBasket />
            </span>

            <b>
              GARUDA GOVINDAM
              <small>PROVISION STORE</small>
            </b>
          </Link>

          <nav>
            {nav.map((n) => (
              <NavLink key={n[0]} to={n[1]}>
                {n[0]}
              </NavLink>
            ))}
          </nav>

          <div className="actions">
            <a className="circle" href="tel:+917259922753">
              <Phone />
            </a>

            <a
              className="contactPill"
              href="https://wa.me/917259922753"
            >
              <MessageCircle />
              WhatsApp
            </a>

            <button
              className="circle mobile"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mobilemenu">
            {nav.map((n) => (
              <Link
                key={n[0]}
                to={n[1]}
                onClick={() => setOpen(false)}
              >
                {n[0]}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <div className="logo">
            <span>
              <ShoppingBasket />
            </span>

            <b>
              GARUDA GOVINDAM
              <small>PROVISION STORE</small>
            </b>
          </div>

          <p>
            Your trusted nearby provision store for groceries and
            everyday household essentials.
          </p>
        </div>

        <div>
          <b>EXPLORE</b>

          <Link to="/store">Our Store</Link>
          <Link to="/essentials">Essentials</Link>
          <Link to="/about">About</Link>
        </div>

        <div>
          <b>CONNECT</b>

          <a href="https://wa.me/917259922753">
            WhatsApp
          </a>

          <a href="tel:+917259922753">
            Call store
          </a>

          <Link to="/contact">
            Contact
          </Link>
        </div>

        <div>
          <b>STORE</b>

          <span>
            Garuda Govindam Provision Store, Near Vadakaraya Temple
            Circle, Main Bazaar Road, Hospet.
          </span>

          <span>
            +917259922753
          </span>

          <span>
            8:00 AM – 9:00 PM, Thursday Holiday
          </span>
        </div>
      </div>

      <div className="bottom">
        © 2026 Garuda Govindam Provision Store

        <span>
          Replace owner details before launch
        </span>
      </div>
    </footer>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="wrap heroGrid">
          <div>
            <label>
              ✦ YOUR NEIGHBOURHOOD PANTRY
            </label>

            <h1>
              Everything you need,
              <br />
              <em>right around the corner.</em>
            </h1>

            <p>
              Fresh groceries & essentials —
            </p>
            <p>
              locally trusted and thoughtfully stocked.
            </p>

            <div className="buttons">
              <Link className="btn green" to="/store">
                Visit Our Store
                <ArrowRight />
              </Link>

              <a
                className="btn"
                href="https://wa.me/917259922753"
              >
                <MessageCircle />
                WhatsApp Us
              </a>
            </div>

            <div className="trust">
              <span>
                <ShieldCheck />
                Trusted local service
              </span>

              <span>
                <Store />
                Everyday essentials
              </span>

              <span>
                <Clock3 />
                Open 8 AM – 9 PM
              </span>
            </div>
          </div>

          <div className="heroArt">
            <img src="/images/logo.png" alt="Fresh groceries" />
            
            <strong>
              FRESH
              <br />
              <i>DAILY</i>
            </strong>
            
          </div>
          
        </div>
      </section>

      {/* =========================
          HOME CATEGORIES
      ========================= */}

      <section className="wrap section">
        <div className="sectionTitle">
          <div>
            <label>WHAT WE STOCK</label>

            <h2>
              Your pantry, <em>sorted.</em>
            </h2>
          </div>

          <Link to="/essentials">
            Explore all
            <ArrowRight />
          </Link>
        </div>

        <div className="catgrid">
          {cats.slice(0, 8).map((c) => (
            <Link
              className="cat"
              key={c[0]}
              to="/essentials"
            >
              <CategoryVisual category={c} />

              <div>
                <b>{c[0]}</b>
                <small>{c[2]}</small>
              </div>

              <ChevronRight />
            </Link>
          ))}
        </div>
      </section>

      {/* =========================
          OFFER
      ========================= */}

      <section className="offer">
        <div className="wrap offerGrid">
          <div>
            <label>WHY GARUDA GOVINDAM</label>

            <h2>
              Good value feels <em>even better.</em>
            </h2>

            <p>
              A neighbourhood store built around practical everyday
              choices, familiar service and the little things that
              make shopping feel easy.
            </p>

            <Link
              className="btn light"
              to="/about"
            >
              Know our story
              <ArrowRight />
            </Link>
          </div>

          <div className="offers">
            <Offer
              icon="🫶"
              title="Friendly local service"
              value="A store that knows its community"
            />

            <Offer
              icon="🌾"
              title="Everyday essentials"
              value="The things your home needs"
            />

            <Offer
              icon="✨"
              title="Simple & convenient"
              value="Nearby, familiar and reliable"
            />
          </div>
        </div>
      </section>

      {/* =========================
          LOCAL FAVOURITES
      ========================= */}

      <section className="wrap section">
        <div className="sectionTitle">
          <div>
            <label>LOCAL FAVOURITES</label>

            <h2>
              What families <em>reach for.</em>
            </h2>
          </div>

          <Link to="/essentials">
            View essentials
            <ArrowRight />
          </Link>
        </div>

        <div className="products">
          {fav.map((p, i) => (
            <Showcase key={i} p={p} />
          ))}
        </div>
      </section>

      {/* =========================
          STORY
      ========================= */}

      <section className="wrap story">
        <div className="storyArt">
           <img
             src="/images/ggps.png"
             alt="Garuda Govindam Provision Store"
            />

          <span>
            LOCAL • WARM • RELIABLE
          </span>
        </div>

        <div>
          <label>
            A STORE THAT FEELS CLOSE TO HOME
          </label>

          <h2>
            Small store. <em>Big everyday help.</em>
          </h2>

          <p>
            Garuda Govindam Provision Store is here for the little
            things that keep a home running — from morning chai to
            weekend pantry restocks.
          </p>

          <Link
            className="btn dark"
            to="/about"
          >
            Meet the store
            <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   OFFER CARD
========================================================= */

function Offer({ icon, title, value }) {
  return (
    <div className="offerCard">
      <span>{icon}</span>

      <div>
        <b>{title}</b>
        <strong>{value}</strong>
      </div>

      <BadgePercent />
    </div>
  );
}

/* =========================================================
   PRODUCT SHOWCASE
========================================================= */

function Showcase({ p }) {
  const value = p[1];

  const isImage =
    typeof value === "string" &&
    (value.startsWith("http://") ||
      value.startsWith("https://") ||
      value.startsWith("/"));

  return (
    <article className="product">
      <div className="photo">
        <span>EVERYDAY PICK</span>

        {isImage ? (
          <img
            src={value}
            alt={p[0]}
            className="productImage"
          />
        ) : (
          <b>{value}</b>
        )}
      </div>

      <div className="pbody">
        <small className="rating">
          <Star />
          Local favourite
        </small>

        <h3>{p[0]}</h3>

        <p>
          {p[2]} · {p[3]}
        </p>

        <div className="showcaseLine">
          <strong>Available in store</strong>
          <Store />
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   STORE PAGE
========================================================= */

function StorePage() {
  return (
    <main className="wrap section">
      <div className="about">
        <div>
          <label>OUR STORE</label>

          <h1>
            A familiar place for{" "}
            <em>everyday needs.</em>
          </h1>

          <p>
            Garuda Govindam Provision Store brings the comfort of a
            neighbourhood shop together with a clean, modern and
            welcoming experience.
          </p>

          <div className="buttons">
            <a
              className="btn green"
              href="https://maps.app.goo.gl/mbG85HLhBnGVfiaQ9?g_st=aw"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin />
              Find the store
            </a>

            <a
              className="btn"
              href="tel:+917259922753"
            >
              Call us
              <Phone />
            </a>
          </div>
        </div>

        <div className="aboutArt">
          🛍️

          <span>
            YOUR
            <br />
            LOCAL
            <br />
            <b>PANTRY</b>
          </span>
        </div>
      </div>

      <div className="values">
        {[
          [
            "🫶",
            "Friendly",
            "A familiar place where every customer matters.",
          ],
          [
            "🌾",
            "Everyday value",
            "Practical choices for everyday homes.",
          ],
          [
            "🚲",
            "Nearby convenience",
            "A store close to your daily routine.",
          ],
          [
            "✨",
            "Fresh approach",
            "A modern experience with a local heart.",
          ],
        ].map((x) => (
          <div key={x[1]}>
            <span>{x[0]}</span>

            <h2>{x[1]}</h2>

            <p>{x[2]}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

/* =========================================================
   ESSENTIALS PAGE
========================================================= */

function Essentials() {
  return (
    <main className="wrap section">
      <div className="shopHero">
        <div>
          <label>THE EVERYDAY AISLE</label>

          <h1>
            Explore the <em>essentials.</em>
          </h1>

          <p>
            From pantry staples to household favourites, see the
            kinds of everyday products available at Garuda Govindam.
          </p>
        </div>

        <div className="stat">
          <b>12+</b>
          <small>everyday categories</small>
        </div>
      </div>

      {/* =========================
          ESSENTIALS CATEGORIES
      ========================= */}

      <div className="catgrid">
        {cats.map((c) => (
          <Link
            className="cat"
            key={c[0]}
            to="/contact"
          >
            <CategoryVisual category={c} />

            <div>
              <b>{c[0]}</b>
              <small>{c[2]}</small>
            </div>

            <ChevronRight />
          </Link>
        ))}
      </div>

      <div className="notice">
        <ShieldCheck />

        <div>
          <b>
            Looking for something specific?
          </b>

          <p>
            Contact the store or WhatsApp us to check availability
            before visiting.
          </p>
        </div>

        <a
          className="btn green"
          href="https://wa.me/917259922753"
        >
          Ask the store
          <ArrowRight />
        </a>
      </div>
    </main>
  );
}

/* =========================================================
   ABOUT
========================================================= */

function About() {
  return (
    <main className="wrap section">
      <div className="about">
        <div>
          <label>ABOUT GARUDA GOVINDAM</label>

          <h1>
            Everyday essentials,
            <br />
            <em>with a human touch.</em>
          </h1>

          <p>
            We are a neighbourhood provision store focused on making
            everyday grocery shopping simple, familiar and dependable.
          </p>
        </div>

        <div className="aboutArt">
          🌿

          <span>
            LOCAL
            <br />
            <b>ROOTS</b>
          </span>
        </div>
      </div>

      <div className="values">
        {[
          [
            "🤝",
            "Trust",
            "A store built around familiar faces and dependable service.",
          ],
          [
            "🧺",
            "Practicality",
            "Useful everyday products without unnecessary complexity.",
          ],
          [
            "🏡",
            "Community",
            "A nearby store that feels like part of the neighbourhood.",
          ],
          [
            "🌱",
            "Growing together",
            "A local business with a modern, thoughtful approach.",
          ],
        ].map((x) => (
          <div key={x[1]}>
            <span>{x[0]}</span>

            <h2>{x[1]}</h2>

            <p>{x[2]}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

/* =========================================================
   CONTACT
========================================================= */

function Contact() {
  return (
    <main className="wrap section">
      <div className="contact">
        <div>
          <label>NEED HELP?</label>

          <h1>
            Say hello to
            <br />
            <em>your local store.</em>
          </h1>

          <p>
            For availability, directions or a quick question, reach
            out directly.
          </p>

          <a
            className="contactCard"
            href="tel:+917259922753"
          >
            <Phone />

            <span>
              <small>CALL STORE</small>
              <b>+917259922753</b>
            </span>
          </a>

          <a
            className="contactCard"
            href="https://wa.me/917259922753"
          >
            <MessageCircle />

            <span>
              <small>WHATSAPP</small>
              <b>Chat with the store</b>
            </span>
          </a>

          <div className="contactCard">
            <Clock3 />

            <span>
              <small>STORE TIMINGS</small>
              <b>
                8:00 AM – 9:00 PM, Thursday Holiday
              </b>
            </span>
          </div>
        </div>

        <div className="contactForm">
          <label>STORE LOCATION</label>

          <h2>Find us nearby.</h2>

          <p className="muted">
            Garuda Govindam Provision Store, Near Vadakaraya Temple
            Circle, Main Bazaar Road, Hospet.
          </p>

          <div className="map">
            <iframe
              src="https://www.google.com/maps?q=Guru+Krupa+Provshion,+Main+Bazar,+near+Hospet,+Hosapete,+Karnataka+583201&output=embed"
              title="Garuda Govindam Provision Store location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a
            className="btn green full"
            href="https://maps.app.goo.gl/mbG85HLhBnGVfiaQ9?g_st=aw"
            target="_blank"
            rel="noreferrer"
          >
            <Compass />
            Get directions
          </a>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/essentials" element={<Essentials />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

/* =========================================================
   RENDER
========================================================= */

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
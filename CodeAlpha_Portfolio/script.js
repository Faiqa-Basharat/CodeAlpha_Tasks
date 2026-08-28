/* =================================
   ACTIVE NAVIGATION
================================= */

const navLinks = [
  ...document.querySelectorAll(".nav-link")
];

const sections = [
  ...document.querySelectorAll("section[id]")
];

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        navLinks.forEach((link) => {

          link.classList.toggle(
            "active",
            link.getAttribute("href") ===
              "#" + entry.target.id
          );

        });

      }

    });

  },
  {
    rootMargin: "-40% 0px -50% 0px"
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

/* =================================
   CASE STUDY MODAL
================================= */

const modal =
  document.getElementById("modal");

const modalTitle =
  document.getElementById("modalTitle");

const modalText =
  document.getElementById("modalText");

const modalBody =
  document.getElementById("modalBody");


const caseData = {

  echosee: {

    title:
      "EchoSee",

    text:
      "A companion app for smart captioning glasses — real-time speech-to-text and live translation for the Deaf and hard-of-hearing community.",

    items: [

      "🔵 Bluetooth pairing with live signal quality readouts.",

      "💬 Real-time captions projected on the glasses' lens.",

      "🌐 Live translation between source & target languages.",

      "🕓 Auto-saved transcript history with timestamps.",

      "🎨 Adjustable subtitle size, position, color & dark mode.",

      "💎 Freemium — free base tier, paid unlocks more languages, unlimited history, speaker ID & PDF export."

    ]

  },


  ridelockr: {

    title:
      "RideLockr",

    text:
      "A smart anti-theft and tracking app for motorcycles — gives owners a way to actively monitor, locate, and secure their bike remotely.",

    items: [

      "📍 Live GPS tracking with speed, lat/long & altitude.",

      "🔒 Remote engine lock/unlock with a full history log.",

      "🛵 Bike status — fuel, battery, engine temp, odometer.",

      "🚨 Full-screen tamper alerts with sound alarm & share-location.",

      "🧭 Geo-fencing for home, work & shop safe zones.",

      "💳 Basic/Pro/Fleet plans, paid via card, JazzCash & Easypaisa."

    ]

  },


  neurolab: {

    title:
      "NeuroLab",

    text:
      "A five-page research institute website — Home, Research, Programs, Journal, and Contact — built entirely with vanilla HTML, CSS, and JavaScript, with client-side page routing and no frameworks.",

    items: [

      "🧠 Custom hero slideshow — 4 auto-advancing slides with progress bar, arrow/dot navigation & keyboard controls.",

      "🗂️ Client-side SPA routing — 5 full pages swapped via JavaScript, no page reloads.",

      "🔬 Filterable research grid — category filter buttons across dozens of study cards.",

      "📰 Two-column journal layout — articles plus a sticky sidebar with topics, newsletter box, and featured faculty.",

      "📬 Interactive contact form — validated fields, enquiry-type dropdown, and toast notifications.",

      "⚙️ Built entirely in vanilla HTML/CSS/JS in VS Code, version-controlled and hosted on GitHub."

    ]

  },


  portfolio: {

    title:
      "Personal Portfolio",

    text:
      "A dark, minimal portfolio site built to showcase UI/UX case studies, front-end skills, and work experience — hand-coded from scratch in HTML, CSS, and JavaScript.",

    items: [

      "🧭 Floating pill navigation with scroll-spy active states.",

      "🗂️ Animated case-study modals opened straight from tappable project cards.",

      "🧑‍💻 Interactive experience timeline built from real internship history.",

      "✉️ Working contact form that opens a pre-filled email draft.",

      "🎨 Custom dark theme — grain texture, radial gradients, Playfair Display + DM Sans pairing.",

      "📱 Fully responsive — nav, cards, and layouts adapt below 800px."

    ]

  },

};



document
  .querySelectorAll("[data-modal]")
  .forEach((button) => {

    button.addEventListener("click", () => {

      const data =
        caseData[button.dataset.modal];

      modalTitle.textContent =
        data.title;

      modalText.textContent =
        data.text;

      modalBody.innerHTML =
        data.items
          .map(
            (item) =>
              `
                <div class="modal-body-item">
                  ◦ ${item}
                </div>
              `
          )
          .join("");

      modal.classList.add("show");

      document.body.style.overflow =
        "hidden";

    });

  });



/* CLOSE MODAL */

function closeModal() {

  modal.classList.remove("show");

  document.body.style.overflow = "";

}


document
  .getElementById("modalClose")
  .addEventListener(
    "click",
    closeModal
  );


modal.addEventListener(
  "click",
  (event) => {

    if (event.target === modal) {

      closeModal();

    }

  }
);


document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {

      closeModal();

    }

  }
);



/* =================================
   EXPERIENCE DATA
================================= */

const jobs = {

  codealpha: {

    role:
      "Frontend Developer Intern",

    company:
      "CodeAlpha",

    date:
      "Aug 2026 – Present · Internship",

    text:
      "Developing responsive, structured web interfaces using modern front-end technologies and building interactive, portfolio-worthy projects.",

    items: [

      "Develop responsive and structured web interfaces using modern front-end technologies.",

      "Implement interactive features, navigation, hover effects, and smooth user interactions.",

      "Apply responsive design principles to ensure usability across different screen sizes.",

      "Collaborate on practical projects that strengthen problem-solving and development skills.",

      "Build and refine projects that contribute to my professional portfolio.",

      "Continuously improve my understanding of front-end development, UI/UX principles, and industry practices."

    ]

  },


  codecelix: {

    role:
      "UI/UX Design Intern",

    company:
      "CodeCelix",

    date:
      "Apr 2026 – Jul 2026 · Internship",

    text:
      "Completed a remote internship contributing to real-world UI/UX design tasks and problem-solving activities.",

    items: [

      "Contributing to real-world UI/UX design tasks and problem-solving activities.",

      "Collaborating with designers and developers in a team environment.",

      "Creating wireframes, layouts, and user interface concepts.",

      "Applying user-centered design principles to improve usability.",

      "Gaining exposure to modern design tools and workflows."

    ]

  },


  codelab: {

    role:
      "Web Developer Intern",

    company:
      "Codelab IT Solutions",

    date:
      "Jul 2025 – Sep 2025 · Bahawalpur, Punjab, Pakistan · On-site",

    text:
      "Building and styling web pages using HTML & CSS with a focus on clean, responsive design, and exploring modern layout techniques.",

    items: [

      "Building and styling web pages using HTML & CSS, focusing on clean, responsive design.",

      "Gaining hands-on experience with flexbox, grid, and modern layout techniques.",

      "Exploring advanced concepts step by step to strengthen my understanding of front-end development.",

      "Developing projects that combine both practical skills and aesthetic design principles."

    ]

  },


  freelance: {

    role:
      "Freelance Front-End Developer & Designer",

    company:
      "Self-Employed / Client Work",

    date:
      "2025 – Present",

    text:
      "Designing and building small websites and digital experiences for clients and personal projects.",

    items: [

      "UI/UX design and prototyping in Figma.",

      "Responsive website implementation.",

      "Client communication and project planning.",

      "Iterative improvements based on feedback."

    ]

  }

};



/* =================================
   EXPERIENCE SWITCHER
================================= */

document
  .querySelectorAll(".job")
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".job")
          .forEach((job) => {

            job.classList.remove(
              "active"
            );

          });

        button.classList.add("active");

        const data =
          jobs[button.dataset.job];

        document.getElementById(
          "jobDetail"
        ).innerHTML = `

          <div class="detail-top">

            <span>
              ${data.role}
            </span>

            <span>
              ${data.date}
            </span>

          </div>

          <h3>
            ${data.company}
          </h3>

          <p>
            ${data.text}
          </p>

          <ul>

            ${data.items
              .map(
                (item) =>
                  `
                    <li>
                      ${item}
                    </li>
                  `
              )
              .join("")}

          </ul>

        `;

      }
    );

  });

/* =================================
   CONTACT FORM
================================= */

document
  .getElementById("contactForm")
  .addEventListener(
    "submit",
    (event) => {

      event.preventDefault();

      const data =
        new FormData(event.target);

      const subject =
        encodeURIComponent(
          "Portfolio inquiry from " +
          data.get("name")
        );

      const body =
        encodeURIComponent(
          `Name / Organization: ${
            data.get("name")
          }

Email: ${
            data.get("email")
          }

${data.get("message")}`
        );

      window.location.href =
        `mailto:faiqabasharat05@gmail.com?subject=${subject}&body=${body}`;

      document.getElementById(
        "formNote"
      ).textContent =
        "Opening your email client…";

    }
  );

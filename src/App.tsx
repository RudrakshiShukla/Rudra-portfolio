// // // import { useState } from 'react'
// // // import heroImg from './assets/hero.png'
// // // import reactLogo from './assets/react.svg'
// // // import viteLogo from './assets/vite.svg'
// // // import './App.css'

// // // function App() {
// // //   const [count, setCount] = useState(0)

// // //   return (
// // //     <>
// // //       <section id="center">
// // //         <div className="hero">
// // //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// // //           <img src={reactLogo} className="framework" alt="React logo" />
// // //           <img src={viteLogo} className="vite" alt="Vite logo" />
// // //         </div>
// // //         <div>
// // //           <h1>Get started</h1>
// // //           <p>
// // //             Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
// // //           </p>
// // //         </div>
// // //         <button
// // //           type="button"
// // //           className="counter"
// // //           onClick={() => setCount((count) => count + 1)}
// // //         >
// // //           Count is {count}
// // //         </button>
// // //       </section>

// // //       <div className="ticks"></div>

// // //       <section id="next-steps">
// // //         <div id="docs">
// // //           <svg className="icon" role="presentation" aria-hidden="true">
// // //             <use href="/icons.svg#documentation-icon"></use>
// // //           </svg>
// // //           <h2>Documentation</h2>
// // //           <p>Your questions, answered</p>
// // //           <ul>
// // //             <li>
// // //               <a href="https://vite.dev/" target="_blank">
// // //                 <img className="logo" src={viteLogo} alt="" />
// // //                 Explore Vite
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://react.dev/" target="_blank">
// // //                 <img className="button-icon" src={reactLogo} alt="" />
// // //                 Learn more
// // //               </a>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //         <div id="social">
// // //           <svg className="icon" role="presentation" aria-hidden="true">
// // //             <use href="/icons.svg#social-icon"></use>
// // //           </svg>
// // //           <h2>Connect with us</h2>
// // //           <p>Join the Vite community</p>
// // //           <ul>
// // //             <li>
// // //               <a href="https://github.com/vitejs/vite" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#github-icon"></use>
// // //                 </svg>
// // //                 GitHub
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://chat.vite.dev/" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#discord-icon"></use>
// // //                 </svg>
// // //                 Discord
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://x.com/vite_js" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#x-icon"></use>
// // //                 </svg>
// // //                 X.com
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#bluesky-icon"></use>
// // //                 </svg>
// // //                 Bluesky
// // //               </a>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //       </section>

// // //       <div className="ticks"></div>
// // //       <section id="spacer"></section>
// // //     </>
// // //   )
// // // }

// // // export default App


// // import './App.css'

// // function App() {
// //   return (
// //     <main>
// //       <h1>My 3D Portfolio</h1>
// //       <p>Portfolio is coming...</p>
// //     </main>
// //   )
// // }

// // export default App


// // import { Canvas } from '@react-three/fiber'
// // import { OrbitControls } from '@react-three/drei'
// // import './App.css'

// // function Cube() {
// //   return (
// //     <mesh rotation={[0.5, 0.5, 0]}>
// //       <boxGeometry args={[2, 2, 2]} />
// //       <meshStandardMaterial />
// //     </mesh>
// //   )
// // }

// // function App() {
// //   return (
// //     <div className="app">
// //       <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
// //         <ambientLight intensity={1} />
// //         <directionalLight position={[5, 5, 5]} intensity={2} />

// //         <Cube />

// //         <OrbitControls />
// //       </Canvas>
// //     </div>
// //   )
// // }

// // export default App

// import './App.css'
// import DataPipeline3D from './components/DataPipeline3D'

//   useFrame((_, delta) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x += delta * 0.25
//       meshRef.current.rotation.y += delta * 0.45
//     }
//   })

//   return (
//     <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
//       <mesh ref={meshRef}>
//         <icosahedronGeometry args={[1.7, 1]} />
//         <meshStandardMaterial
//           wireframe
//           metalness={0.8}
//           roughness={0.2}
//         />
//       </mesh>
//     </Float>
//   )
// }

// function App() {
//   return (
//     <main className="portfolio">

//       <nav className="navbar">
//         <div className="logo">RS.</div>

//         <div className="nav-links">
//           <a href="#about">About</a>
//           <a href="#skills">Skills</a>
//            <a href="#experience">Experience</a>
//           <a href="#projects">Projects</a>
//           <a href="#contact">Contact</a>
//         </div>
//       </nav>

//       <section className="hero-section">

//         <div className="hero-content">
//           <p className="eyebrow">HELLO, I'M</p>

// <h1>
//   Rudrakshi
//   <span>Shukla</span>
// </h1>

// <h2>Aspiring Data Engineer</h2>

// <p className="hero-description">
//   I build data pipelines, transform raw data into reliable datasets,
//   and turn data into meaningful insights using Azure Data Factory,
//   SQL, Python and Power BI.
// </p>

//           <div className="hero-buttons">
//             <a href="#projects" className="primary-button">
//               View Projects
//             </a>

//             <a href="#contact" className="secondary-button">
//               Contact Me
//             </a>
//           </div>
//         </div>

//         <div className="hero-3d">
    
//             <DataPipeline3D />
//                   </div>

//       </section>

//       <section id="about" className="about-section">
//   <div className="section-label">01 — ABOUT ME</div>

//   <div className="about-content">
//     <div className="about-heading">
//       <h2>
//         Building reliable
//         <span>data solutions.</span>
//       </h2>
//     </div>

//     <div className="about-text">
//       <p>
//         I'm Rudrakshi Shukla, an aspiring Data Engineer focused on
//         building data pipelines, transforming data and turning
//         complex datasets into meaningful insights.
//       </p>

//       <p>
//         During my internship at MEIL, I worked with Azure Data Factory,
//         Azure SQL Database, SQL and Power BI to integrate data from
//         multiple sources and deliver reliable reporting solutions.
//       </p>

//       <div className="about-stats">
//         <div>
//           <strong>01</strong>
//           <span>Data Engineering</span>
//         </div>

//         <div>
//           <strong>02</strong>
//           <span>Business Intelligence</span>
//         </div>

//         <div>
//           <strong>03</strong>
//           <span>Data Analytics</span>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//        <section id="skills" className="skills-section">
//   <div className="section-label">02 — SKILLS</div>

//   <div className="skills-header">
//     <h2>
//       Tools I use to
//       <span>build with data.</span>
//     </h2>

//     <p>
//       From data integration and transformation to analytics and
//       visualization, I work across the data workflow.
//     </p>
//   </div>

//   <div className="skills-grid">

//     <div className="skill-card">
//       <span className="skill-number">01</span>
//       <h3>Data Engineering</h3>
//       <p>
//         Building ETL pipelines and integrating data from multiple
//         sources using Azure Data Factory and Azure SQL Database.
//       </p>
//       <div className="skill-tags">
//         <span>Azure Data Factory</span>
//         <span>Azure SQL</span>
//         <span>ETL</span>
//         <span>Data Integration</span>
//       </div>
//     </div>

//     <div className="skill-card">
//       <span className="skill-number">02</span>
//       <h3>SQL & Data</h3>
//       <p>
//         Transforming, cleaning, validating and analysing datasets
//         using SQL and relational databases.
//       </p>
//       <div className="skill-tags">
//         <span>SQL</span>
//         <span>SQLite</span>
//         <span>Data Cleaning</span>
//         <span>Data Validation</span>
//       </div>
//     </div>

//     <div className="skill-card">
//       <span className="skill-number">03</span>
//       <h3>Business Intelligence</h3>
//       <p>
//         Creating interactive dashboards, KPIs and business reports
//         that turn data into actionable insights.
//       </p>
//       <div className="skill-tags">
//         <span>Power BI</span>
//         <span>DAX</span>
//         <span>Power Query</span>
//         <span>KPI Development</span>
//       </div>
//     </div>

//     <div className="skill-card">
//       <span className="skill-number">04</span>
//       <h3>Programming & Analytics</h3>
//       <p>
//         Using Python and analytical techniques for data processing,
//         exploration and business analysis.
//       </p>
//       <div className="skill-tags">
//         <span>Python</span>
//         <span>Pandas</span>
//         <span>Statistics</span>
//         <span>Excel</span>
//       </div>
//     </div>

//     <div className="skill-card">
//       <span className="skill-number">05</span>
//       <h3>Architecture</h3>
//       <p>
//         Understanding modern data architecture concepts for
//         organizing data through different processing layers.
//       </p>
//       <div className="skill-tags">
//         <span>Medallion Architecture</span>
//         <span>Bronze</span>
//         <span>Silver</span>
//         <span>Gold</span>
//       </div>
//     </div>

//     <div className="skill-card">
//       <span className="skill-number">06</span>
//       <h3>Tools & Collaboration</h3>
//       <p>
//         Working with development, documentation and collaboration
//         tools across analytics and data projects.
//       </p>
//       <div className="skill-tags">
//         <span>GitHub</span>
//         <span>Jupyter</span>
//         <span>Google Colab</span>
//         <span>SharePoint</span>
//       </div>
//     </div>

//   </div>
// </section>

//       <section id="experience" className="experience-section">
//   <div className="section-label">03 — EXPERIENCE</div>

//   <div className="experience-header">
//     <h2>
//       Experience that
//       <span>shaped my skills.</span>
//     </h2>

//     <p>
//       Hands-on experience working with data integration, ETL,
//       business intelligence and reporting in a professional
//       engineering environment.
//     </p>
//   </div>

//   <div className="experience-card">

//     <div className="experience-top">
//       <div>
//         <span className="experience-role">Business Analyst Intern</span>
//         <h3>MEIL</h3>
//         <p>Megha Engineering & Infrastructures Ltd · Hyderabad</p>
//       </div>

//       <span className="experience-date">
//         Mar 2026 — Sep 2026
//       </span>
//     </div>

//     <div className="experience-body">

//       <div className="experience-item">
//         <span>01</span>
//         <div>
//           <h4>ETL Pipeline Development</h4>
//           <p>
//             Built an end-to-end GRN data pipeline using Azure Data
//             Factory, Azure SQL Database and SQL-based transformation.
//           </p>
//         </div>
//       </div>

//       <div className="experience-item">
//         <span>02</span>
//         <div>
//           <h4>Data Integration</h4>
//           <p>
//             Consolidated data from SharePoint, Excel and SQL sources
//             into centralized datasets for reporting.
//           </p>
//         </div>
//       </div>

//       <div className="experience-item">
//         <span>03</span>
//         <div>
//           <h4>Power BI Development</h4>
//           <p>
//             Designed and deployed operational dashboards using
//             Power BI, DAX and Power Query.
//           </p>
//         </div>
//       </div>

//       <div className="experience-item">
//         <span>04</span>
//         <div>
//           <h4>Data Quality & Automation</h4>
//           <p>
//             Performed validation and reconciliation across reporting
//             sources and automated payment-readiness tracking.
//           </p>
//         </div>
//       </div>

//     </div>

//     <div className="experience-tools">
//       <span>Azure Data Factory</span>
//       <span>Azure SQL</span>
//       <span>SQL</span>
//       <span>Power BI</span>
//       <span>DAX</span>
//       <span>Power Query</span>
//       <span>Excel</span>
//     </div>

//   </div>
// </section>


// <section id="projects" className="projects-section">
//   <div className="section-label">04 — SELECTED PROJECTS</div>

//   <div className="projects-header">
//     <h2>
//       Things I've
//       <span>built with data.</span>
//     </h2>

//     <p>
//       A selection of analytics and business intelligence projects
//       focused on turning raw data into useful decisions.
//     </p>
//   </div>

//   <div className="projects-list">

//     <article className="project-card">
//       <div className="project-top">
//         <span>01</span>
//         <span>PYTHON · SQL · POWER BI</span>
//       </div>

//       <h3>Customer Shopping Behavior Analysis</h3>

//       <p>
//         End-to-end analytics pipeline built on 3,900 customer records,
//         covering data cleaning, feature engineering, SQL analysis
//         and interactive Power BI reporting.
//       </p>

//       <div className="project-tags">
//         <span>Python</span>
//         <span>Pandas</span>
//         <span>SQLite</span>
//         <span>SQL</span>
//         <span>Power BI</span>
//       </div>
//     </article>

//     <article className="project-card">
//       <div className="project-top">
//         <span>02</span>
//         <span>POWER BI · SQL · DAX</span>
//       </div>

//       <h3>Letter of Credit Analytics</h3>

//       <p>
//         Executive dashboard tracking LC exposure, outstanding
//         commitments and bank/vendor performance while reducing
//         recurring report preparation time.
//       </p>

//       <div className="project-tags">
//         <span>Power BI</span>
//         <span>SQL</span>
//         <span>DAX</span>
//       </div>
//     </article>

//     <article className="project-card">
//       <div className="project-top">
//         <span>03</span>
//         <span>POWER BI · SQL · DAX</span>
//       </div>

//       <h3>Procurement Analytics</h3>

//       <p>
//         Procurement analytics solution tracking spend, supplier
//         performance and purchase order status across multiple
//         data sources.
//       </p>

//       <div className="project-tags">
//         <span>Power BI</span>
//         <span>SQL</span>
//         <span>DAX</span>
//       </div>
//     </article>

//     <article className="project-card">
//       <div className="project-top">
//         <span>04</span>
//         <span>POWER BI · DAX</span>
//       </div>

//       <h3>Finance Insights Dashboard</h3>

//       <p>
//         Financial reporting dashboard tracking Sales, COGS and
//         Profit trends across product segments and countries,
//         with detailed business performance analysis.
//       </p>

//       <div className="project-tags">
//         <span>Power BI</span>
//         <span>DAX</span>
//         <span>Analytics</span>
//       </div>
//     </article>

//   </div>
// </section>


//       <section id="contact" className="contact-section">
//   <div className="section-label">05 — CONTACT</div>

//   <div className="contact-content">

//     <div>
//       <h2>
//         Let's build something
//         <span>meaningful.</span>
//       </h2>

//       <p>
//         I'm open to opportunities in Data Engineering, Data Analytics
//         and Business Intelligence.
//       </p>
//     </div>

//     <div className="contact-links">

//       <a
//         href="mailto:rudrakshishukla700@gmail.com"
//         className="contact-link"
//       >
//         <span>Email</span>
//         <strong>rudrakshishukla700@gmail.com</strong>
//         <span>↗</span>
//       </a>

//       <a
//         href="https://www.linkedin.com/"
//         target="_blank"
//         rel="noreferrer"
//         className="contact-link"
//       >
//         <span>LinkedIn</span>
//         <strong>Connect on LinkedIn</strong>
//         <span>↗</span>
//       </a>

//       <a
//         href="https://github.com/"
//         target="_blank"
//         rel="noreferrer"
//         className="contact-link"
//       >
//         <span>GitHub</span>
//         <strong>View my GitHub</strong>
//         <span>↗</span>
//       </a>

//       <a
//         href="tel:+918112618462"
//         className="contact-link"
//       >
//         <span>Phone</span>
//         <strong>+91 81126 18462</strong>
//         <span>↗</span>
//       </a>

//     </div>

//   </div>

//   <footer>
//     <span>© 2026 Rudrakshi Shukla</span>
//     <span>Data Engineer · Analytics · BI</span>
//   </footer>
// </section>

//     </main>
//   )
// }

// export default App

// import './App.css'
// import DataPipeline3D from  './components/DataPipeline3D'

// function App() {
//   return (
//     <main className="portfolio">

//       {/* NAVBAR */}
//       <nav className="navbar">
//         <div className="logo">RS.</div>

//         <div className="nav-links">
//           <a href="#about">About</a>
//           <a href="#skills">Skills</a>
//           <a href="#experience">Experience</a>
//           <a href="#projects">Projects</a>
//           <a href="#contact">Contact</a>
//         </div>
//       </nav>

//       {/* HERO */}
//       <section className="hero-section">

//         <div className="hero-content">
//           <p className="eyebrow">HELLO, I'M</p>

//           <h1>
//             Rudrakshi
//             <span>Shukla</span>
//           </h1>

//           <h2>Aspiring Data Engineer</h2>

//           <p className="hero-description">
//             I build data pipelines, transform raw data into reliable
//             datasets, and turn data into meaningful insights using
//             Azure Data Factory, SQL, Python and Power BI.
//           </p>

//           <div className="hero-buttons">
//             <a href="#projects" className="primary-button">
//               View Projects
//             </a>

//             <a href="#contact" className="secondary-button">
//               Contact Me
//             </a>
//           </div>
//         </div>

//         <div className="hero-3d">
//           <DataPipeline3D />
//         </div>

//       </section>

//       {/* ABOUT */}
//       <section id="about" className="about-section">

//         <div className="section-label">
//           01 — ABOUT ME
//         </div>

//         <div className="about-content">

//           <div className="about-heading">
//             <h2>
//               Building reliable
//               <span>data solutions.</span>
//             </h2>
//           </div>

//           <div className="about-text">

//             <p>
//               I'm Rudrakshi Shukla, an aspiring Data Engineer focused on
//               building data pipelines, transforming data and turning
//               complex datasets into meaningful insights.
//             </p>

//             <p>
//               During my internship at MEIL, I worked with Azure Data
//               Factory, Azure SQL Database, SQL and Power BI to integrate
//               data from multiple sources and deliver reliable reporting
//               solutions.
//             </p>

//             <div className="about-stats">

//               <div>
//                 <strong>01</strong>
//                 <span>Data Engineering</span>
//               </div>

//               <div>
//                 <strong>02</strong>
//                 <span>Business Intelligence</span>
//               </div>

//               <div>
//                 <strong>03</strong>
//                 <span>Data Analytics</span>
//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* SKILLS */}
//       <section id="skills" className="skills-section">

//         <div className="section-label">
//           02 — SKILLS
//         </div>

//         <div className="skills-header">

//           <h2>
//             Tools I use to
//             <span>build with data.</span>
//           </h2>

//           <p>
//             From data integration and transformation to analytics and
//             visualization, I work across the data workflow.
//           </p>

//         </div>

//         <div className="skills-grid">

//           <div className="skill-card">
//             <span className="skill-number">01</span>

//             <h3>Data Engineering</h3>

//             <p>
//               Building ETL pipelines and integrating data from multiple
//               sources using Azure Data Factory and Azure SQL Database.
//             </p>

//             <div className="skill-tags">
//               <span>Azure Data Factory</span>
//               <span>Azure SQL</span>
//               <span>ETL</span>
//               <span>Data Integration</span>
//             </div>
//           </div>

//           <div className="skill-card">
//             <span className="skill-number">02</span>

//             <h3>SQL & Data</h3>

//             <p>
//               Transforming, cleaning, validating and analysing datasets
//               using SQL and relational databases.
//             </p>

//             <div className="skill-tags">
//               <span>SQL</span>
//               <span>SQLite</span>
//               <span>Data Cleaning</span>
//               <span>Data Validation</span>
//             </div>
//           </div>

//           <div className="skill-card">
//             <span className="skill-number">03</span>

//             <h3>Business Intelligence</h3>

//             <p>
//               Creating interactive dashboards, KPIs and business reports
//               that turn data into actionable insights.
//             </p>

//             <div className="skill-tags">
//               <span>Power BI</span>
//               <span>DAX</span>
//               <span>Power Query</span>
//               <span>KPI Development</span>
//             </div>
//           </div>

//           <div className="skill-card">
//             <span className="skill-number">04</span>

//             <h3>Programming & Analytics</h3>

//             <p>
//               Using Python and analytical techniques for data processing,
//               exploration and business analysis.
//             </p>

//             <div className="skill-tags">
//               <span>Python</span>
//               <span>Pandas</span>
//               <span>Statistics</span>
//               <span>Excel</span>
//             </div>
//           </div>

//           <div className="skill-card">
//             <span className="skill-number">05</span>

//             <h3>Architecture</h3>

//             <p>
//               Understanding modern data architecture concepts for
//               organizing data through different processing layers.
//             </p>

//             <div className="skill-tags">
//               <span>Medallion Architecture</span>
//               <span>Bronze</span>
//               <span>Silver</span>
//               <span>Gold</span>
//             </div>
//           </div>

//           <div className="skill-card">
//             <span className="skill-number">06</span>

//             <h3>Tools & Collaboration</h3>

//             <p>
//               Working with development, documentation and collaboration
//               tools across analytics and data projects.
//             </p>

//             <div className="skill-tags">
//               <span>GitHub</span>
//               <span>Jupyter</span>
//               <span>Google Colab</span>
//               <span>SharePoint</span>
//             </div>
//           </div>

//         </div>

//       </section>

//       {/* EXPERIENCE */}
//       <section id="experience" className="experience-section">

//         <div className="section-label">
//           03 — EXPERIENCE
//         </div>

//         <div className="experience-header">

//           <h2>
//             Experience that
//             <span>shaped my skills.</span>
//           </h2>

//           <p>
//             Hands-on experience working with data integration, ETL,
//             business intelligence and reporting in a professional
//             engineering environment.
//           </p>

//         </div>

//         <div className="experience-card">

//           <div className="experience-top">

//             <div>
//               <span className="experience-role">
//                 Business Analyst Intern
//               </span>

//               <h3>MEIL</h3>

//               <p>
//                 Megha Engineering & Infrastructures Ltd · Hyderabad
//               </p>
//             </div>

//             <span className="experience-date">
//               Mar 2026 — Sep 2026
//             </span>

//           </div>

//           <div className="experience-body">

//             <div className="experience-item">
//               <span>01</span>

//               <div>
//                 <h4>ETL Pipeline Development</h4>

//                 <p>
//                   Built an end-to-end GRN data pipeline using Azure Data
//                   Factory, Azure SQL Database and SQL-based transformation.
//                 </p>
//               </div>
//             </div>

//             <div className="experience-item">
//               <span>02</span>

//               <div>
//                 <h4>Data Integration</h4>

//                 <p>
//                   Consolidated data from SharePoint, Excel and SQL sources
//                   into centralized datasets for reporting.
//                 </p>
//               </div>
//             </div>

//             <div className="experience-item">
//               <span>03</span>

//               <div>
//                 <h4>Power BI Development</h4>

//                 <p>
//                   Designed and deployed operational dashboards using
//                   Power BI, DAX and Power Query.
//                 </p>
//               </div>
//             </div>

//             <div className="experience-item">
//               <span>04</span>

//               <div>
//                 <h4>Data Quality & Automation</h4>

//                 <p>
//                   Performed validation and reconciliation across reporting
//                   sources and automated payment-readiness tracking.
//                 </p>
//               </div>
//             </div>

//           </div>

//           <div className="experience-tools">
//             <span>Azure Data Factory</span>
//             <span>Azure SQL</span>
//             <span>SQL</span>
//             <span>Power BI</span>
//             <span>DAX</span>
//             <span>Power Query</span>
//             <span>Excel</span>
//           </div>

//         </div>

//       </section>

//       {/* PROJECTS */}
//       <section id="projects" className="projects-section">

//         <div className="section-label">
//           04 — SELECTED PROJECTS
//         </div>

//         <div className="projects-header">

//           <h2>
//             Things I've
//             <span>built with data.</span>
//           </h2>

//           <p>
//             A selection of analytics and business intelligence projects
//             focused on turning raw data into useful decisions.
//           </p>

//         </div>

//         <div className="projects-list">

//           <article className="project-card">

//             <div className="project-top">
//               <span>01</span>
//               <span>PYTHON · SQL · POWER BI</span>
//             </div>

//             <h3>
//               Customer Shopping Behavior Analysis
//             </h3>

//             <p>
//               End-to-end analytics pipeline built on 3,900 customer
//               records, covering data cleaning, feature engineering,
//               SQL analysis and interactive Power BI reporting.
//             </p>

//             <div className="project-tags">
//               <span>Python</span>
//               <span>Pandas</span>
//               <span>SQLite</span>
//               <span>SQL</span>
//               <span>Power BI</span>
//             </div>

//           </article>

//           <article className="project-card">

//             <div className="project-top">
//               <span>02</span>
//               <span>POWER BI · SQL · DAX</span>
//             </div>

//             <h3>
//               Letter of Credit Analytics
//             </h3>

//             <p>
//               Executive dashboard tracking LC exposure, outstanding
//               commitments and bank/vendor performance while reducing
//               recurring report preparation time.
//             </p>

//             <div className="project-tags">
//               <span>Power BI</span>
//               <span>SQL</span>
//               <span>DAX</span>
//             </div>

//           </article>

//           <article className="project-card">

//             <div className="project-top">
//               <span>03</span>
//               <span>POWER BI · SQL · DAX</span>
//             </div>

//             <h3>
//               Procurement Analytics
//             </h3>

//             <p>
//               Procurement analytics solution tracking spend, supplier
//               performance and purchase order status across multiple
//               data sources.
//             </p>

//             <div className="project-tags">
//               <span>Power BI</span>
//               <span>SQL</span>
//               <span>DAX</span>
//             </div>

//           </article>

//           <article className="project-card">

//             <div className="project-top">
//               <span>04</span>
//               <span>POWER BI · DAX</span>
//             </div>

//             <h3>
//               Finance Insights Dashboard
//             </h3>

//             <p>
//               Financial reporting dashboard tracking Sales, COGS and
//               Profit trends across product segments and countries,
//               with detailed business performance analysis.
//             </p>

//             <div className="project-tags">
//               <span>Power BI</span>
//               <span>DAX</span>
//               <span>Analytics</span>
//             </div>

//           </article>

//         </div>

//       </section>

//       {/* CONTACT */}
//       <section id="contact" className="contact-section">

//         <div className="section-label">
//           05 — CONTACT
//         </div>

//         <div className="contact-content">

//           <div>
//             <h2>
//               Let's build something
//               <span>meaningful.</span>
//             </h2>

//             <p>
//               I'm open to opportunities in Data Engineering, Data Analytics
//               and Business Intelligence.
//             </p>
//           </div>

//           <div className="contact-links">

//             <a
//               href="mailto:rudrakshishukla700@gmail.com"
//               className="contact-link"
//             >
//               <span>Email</span>
//               <strong>rudrakshishukla700@gmail.com</strong>
//               <span>↗</span>
//             </a>

//             <a
//               href="https://www.linkedin.com/"
//               target="_blank"
//               rel="noreferrer"
//               className="contact-link"
//             >
//               <span>LinkedIn</span>
//               <strong>Connect on LinkedIn</strong>
//               <span>↗</span>
//             </a>

//             <a
//               href="https://github.com/"
//               target="_blank"
//               rel="noreferrer"
//               className="contact-link"
//             >
//               <span>GitHub</span>
//               <strong>View my GitHub</strong>
//               <span>↗</span>
//             </a>

//             <a
//               href="tel:+918112618462"
//               className="contact-link"
//             >
//               <span>Phone</span>
//               <strong>+91 81126 18462</strong>
//               <span>↗</span>
//             </a>

//           </div>

//         </div>

//         <footer>
//           <span>© 2026 Rudrakshi Shukla</span>
//           <span>Data Engineer · Analytics · BI</span>
//         </footer>

//       </section>

//     </main>
//   )
// }

// // export default App
// import './App.css'
// import DataPipeline3D from './components/DataPipeline3D'

// function App() {
//   return (
//     <main className="portfolio">

//       {/* Global 3D Immersive Background */}
//       <DataPipeline3D />

//       {/* NAVBAR */}
//       <nav className="navbar" id="home">
//         <div className="logo">RS.</div>

//         <div className="nav-links">
//           <a href="#home">Home</a>
//           <a href="#about">About</a>
//           <a href="#skills">Skills</a>
//           <a href="#experience">Experience</a>
//           <a href="#projects">Projects</a>
//           <a href="#contact">Contact</a>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <p className="eyebrow">HELLO, I'M</p>

//           <h1>
//             Rudrakshi
//             <span>Shukla</span>
//           </h1>

//           <h2>Aspiring Data Engineer</h2>

//           <p className="hero-description">
//             Architecting robust end-to-end data pipelines, transforming raw enterprise datasets into actionable intelligence, and bridging the gap between complex cloud infrastructure and high-performance business analytics using Azure Data Factory, Python, SQL, and Power BI.
//           </p>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about" className="about-section">
//         <div className="section-label">
//           01 — ABOUT ME
//         </div>

//         <div className="about-content">
//           <div className="about-heading">
//             <h2>
//               Building reliable
//               <span>data solutions.</span>
//             </h2>
//           </div>

//           <div className="about-text">
//             <p>
//               I'm Rudrakshi Shukla, an aspiring Data Engineer focused on building data pipelines, transforming data and turning complex datasets into meaningful insights.
//             </p>

//             <p>
//               During my internship at MEIL in Hyderabad, I worked with Azure Data Factory, Azure SQL Database, SQL and Power BI to integrate data from multiple sources and deliver reliable reporting solutions.
//             </p>

//             <div className="about-stats">
//               <div>
//                 <strong>01</strong>
//                 <span>Data Engineering</span>
//               </div>
//               <div>
//                 <strong>02</strong>
//                 <span>Business Intelligence</span>
//               </div>
//               <div>
//                 <strong>03</strong>
//                 <span>Data Analytics</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SKILLS */}
//       <section id="skills" className="skills-section">
//         <div className="section-label">
//           02 — SKILLS
//         </div>

//         <div className="skills-header">
//           <h2>
//             Tools I use to
//             <span>build with data.</span>
//           </h2>
//           <p>
//             From data integration and transformation to analytics and visualization, I work across the data workflow.
//           </p>
//         </div>

//         <div className="skills-grid">
//           <div className="skill-card">
//             <span className="skill-number">01</span>
//             <h3>Data Engineering</h3>
//             <p>Building ETL pipelines and integrating data from multiple sources using Azure Data Factory and Azure SQL Database.</p>
//             <div className="skill-tags">
//               <span>Azure Data Factory</span>
//               <span>Azure SQL</span>
//               <span>ETL</span>
//               <span>Data Integration</span>
//             </div>
//           </div>

//           <div className="skill-card">
//             <span className="skill-number">02</span>
//             <h3>SQL & Data</h3>
//             <p>Transforming, cleaning, validating and analysing datasets using SQL and relational databases.</p>
//             <div className="skill-tags">
//               <span>SQL</span>
//               <span>SQLite</span>
//               <span>Data Cleaning</span>
//               <span>Data Validation</span>
//             </div>
//           </div>

//           <div className="skill-card">
//             <span className="skill-number">03</span>
//             <h3>Business Intelligence</h3>
//             <p>Creating interactive dashboards, KPIs and business reports that turn data into actionable insights.</p>
//             <div className="skill-tags">
//               <span>Power BI</span>
//               <span>DAX</span>
//               <span>Power Query</span>
//               <span>KPI Development</span>
//             </div>
//           </div>

//           <div className="skill-card">
//             <span className="skill-number">04</span>
//             <h3>Programming & Analytics</h3>
//             <p>Using Python and analytical techniques for data processing, exploration and business analysis.</p>
//             <div className="skill-tags">
//               <span>Python</span>
//               <span>Pandas</span>
//               <span>Statistics</span>
//               <span>Excel</span>
//             </div>
//           </div>

//           <div className="skill-card">
//             <span className="skill-number">05</span>
//             <h3>Architecture</h3>
//             <p>Understanding modern data architecture concepts for organizing data through different processing layers.</p>
//             <div className="skill-tags">
//               <span>Medallion Architecture</span>
//               <span>Bronze</span>
//               <span>Silver</span>
//               <span>Gold</span>
//             </div>
//           </div>

//           <div className="skill-card">
//             <span className="skill-number">06</span>
//             <h3>Tools & Collaboration</h3>
//             <p>Working with development, documentation and collaboration tools across analytics and data projects.</p>
//             <div className="skill-tags">
//               <span>GitHub</span>
//               <span>Jupyter</span>
//               <span>Google Colab</span>
//               <span>SharePoint</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* EXPERIENCE */}
//       <section id="experience" className="experience-section">
//         <div className="section-label">
//           03 — EXPERIENCE
//         </div>

//         <div className="experience-header">
//           <h2>
//             Experience that
//             <span>shaped my skills.</span>
//           </h2>
//           <p>
//             Hands-on experience working with data integration, ETL, business intelligence and reporting in a professional engineering environment.
//           </p>
//         </div>

//         <div className="experience-card">
//           <div className="experience-top">
//             <div>
//               <span className="experience-role">Business Analyst Intern</span>
//               <h3>MEIL</h3>
//               <p>Megha Engineering & Infrastructures Ltd · Hyderabad</p>
//             </div>
//             <span className="experience-date">Mar 2026 — Sep 2026</span>
//           </div>

//           <div className="experience-body">
//             <div className="experience-item">
//               <span>01</span>
//               <div>
//                 <h4>ETL Pipeline Development</h4>
//                 <p>Built an end-to-end GRN data pipeline using Azure Data Factory, Azure SQL Database and SQL-based transformation.</p>
//               </div>
//             </div>

//             <div className="experience-item">
//               <span>02</span>
//               <div>
//                 <h4>Data Integration</h4>
//                 <p>Consolidated data from SharePoint, Excel and SQL sources into centralized datasets for reporting.</p>
//               </div>
//             </div>

//             <div className="experience-item">
//               <span>03</span>
//               <div>
//                 <h4>Power BI Development</h4>
//                 <p>Designed and deployed operational dashboards using Power BI, DAX and Power Query.</p>
//               </div>
//             </div>

//             <div className="experience-item">
//               <span>04</span>
//               <div>
//                 <h4>Data Quality & Automation</h4>
//                 <p>Performed validation and reconciliation across reporting sources and automated payment-readiness tracking.</p>
//               </div>
//             </div>
//           </div>

//           <div className="experience-tools">
//             <span>Azure Data Factory</span>
//             <span>Azure SQL</span>
//             <span>SQL</span>
//             <span>Power BI</span>
//             <span>DAX</span>
//             <span>Power Query</span>
//             <span>Excel</span>
//           </div>
//         </div>
//       </section>

//       {/* PROJECTS */}
//       <section id="projects" className="projects-section">
//         <div className="section-label">
//           04 — SELECTED PROJECTS
//         </div>

//         <div className="projects-header">
//           <h2>
//             Things I've
//             <span>built with data.</span>
//           </h2>
//           <p>A selection of analytics and business intelligence projects focused on turning raw data into useful decisions.</p>
//         </div>

//         <div className="projects-list">
//           <article className="project-card">
//             <div className="project-top">
//               <span>01</span>
//               <span>PYTHON · SQL · POWER BI</span>
//             </div>
//             <h3>Customer Shopping Behavior Analysis</h3>
//             <p>End-to-end analytics pipeline built on 3,900 customer records, covering data cleaning, feature engineering, SQL analysis and interactive Power BI reporting.</p>
//             <div className="project-tags">
//               <span>Python</span>
//               <span>Pandas</span>
//               <span>SQLite</span>
//               <span>SQL</span>
//               <span>Power BI</span>
//             </div>
//           </article>

//           <article className="project-card">
//             <div className="project-top">
//               <span>02</span>
//               <span>POWER BI · SQL · DAX</span>
//             </div>
//             <h3>Letter of Credit Analytics</h3>
//             <p>Executive dashboard tracking LC exposure, outstanding commitments and bank/vendor performance while reducing recurring report preparation time.</p>
//             <div className="project-tags">
//               <span>Power BI</span>
//               <span>SQL</span>
//               <span>DAX</span>
//             </div>
//           </article>

//           <article className="project-card">
//             <div className="project-top">
//               <span>03</span>
//               <span>POWER BI · SQL · DAX</span>
//             </div>
//             <h3>Procurement Analytics</h3>
//             <p>Procurement analytics solution tracking spend, supplier performance and purchase order status across multiple data sources.</p>
//             <div className="project-tags">
//               <span>Power BI</span>
//               <span>SQL</span>
//               <span>DAX</span>
//             </div>
//           </article>

//           <article className="project-card">
//             <div className="project-top">
//               <span>04</span>
//               <span>POWER BI · DAX</span>
//             </div>
//             <h3>Finance Insights Dashboard</h3>
//             <p>Financial reporting dashboard tracking Sales, COGS and Profit trends across product segments and countries, with detailed business performance analysis.</p>
//             <div className="project-tags">
//               <span>Power BI</span>
//               <span>DAX</span>
//               <span>Analytics</span>
//             </div>
//           </article>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section id="contact" className="contact-section">
//         <div className="section-label">
//           05 — CONTACT
//         </div>

//         <div className="contact-content">
//           <div>
//             <h2>
//               Let's build something
//               <span>meaningful.</span>
//             </h2>
//             <p>I'm open to opportunities in Data Engineering, Data Analytics and Business Intelligence.</p>
//           </div>

//           <div className="contact-links">
//             <a href="mailto:rudrakshishukla700@gmail.com" className="contact-link">
//               <span>Email</span>
//               <strong>rudrakshishukla700@gmail.com</strong>
//               <span>↗</span>
//             </a>

//             <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="contact-link">
//               <span>LinkedIn</span>
//               <strong>Connect on LinkedIn</strong>
//               <span>↗</span>
//             </a>

//             <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact-link">
//               <span>GitHub</span>
//               <strong>View my GitHub</strong>
//               <span>↗</span>
//             </a>

//             <a href="tel:+918112618462" className="contact-link">
//               <span>Phone</span>
//               <strong>+91 81126 18462</strong>
//               <span>↗</span>
//             </a>
//           </div>
//         </div>

//         <footer>
//           <span>© 2026 Rudrakshi Shukla</span>
//           <span>Data Engineer · Analytics · BI</span>
//         </footer>
//       </section>

//     </main>
//   )
// }

// // export default App
// import './App.css'
// import DataPipeline3D from './components/DataPipeline3D'

// function App() {
//   return (
//     <main className="portfolio">

//       {/* Global 3D Immersive Background */}
//       <DataPipeline3D />

//       {/* NAVBAR */}
//       <nav className="navbar" id="home">
//         <div className="logo">RS.</div>

//         <div className="nav-links">
//           <a href="#home">Home</a>
//           <a href="#about">About</a>
//           <a href="#skills">Skills</a>
//           <a href="#experience">Experience</a>
//           <a href="#projects">Projects</a>
//           <a href="#contact">Contact</a>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <p className="eyebrow">HELLO, I'M</p>

//           <h1>
//             Rudrakshi
//             <span>Shukla</span>
//           </h1>

//           <h2>Aspiring Data Engineer</h2>

//           <p className="hero-description">
//             Building robust data pipelines and executive Power BI dashboards with hands-on professional internship experience. Specializing in Azure Data Factory, Azure SQL Database, SQL transformations, and medallion architecture concepts to turn raw enterprise data into reliable insights.
//           </p>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about" className="about-section">
//         <div className="section-label">
//           01 — ABOUT ME
//         </div>

//         <div className="about-content">
//           <div className="about-heading">
//             <h2>
//               Building reliable
//               <span>data pipelines & analytics.</span>
//             </h2>
//           </div>

//           <div className="about-text">
//             <p>
//               I am Rudrakshi Shukla, a Computer Science final-year B.Tech graduate from FGIET Raebareli and an aspiring Data Engineer passionate about building scalable data integration workflows and enterprise reporting solutions.
//             </p>

//             <p>
//               During my professional internship as a Business Analyst Intern at MEIL in Hyderabad, I engineered end-to-end data pipelines using Azure Data Factory (ADF) and Azure SQL Database, applied SQL-based cleaning and transformations, and delivered high-impact operational dashboards in Power BI.
//             </p>

//             <p>
//               My core strengths include data integration, validation, KPI development, and stakeholder reporting. I am actively looking for full-time Data Engineer or Data Analyst roles to contribute toward building robust, high-performance data architectures.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* SKILLS */}
//       <section id="skills" className="skills-section">
//         <div className="section-label">
//           02 — SKILLS
//         </div>

//         <div className="skills-header">
//           <h2>
//             Tools I use to
//             <span>build with data.</span>
//           </h2>
//           <p>
//             Equipped with technical proficiencies across cloud data engineering, modern databases, programming languages, and advanced business intelligence platforms.
//           </p>
//         </div>

//         <div className="skills-grid">
//           <div className="skill-card">
//             <span className="skill-number">01</span>
//             <h3>Data Engineering & Cloud</h3>
//             <p>Building ETL pipelines, handling data ingestion, data modeling, and implementing medallion architecture layers.</p>
//             <div className="skill-tags">
//               <span>Azure Data Factory</span>
//               <span>Azure SQL Database</span>
//               <span>ETL Development</span>
//               <span>Medallion Architecture</span>
//             </div>
//           </div>

//           <div className="skill-card">
//             <span className="skill-number">02</span>
//             <h3>Languages & Tools</h3>
//             <p>Writing scripts, running database queries, and executing data cleaning or transformation workflows.</p>
//             <div className="skill-tags">
//               <span>Python</span>
//               <span>SQL</span>
//               <span>DAX</span>
//               <span>Power Query</span>
//               <span>Excel</span>
//             </div>
//           </div>

//           <div className="skill-card">
//             <span className="skill-number">03</span>
//             <h3>BI & Visualisation</h3>
//             <p>Designing interactive executive dashboards, developing custom KPIs, and implementing AI narratives.</p>
//             <div className="skill-tags">
//               <span>Power BI</span>
//               <span>Dashboard Dev</span>
//               <span>KPI Development</span>
//               <span>Data Storytelling</span>
//             </div>
//           </div>

//           <div className="skill-card">
//             <span className="skill-number">04</span>
//             <h3>Analytics & Quality</h3>
//             <p>Performing data validation, reconciliation, trend analysis, and root cause investigations for business reporting.</p>
//             <div className="skill-tags">
//               <span>Data Cleaning</span>
//               <span>Data Validation</span>
//               <span>Trend Analysis</span>
//               <span>Root Cause Analysis</span>
//             </div>
//           </div>

//           <div className="skill-card">
//             <span className="skill-number">05</span>
//             <h3>Platforms & Ecosystem</h3>
//             <p>Working with relational database environments, notebook interfaces, and cross-functional enterprise portals.</p>
//             <div className="skill-tags">
//               <span>SQLite</span>
//               <span>Jupyter Notebook</span>
//               <span>Google Colab</span>
//               <span>SharePoint</span>
//             </div>
//           </div>

//           <div className="skill-card">
//             <span className="skill-number">06</span>
//             <h3>Collaboration & Competencies</h3>
//             <p>Handling requirement gathering, cross-functional team coordination, version control, and stakeholder communication.</p>
//             <div className="skill-tags">
//               <span>GitHub</span>
//               <span>Requirement Gathering</span>
//               <span>Stakeholder Comm.</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* EXPERIENCE */}
//       <section id="experience" className="experience-section">
//         <div className="section-label">
//           03 — EXPERIENCE
//         </div>

//         <div className="experience-header">
//           <h2>
//             Experience that
//             <span>shaped my skills.</span>
//           </h2>
//           <p>
//             Professional hands-on experience in cloud data ingestion, automation, and reporting optimization at enterprise scale.
//           </p>
//         </div>

//         <div className="experience-card">
//           <div className="experience-top">
//             <div>
//               <span className="experience-role">Business Analyst Intern</span>
//               <h3>MEIL (Megha Engineering & Infrastructures Ltd)</h3>
//               <p>Hyderabad</p>
//             </div>
//             <span className="experience-date">Mar 2026 — Sep 2026</span>
//           </div>

//           <div className="experience-body">
//             <div className="experience-item">
//               <span>01</span>
//               <div>
//                 <h4>ETL Pipeline Development (ADF)</h4>
//                 <p>Built an end-to-end data pipeline for Goods Received Note (GRN) data—extracting from multiple sources, orchestrating ingestion into Azure SQL Database using ADF, and applying SQL transformations before feeding Power BI.</p>
//               </div>
//             </div>

//             <div className="experience-item">
//               <span>02</span>
//               <div>
//                 <h4>Data Integration & Management</h4>
//                 <p>Consolidated fragmented data from SharePoint, Excel, and SQL databases into centralized datasets, reducing manual reporting time by 35% and improving data accessibility for 8+ stakeholders.</p>
//               </div>
//             </div>

//             <div className="experience-item">
//               <span>03</span>
//               <div>
//                 <h4>Dashboard Development</h4>
//                 <p>Designed and deployed 4 operational Power BI dashboards (transport, asset management, payment tracking, GRN tracking) using DAX and Power Query, saving ~6 hours/week.</p>
//               </div>
//             </div>

//             <div className="experience-item">
//               <span>04</span>
//               <div>
//                 <h4>Data Quality Assurance & Automation</h4>
//                 <p>Performed data validation across 5+ reporting sources, achieving a 28% improvement in reporting accuracy, and built an automated payment-readiness tracking tool in Excel.</p>
//               </div>
//             </div>
//           </div>

//           <div className="experience-tools">
//             <span>Azure Data Factory</span>
//             <span>Azure SQL Database</span>
//             <span>SQL</span>
//             <span>Power BI</span>
//             <span>DAX</span>
//             <span>Power Query</span>
//             <span>SharePoint</span>
//           </div>
//         </div>
//       </section>

//       {/* PROJECTS */}
//       <section id="projects" className="projects-section">
//         <div className="section-label">
//           04 — SELECTED PROJECTS
//         </div>

//         <div className="projects-header">
//           <h2>
//             Things I've
//             <span>built with data.</span>
//           </h2>
//           <p>End-to-end analytics and executive reporting solutions built using Python, SQL, and Power BI.</p>
//         </div>

//         <div className="projects-list">
//           <article className="project-card">
//             <div className="project-top">
//               <span>01</span>
//               <span>PYTHON · PANDAS · SQL · SQLITE · POWER BI</span>
//             </div>
//             <h3>Customer Shopping Behavior Analysis</h3>
//             <p>Built a complete end-to-end analytics pipeline on 3,900 customer records covering data cleaning, feature engineering, SQL analysis (7 core business queries), and a Power BI report featuring 5 KPI cards and 9 visualisations.</p>
//             <div className="project-tags">
//               <span>Python</span>
//               <span>Pandas</span>
//               <span>SQLite</span>
//               <span>Power BI</span>
//             </div>
//           </article>

//           <article className="project-card">
//             <div className="project-top">
//               <span>02</span>
//               <span>POWER BI · SQL · DAX</span>
//             </div>
//             <h3>Letter of Credit (LC) Analytics Dashboard</h3>
//             <p>Built an executive dashboard tracking LC exposure, outstanding commitments, and bank-/vendor-wise performance, cutting report preparation time from 4 hours to under 1 hour per cycle.</p>
//             <div className="project-tags">
//               <span>Power BI</span>
//               <span>SQL</span>
//               <span>DAX</span>
//             </div>
//           </article>

//           <article className="project-card">
//             <div className="project-top">
//               <span>03</span>
//               <span>POWER BI · SQL · DAX</span>
//             </div>
//             <h3>Procurement Analytics Dashboard</h3>
//             <p>Built a procurement analytics solution tracking spend, supplier performance, and purchase order status across multiple data sources, cutting tracking time by ~5 hours/week.</p>
//             <div className="project-tags">
//               <span>Power BI</span>
//               <span>SQL</span>
//               <span>DAX</span>
//             </div>
//           </article>

//           <article className="project-card">
//             <div className="project-top">
//               <span>04</span>
//               <span>POWER BI · DAX · TREND ANALYSIS</span>
//             </div>
//             <h3>Finance Insights Dashboard</h3>
//             <p>Designed a financial reporting dashboard tracking Sales, COGS, and Profit trends across 6 product segments and 5 countries, highlighting peak sales in October and regional market metrics.</p>
//             <div className="project-tags">
//               <span>Power BI</span>
//               <span>DAX</span>
//               <span>Trend Analysis</span>
//             </div>
//           </article>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section id="contact" className="contact-section">
//         <div className="section-label">
//           05 — CONTACT
//         </div>

//         <div className="contact-content">
//           <div>
//             <h2>
//               Let's build something
//               <span>meaningful.</span>
//             </h2>
//             <p>Looking for a full-time Data Engineer / Analyst role to learn, grow, and contribute.</p>
//           </div>

//           <div className="contact-links">
//             <a href="mailto:rudrakshishukla700@gmail.com" className="contact-link">
//               <span>Email</span>
//               <strong>rudrakshishukla700@gmail.com</strong>
//               <span>↗</span>
//             </a>

//             <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="contact-link">
//               <span>LinkedIn</span>
//               <strong>Connect on LinkedIn</strong>
//               <span>↗</span>
//             </a>
import './App.css'
import DataPipeline3D from './components/DataPipeline3D'
import HeroGraphic3D from './components/HeroGraphic3D'

function App() {
  return (
    <main className="portfolio">

      {/* Global 3D Immersive Background */}
      <DataPipeline3D />

      {/* NAVBAR */}
      <nav className="navbar" id="home">
        <div className="logo">RS.</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            Rudrakshi
            <span>Shukla</span>
          </h1>

          <h2>Aspiring Data Engineer</h2>

          <p className="hero-description">
            Architecting robust end-to-end ETL/ELT data pipelines, transforming raw enterprise datasets into actionable intelligence, and bridging the gap between complex software infrastructure and high-performance business analytics using Python, SQL, and Power BI.
          </p>
        </div>

        {/* 3D Data Engineer Graphic */}
        <HeroGraphic3D />
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="section-label">
          01 — ABOUT ME
        </div>

        <div className="about-content">
          <div className="about-heading">
            <h2>
              Building reliable
              <span>data & AI solutions.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              I am Rudrakshi Shukla, a Computer Science final-year student and aspiring Data Engineer passionate about engineering reliable ETL/ELT pipelines, structuring enterprise data lakes, and bridging raw datasets with high-impact business intelligence.
            </p>

            <p>
              During my hands-on data analyst internship at MEIL in Hyderabad, I built and managed scalable data workflows using Python, SQL databases, and advanced SQL transformations, while crafting high-performance dashboards in Power BI to streamline operational tracking.
            </p>

            <p>
              Beyond traditional data warehousing and analytics, I actively explore <strong>Basic AI & ML integration</strong>—including Retrieval-Augmented Generation (RAG) pipelines and agentic frameworks—to build intelligent applications that combine deep data processing with smart automation.
            </p>

            <div className="about-stats">
              <div>
                <strong>01</strong>
                <span>Data Engineering</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Business Intelligence</span>
              </div>
              <div>
                <strong>03</strong>
                <span>AI & RAG Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills-section">
        <div className="section-label">
          02 — SKILLS
        </div>

        <div className="skills-header">
          <h2>
            Tools I use to
            <span>build with data.</span>
          </h2>
          <p>
            From Python automation and data engineering to business intelligence and basic AI applications, I work across the modern data workflow.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <span className="skill-number">01</span>
            <h3>Data Engineering</h3>
            <p>Building scalable ETL/ELT pipelines and integrating data sources using Python and relational databases.</p>
            <div className="skill-tags">
              <span>Python</span>
              <span>ETL/ELT Pipelines</span>
              <span>Data Integration</span>
              <span>Automation</span>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-number">02</span>
            <h3>SQL & Data Processing</h3>
            <p>Advanced querying, data cleaning, validation, and schema optimization using SQL and Python libraries.</p>
            <div className="skill-tags">
              <span>SQL</span>
              <span>SQLite</span>
              <span>Pandas</span>
              <span>Data Cleaning</span>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-number">03</span>
            <h3>Business Intelligence</h3>
            <p>Designing interactive executive dashboards, complex DAX measures, and automated reporting systems.</p>
            <div className="skill-tags">
              <span>Power BI</span>
              <span>DAX</span>
              <span>Power Query</span>
              <span>KPI Dashboards</span>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-number">04</span>
            <h3>AI & ML Fundamentals</h3>
            <p>Implementing basic artificial intelligence architectures, including RAG systems and LLM agentic data workflows.</p>
            <div className="skill-tags">
              <span>RAG Frameworks</span>
              <span>Agentic AI</span>
              <span>Python</span>
              <span>Vector Search</span>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-number">05</span>
            <h3>Data Architecture</h3>
            <p>Understanding enterprise storage patterns, staging zones, and multi-layered processing architectures.</p>
            <div className="skill-tags">
              <span>Medallion Architecture</span>
              <span>Data Warehousing</span>
              <span>Schema Design</span>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-number">06</span>
            <h3>Development & Tools</h3>
            <p>Using version control, containerization basics, and documentation tools to manage software and data workflows.</p>
            <div className="skill-tags">
              <span>Git & GitHub</span>
              <span>Docker Desktop</span>
              <span>Jupyter / Colab</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experience-section">
        <div className="section-label">
          03 — EXPERIENCE
        </div>

        <div className="experience-header">
          <h2>
            Experience that
            <span>shaped my skills.</span>
          </h2>
          <p>
            Hands-on professional experience working with data integration, ETL/ELT pipelines, and enterprise business intelligence reporting.
          </p>
        </div>

        <div className="experience-card">
          <div className="experience-top">
            <div>
              <span className="experience-role">Data Analyst Intern</span>
              <h3>MEIL</h3>
              <p>Megha Engineering & Infrastructures Ltd · Hyderabad</p>
            </div>
            <span className="experience-date">Mar 2026 — Jun 2026</span>
          </div>

          <div className="experience-body">
            <div className="experience-item">
              <span>01</span>
              <div>
                <h4>ETL/ELT Pipeline Development</h4>
                <p>Designed and deployed end-to-end data pipelines using Python and SQL databases for automated data movement.</p>
              </div>
            </div>

            <div className="experience-item">
              <span>02</span>
              <div>
                <h4>Cross-Source Integration</h4>
                <p>Consolidated fragmented data from SharePoint logs, Excel records, and relational databases into unified analytical repositories.</p>
              </div>
            </div>

            <div className="experience-item">
              <span>03</span>
              <div>
                <h4>Power BI Dashboards</h4>
                <p>Built dynamic operational dashboards leveraging advanced DAX and Power Query to monitor performance metrics.</p>
              </div>
            </div>

            <div className="experience-item">
              <span>04</span>
              <div>
                <h4>Data Governance & Quality</h4>
                <p>Automated validation checks and exception reporting to guarantee data integrity across enterprise reporting layers.</p>
              </div>
            </div>
          </div>

          <div className="experience-tools">
            <span>Python</span>
            <span>SQL</span>
            <span>Power BI</span>
            <span>DAX</span>
            <span>Power Query</span>
            <span>SharePoint</span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">
        <div className="section-label">
          04 — SELECTED PROJECTS
        </div>

        <div className="projects-header">
          <h2>
            Things I've
            <span>built with data.</span>
          </h2>
          <p>A selection of data engineering, analytics, and AI projects turning complex raw inputs into structured clarity.</p>
        </div>

        <div className="projects-list">
          <article className="project-card">
            <div className="project-top">
              <span>01</span>
              <span>PYTHON · SQL · POWER BI</span>
            </div>
            <h3>Customer Shopping Behavior Analysis</h3>
            <p>End-to-end data processing workflow built across 3,900 customer records, featuring automated cleaning in Python, relational storage in SQLite, and dynamic visual reporting.</p>
            <div className="project-tags">
              <span>Python</span>
              <span>Pandas</span>
              <span>SQLite</span>
              <span>Power BI</span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-top">
              <span>02</span>
              <span>POWER BI · SQL · DAX</span>
            </div>
            <h3>Letter of Credit Analytics Dashboard</h3>
            <p>Executive financial tracking dashboard measuring bank exposure, commitment schedules, and transaction risk profiles to accelerate decision-making.</p>
            <div className="project-tags">
              <span>Power BI</span>
              <span>SQL</span>
              <span>DAX</span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-top">
              <span>03</span>
              <span>PYTHON · RAG · LLM</span>
            </div>
            <h3>Intelligent RAG Chatbot Assistant</h3>
            <p>Context-aware conversational assistant leveraging vector embeddings and retrieval-augmented generation to answer technical queries accurately from unstructured documents.</p>
            <div className="project-tags">
              <span>Python</span>
              <span>RAG</span>
              <span>Embeddings</span>
              <span>Agentic Workflow</span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-top">
              <span>04</span>
              <span>POWER BI · DAX</span>
            </div>
            <h3>Procurement & Finance Insights</h3>
            <p>Comprehensive spend analytics model tracking supplier margins, purchase order lifecycles, and regional cost distribution.</p>
            <div className="project-tags">
              <span>Power BI</span>
              <span>DAX</span>
              <span>Data Modeling</span>
            </div>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="section-label">
          05 — CONTACT
        </div>

        <div className="contact-content">
          <div>
            <h2>
              Let's build something
              <span>meaningful.</span>
            </h2>
            <p>Open to professional roles and collaborations in Data Engineering, Analytics, and AI solutions.</p>
          </div>

          <div className="contact-links">
            <a href="mailto:rudrakshishukla700@gmail.com" className="contact-link">
              <span>Email</span>
              <strong>rudrakshishukla700@gmail.com</strong>
              <span>↗</span>
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="contact-link">
              <span>LinkedIn</span>
              <strong>Connect on LinkedIn</strong>
              <span>↗</span>
            </a>

            <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact-link">
              <span>GitHub</span>
              <strong>View my GitHub</strong>
              <span>↗</span>
            </a>

            <a href="tel:+918112618462" className="contact-link">
              <span>Phone</span>
              <strong>+91 81126 18462</strong>
              <span>↗</span>
            </a>
          </div>
        </div>

        <footer>
          <span>© 2026 Rudrakshi Shukla</span>
          <span>Data Engineer · Analytics · AI</span>
        </footer>
      </section>

    </main>
  )
}

export default App
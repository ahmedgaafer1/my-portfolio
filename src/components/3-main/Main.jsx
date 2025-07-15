import { useState } from "react";
import "./main.css";
import { allProjects } from "./allProjects.js";
import { motion, AnimatePresence } from "framer-motion";
const Category_Items = [
  "All Projects",
  "Angular",
  "React / React Native",
  "Flutter",
  "JavaScript",
  "AI & Simulation",
];
function Main() {
  const [array, setArray] = useState(allProjects);
  const [active, setActive] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const clickHandler = (categoryItem) => {
    setActive(categoryItem);
    const newArr = allProjects.filter((item) => {
      const findCategory = item.category.find((items) => {
        return items === categoryItem;
      });
      return findCategory === categoryItem;
    });
    setArray(newArr);
  };

  const openModal = (project) => {
    setModalProject(project);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalProject(null);
  };

  return (
    <main className="flex" id="Projects">
      <section className="flex leftSection">
        {Category_Items.map((item, index) => {
          return (
            <button
              key={index}
              className={active === item ? "active" : null}
              onClick={() => {
                if (item === "All Projects") {
                  setActive(item);
                  setArray(allProjects);
                } else {
                  clickHandler(item);
                }
              }}
            >
              {item}
            </button>
          );
        })}
      </section>
      <section className="flex rightSection">
        <AnimatePresence>
          {array.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ damping: 8, type: "spring", stiffness: 50 }}
                key={item}
                className="card"
              >
                <img src={item.imgPath} width={266} alt="project image" />
                <div className="box" style={{ width: "266px" }}>
                  <h1 className="title">{item.name}</h1>
                  <p className="subtitle">{item.p}</p>
                  <div className="icons flex">
                    <div className="flex" style={{ gap: "5px" }}>
                      {item.linkProd && item.linkProd !== "#" && (
                        <a
                          href={item.linkProd}
                          target="_blank"
                          className="icon-link"
                        ></a>
                      )}
                      <a
                        href={item.linkGithub}
                        target="_blank"
                        className="icon-github"
                      ></a>
                    </div>
                    <div>
                      <button
                        className="more-btn flex"
                        onClick={() => openModal(item)}
                      >
                        <span>More</span>
                        <span
                          style={{ alignSelf: "end", marginLeft: 4 }}
                          className="icon-arrow-right"
                        ></span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
        {modalOpen && modalProject && (
          <div className="project-modal-overlay" onClick={closeModal}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
              <img
                src={modalProject.imgPath}
                alt={modalProject.name}
                className="modal-img"
              />
              <h2 className="modal-title">{modalProject.name}</h2>
              <p className="modal-desc">{modalProject.p}</p>
              <div className="modal-links">
                {modalProject.linkGithub && (
                  <a
                    href={modalProject.linkGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-github"
                  >
                    GitHub
                  </a>
                )}
                {modalProject.linkProd && modalProject.linkProd !== "#" && (
                  <a
                    href={modalProject.linkProd}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Main;

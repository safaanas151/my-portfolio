import React from "react";

const Skills = () => {
  return (
    <div>
      <div id="skills" className="container pt-32">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div data-aos="zoom-in-up">
            <h2 className="text-4xl md:text-5xl">Technologies I work with</h2>
            <p className="text-gray-500 pt-2">
              I am a passionate web developer with a solid foundation in
              HTML,CSS, and Typescript, complemented by experience in frameworks
              like Next.js. My portfolio showcase a range of projects, from
              interactive apps like a meme generator to visualiy appealing web
              components. I enjoy turning ideas into engaging, responsive web
              experiences,payin attention to both aesthetics and functionality.
              Continously expanding my skill set, I aim to create seamless and
              user-focused digital solutions that leave a lasting impression.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 text-3xl sm:text-4xl">
                <div className="space-y-2">
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Node.js</h2>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

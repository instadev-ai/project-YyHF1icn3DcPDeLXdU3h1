const About = () => {
  const skills = [
    { name: "React", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "UI/UX Design", level: "Intermediate" },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Passionate About Web Development
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            With over 5 years of experience in web development, I specialize in creating modern, 
            responsive web applications using cutting-edge technologies.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {skills.map((skill) => (
              <div key={skill.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{skill.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
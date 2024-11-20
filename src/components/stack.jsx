import React from 'react'

const Stack = () => {
  const skills = [
    { name: 'HTML', level: '90%' },
    { name: 'CSS', level: '80%' },
    { name: 'Tailwind CSS', level: '90%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'React.js', level: '80%' },
    { name: 'GitHub & Git(Version Control)', level: '80%' },
  ];

  return (
    <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">My Knowledge Levels</h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold">{skill.name}</h3>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-indigo-950 h-4 rounded-full" style={{ width: skill.level }}></div>
          </div>
          <span className="text-gray-700">{skill.level}</span>
        </div>
      ))}
    </div>
  </div>
  );
};


export default Stack;
'use client';

import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
}

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch by not rendering anything on server
  }

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

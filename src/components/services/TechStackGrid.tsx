'use client';

import Image from 'next/image';

interface Technology {
  id: string;
  name: string;
  logoUrl: string;
  color: string;
}

export default function TechStackGrid() {
  const technologies: Technology[] = [
    { id: 'tech_react', name: 'React', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    { id: 'tech_angular', name: 'Angular', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', color: '#DD0031' },
    { id: 'tech_vue', name: 'Vue.js', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: '#4FC08D' },
    { id: 'tech_nodejs', name: 'Node.js', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
    { id: 'tech_python', name: 'Python', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
    { id: 'tech_django', name: 'Django', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', color: '#092E20' },
    { id: 'tech_postgresql', name: 'PostgreSQL', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791' },
    { id: 'tech_mongodb', name: 'MongoDB', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
    { id: 'tech_tensorflow', name: 'TensorFlow', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00' },
    { id: 'tech_pytorch', name: 'PyTorch', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: '#EE4C2C' },
    { id: 'tech_flutter', name: 'Flutter', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569B' },
    { id: 'tech_react_native', name: 'React Native', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    { id: 'tech_docker', name: 'Docker', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
    { id: 'tech_kubernetes', name: 'Kubernetes', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5' },
    { id: 'tech_apache_spark', name: 'Apache Spark', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', color: '#E72A2A' },
    { id: 'tech_apache_kafka', name: 'Apache Kafka', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg', color: '#231F20' },
    { id: 'tech_ansible', name: 'Ansible', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', color: '#EE0000' },
    { id: 'tech_cloud', name: 'Cloud', logoUrl: '', color: '#1DE289' },
  ];

  return (
    <div className="py-32 bg-gradient-to-br from-background-alt via-background to-background-alt relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
            Technology Stack
          </p>
          <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight">
            Modern Tools for <span className="serif italic text-primary">Modern Challenges.</span>
          </h2>
        </div>

        {/* Simple grid layout - no categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="group relative bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Logo container with brand color glow */}
              <div 
                className="relative size-14 mx-auto mb-4 rounded-lg bg-background-alt/50 flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300"
                style={{
                  boxShadow: `0 0 20px ${tech.color}20`,
                }}
              >
                {tech.id === 'tech_cloud' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={tech.color}
                    width={40}
                    height={40}
                    className="group-hover:brightness-110 transition-all duration-300"
                  >
                    <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"/>
                  </svg>
                ) : (
                  <Image
                    src={tech.logoUrl}
                    alt={`${tech.name} logo`}
                    width={40}
                    height={40}
                    className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                    unoptimized
                  />
                )}
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold text-sm text-foreground">{tech.name}</h4>
                <div 
                  className="h-1 w-8 mx-auto mt-2 rounded-full transition-all duration-300 group-hover:w-12"
                  style={{ backgroundColor: tech.color }}
                ></div>
              </div>

              {/* Hover effect - brand color accent */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: tech.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-background-alt/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center space-y-4">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              The technologies shown above represent some of the modern tools and frameworks we leverage to build robust, scalable solutions. However, we understand that every project has unique requirements and constraints. We are always open to working with new technologies, frameworks, and tools that best fit your specific needs and business objectives. Our team stays current with emerging technologies and is flexible in adapting our tech stack to deliver optimal solutions for your projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

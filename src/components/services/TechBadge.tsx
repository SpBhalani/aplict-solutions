'use client';

import Image from 'next/image';

interface TechBadgeProps {
  name: string;
  logoUrl?: string;
  color?: string;
  className?: string;
}

// Technology logo mapping
const techLogos: Record<string, { url: string; color: string }> = {
  'Python': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
  'TensorFlow': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00' },
  'PyTorch': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: '#EE4C2C' },
  'Scikit-learn': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg', color: '#F7931E' },
  'Keras': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg', color: '#D00000' },
  'Apache Spark MLlib': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', color: '#E72A2A' },
  'Apache Kafka': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg', color: '#231F20' },
  'Apache Spark': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', color: '#E72A2A' },
  'PostgreSQL': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791' },
  'ClickHouse': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clickhouse/clickhouse-original.svg', color: '#FFCC02' },
  'Apache Superset': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', color: '#E72A2A' },
  'Metabase': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/metabase/metabase-original.svg', color: '#509EE3' },
  'React': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
  'Angular': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', color: '#DD0031' },
  'Vue.js': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: '#4FC08D' },
  'Node.js': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
  'Python/Django': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', color: '#092E20' },
  'Django': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', color: '#092E20' },
  'Ruby on Rails': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg', color: '#CC0000' },
  'Flutter': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569B' },
  'React Native': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
  'Kubernetes': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5' },
  'Docker': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
  'Ansible': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', color: '#EE0000' },
  'Jenkins': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', color: '#D24939' },
  'Selenium': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg', color: '#43B02A' },
  'Robot Framework': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/robotframework/robotframework-original.svg', color: '#00C0B5' },
  'Terraform': { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', color: '#7B42BC' },
};

export default function TechBadge({ name, logoUrl, color, className = '' }: TechBadgeProps) {
  const techInfo = techLogos[name] || { url: logoUrl || '', color: color || '#1DE289' };
  const displayColor = color || techInfo.color;

  return (
    <div
      className={`group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-background-alt/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 ${className}`}
      style={{
        boxShadow: `0 0 0 0 ${displayColor}20`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px ${displayColor}30`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 0 ${displayColor}20`;
      }}
    >
      {techInfo.url && (
        <div className="relative size-5 shrink-0">
          <Image
            src={techInfo.url}
            alt={`${name} logo`}
            width={20}
            height={20}
            className="object-contain filter group-hover:brightness-110 transition-all duration-300"
            unoptimized
          />
        </div>
      )}
      <span className="text-sm font-semibold text-foreground">{name}</span>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full"
        style={{ backgroundColor: displayColor }}
      ></div>
    </div>
  );
}

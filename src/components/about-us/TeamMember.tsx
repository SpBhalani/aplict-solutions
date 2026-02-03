import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export default function TeamMember({ name, role, image, imageAlt }: TeamMemberProps) {
  return (
    <div className="group">
      <div className="aspect-square rounded-3xl overflow-hidden mb-6 shadow-lg relative">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 25vw"
          unoptimized={image.startsWith('http')}
        />
      </div>
      <div className="text-center space-y-2">
        <h4 className="text-xl font-heading font-bold">{name}</h4>
        <p className="text-sm text-muted-foreground uppercase tracking-widest">{role}</p>
      </div>
    </div>
  );
}
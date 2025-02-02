interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  
  export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
    <div className="text-center">
      <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
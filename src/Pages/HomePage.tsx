import { FeatureCard } from '../components/FeatureCard';
import { Pizza, ShoppingCart, Home } from 'lucide-react';

export const HomePage = () => (
  <div className="space-y-16">
    <div className="relative h-screen">
      <img
        src="src/images/pizza.png"
        alt="Pizza Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Bem-vindo à Pizzamar</h1>
          <p className="text-xl mb-8">As melhores pizzas artesanais da cidade</p>
          <button type="button" className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-600">
            Ver Cardápio
          </button>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Pizza className="h-8 w-8 text-white" />}
          title="Ingredientes Frescos"
          description="Selecionamos os melhores ingredientes para nossas pizzas"
        />
        <FeatureCard
          icon={<ShoppingCart className="h-8 w-8 text-white" />}
          title="Entrega Rápida"
          description="Sua pizza chega quentinha em até 40 minutos"
        />
        <FeatureCard
          icon={<Home className="h-8 w-8 text-white" />}
          title="Ambiente Acolhedor"
          description="Venha nos visitar e aproveite nosso espaço"
        />
      </div>
    </div>
  </div>
);
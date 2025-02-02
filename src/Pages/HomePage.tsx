import { FeatureCard } from '../components/FeatureCard';
import { Pizza, ShoppingCart, Home, Star, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const HomePage = () => (
  <div className="space-y-24 bg-white dark:bg-gray-900">
    {/* Hero Section */}
    <div className="relative h-screen">
      <img
        src="src/images/pizza.png"
        alt="Pizza Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">Bem-vindo à Pizzamar</h1>
          <p className="text-2xl mb-10 drop-shadow-lg">As melhores pizzas artesanais da cidade</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-green-600 transition"
          >
            Ver Cardápio
          </motion.button>
        </motion.div>
      </div>
    </div>

    {/* Features Section */}
    <div className="container mx-auto px-6">
      <motion.div
        className="grid md:grid-cols-3 gap-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
        }}
      >
        {[{
          icon: <Pizza className="h-10 w-10 text-white" />, 
          title: "Ingredientes Frescos", 
          description: "Selecionamos os melhores ingredientes para nossas pizzas."
        }, {
          icon: <ShoppingCart className="h-10 w-10 text-white" />, 
          title: "Entrega Rápida", 
          description: "Sua pizza chega quentinha em até 40 minutos."
        }, {
          icon: <Home className="h-10 w-10 text-white" />, 
          title: "Ambiente Acolhedor", 
          description: "Venha nos visitar e aproveite nosso espaço."
        }].map((feature, index) => (
          <motion.div key={index} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Depoimentos */}
    <div className="bg-gray-100 dark:bg-gray-800 py-20 text-gray-900 dark:text-white text-center">
      <h2 className="text-5xl font-bold mb-10">O que nossos clientes dizem</h2>
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
        {["A melhor pizza que já experimentei! Super saborosa e bem feita.", 
          "Entrega rápida e atendimento maravilhoso! Recomendo demais.", 
          "Ambiente incrível e pizzas ainda melhores. Volto sempre!"].map((review, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-xl hover:shadow-2xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="text-yellow-500 mx-auto mb-4" size={40} />
            <p className="italic dark:text-gray-100">"{review}"</p>
            <p className="mt-4 font-bold dark:text-gray-100">- {['João Silva', 'Maria Santos', 'Pedro Oliveira'][index]}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Contato e Localização */}
    <div className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">Entre em contato</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {[{ 
          icon: <Phone className="h-10 w-10 text-green-500" />, 
          text: "(61) 99999-9999" 
        }, { 
          icon: <MapPin className="h-10 w-10 text-green-500" />, 
          text: "Rua das Pizzas, 123 - Brasília, DF" 
        }].map((contact, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center space-x-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition text-gray-900 dark:text-white"
            whileHover={{ scale: 1.05 }}
          >
            {contact.icon}
            <p className="text-lg font-medium">{contact.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
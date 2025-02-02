import React, { useContext } from 'react';
import { Check } from 'lucide-react';
import { AppContext } from '../context/AppContext';

export const AboutPage = () => {
  const { darkMode } = useContext(AppContext)!;

  return (
    <div className={`${darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Nossa História</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative">
              <img
                src="src/images/pizza.png"
                alt="Nossa História"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg">
                <span className="font-bold">Desde 1990</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Fundada em 1990, a Pizzamar nasceu do sonho de criar as melhores pizzas artesanais da cidade.
                Com receitas tradicionais italianas passadas de geração em geração, nos dedicamos a oferecer uma
                experiência gastronômica única.
              </p>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Nossa massa é preparada diariamente, seguindo um processo de fermentação natural que dura 48 horas,
                resultando em uma textura leve e crocante. Utilizamos apenas ingredientes frescos e de alta qualidade,
                selecionados criteriosamente por nossa equipe.
              </p>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Hoje, continuamos com o mesmo compromisso de servir pizzas excepcionais, mantendo viva a tradição
                e o amor pela arte da pizza.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Ingredientes Frescos',
                description: 'Selecionamos diariamente os melhores ingredientes para nossas pizzas.'
              },
              {
                title: 'Tradição Italiana',
                description: 'Receitas autênticas transmitidas por gerações de pizzaiolos.'
              },
              {
                title: 'Massa Artesanal',
                description: '48 horas de fermentação natural para o sabor perfeito.'
              }
            ].map((feature, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
                <div className="flex items-center mb-4">
                  <Check className="text-red-500 mr-2" size={24} />
                  <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                </div>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
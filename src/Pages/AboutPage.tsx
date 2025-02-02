export const AboutPage = () => (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Nossa História</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="src/images/pizza.png"
            alt="Nossa História"
            className="rounded-lg shadow-lg"
          />
          <div>
            <p className="mb-4">
              Fundada em 1990, a Pizzamar nasceu do sonho de criar as melhores pizzas artesanais da cidade.
              Com receitas tradicionais italianas passadas de geração em geração, nos dedicamos a oferecer uma
              experiência gastronômica única.
            </p>
            <p className="mb-4">
              Nossa massa é preparada diariamente, seguindo um processo de fermentação natural que dura 48 horas,
              resultando em uma textura leve e crocante. Utilizamos apenas ingredientes frescos e de alta qualidade,
              selecionados criteriosamente por nossa equipe.
            </p>
            <p>
              Hoje, continuamos com o mesmo compromisso de servir pizzas excepcionais, mantendo viva a tradição
              e o amor pela arte da pizza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { CardEvento } from "./components/CardEvento";
import { FormularioDeEvento } from "./components/FormularioDeEventos";
import { Tema } from "./components/Tema";

function App() {
  const temas = [
    {
      id: 1,
      nome: "front-end",
    },
    { id: 2, nome: "back-end" },
    {
      id: 3,
      nome: "devops",
    },
    {
      id: 4,
      nome: "inteligência artificial",
    },
    {
      id: 5,
      nome: "data science",
    },
    {
      id: 6,
      nome: "cloud",
    },
  ];

  const [eventos, setEvenetos] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front-end",
    },
  ]);

  function adicionarEvento(evento) {
    // evento.push(evento)
    setEvenetos([...eventos, evento]);
  }

  return (
    <main>
      <header>
        <img src="/Logo.png" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />
      <section className="container">
        {temas.map(function (tema) {
          if (
            !eventos.some(function (evento) {
              return evento.tema.id == tema.id;
            })
          ) {
            return null;
          }
          return (
            <section key={tema.id}>
              <Tema tema={tema} />
              <div className="eventos">
                {" "}
                {eventos
                  .filter(function (evento) {
                    return evento.tema.id == tema.id;
                  })
                  .map(function (evento, index) {
                    return <CardEvento evento={evento} key={index} />;
                  })}
              </div>
            </section>
          );
        })}
      </section>

      {/* 
      <section>
        <Tema tema={temas[1]} />
      </section>
      <section>
        <Tema tema={temas[2]} />
      </section>
      <section>
        <Tema tema={temas[3]} />
      </section>
      <section>
        <Tema tema={temas[4]} />
      </section>
      <section>
        <Tema tema={temas[5]} />
      </section> */}
    </main>
  );
}

export default App;

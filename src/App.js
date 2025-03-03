import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://cdn2.gnarususercontent.com.br/6/408897/2992a46f-a1cd-4a9c-88eb-bdb61087f9c2.jpg?width=100&height=100&aspect_ratio=1:1",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuidv4(),
      equipo: "Ux y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: true
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo: "Ux y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  // Ternario --> condición ? seMuestra : noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador: ", colaborador)

    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevoscolaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevoscolaboradores)
  }

  // Actualizar color de equipo

  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  // Crear equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
  }

  const like = (id) => {
    console.log("like",id)

    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {
        mostrarFormulario ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador} crearEquipo={crearEquipo}/> : <></>
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }

      <Footer />

    </div>
  );
}

export default App;

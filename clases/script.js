class libro {
    //constructor para inicializar propiedades

    constructor(titulo, autor, genero, leido = false) {
        this.titulo = titulo
        this.autor = autor
        this.genero = genero
        this.leido = leido
    }

    //metodo para saludar
    marcarComoLeido() {
        this.leido = true
        console.log("Este libro ha sido leido")
    }

    marcarComoNoLeido() {
        this.leido = false
        console.log("Este libro no ha sido leido")
    }

    informacion() {
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Género: ${this.genero}, Leído: ${this.leido ? "si" : "no" }`)
    }
}

const libro1 = new libro("libro", "samuel", "aventura")
const libro2 = new libro("libroo", "angel", "aventuraa")

libro1.informacion()
libro1.marcarComoLeido()
libro1.informacion()
libro1.marcarComoNoLeido()


// parte 2

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log("Hola, mi nombre es " + this.nombre)
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad)

        this.grado = grado
    }

    estudiar() {
        console.log("Soy " + this.nombre + "y estoy estudiando")
    }
}

const estudiante = new Estudiante("Jhon", 21, "Once")
estudiante.saludar()
estudiante.estudiar()
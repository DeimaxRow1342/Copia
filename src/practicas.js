import ModuloMetricas from "./moduloMetricas";

class Practicas{
  constructor(){
    this.nombre = null;
    this.descripcion = null;
    this.fecha = null;
    this.enlace = null;
    this.ModuloMetricas = new ModuloMetricas();
    this.lastCommitNumber = 0;
    this.pruebas = [];
  }

  cargarDatos(nombre, descripcion, fecha, enlace){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.enlace = enlace;
  }

  obtenerPractica(nombre){
    if(this.nombre == nombre){
        return this;
    }
  }
  

  anadirMetrica(numeroCommit, explicacion, pruebas, cobertura, tipo) {
    // Validar que el número de commit sea exactamente uno más que el último
    if (numeroCommit === this.lastCommitNumber + 1) {
        this.ModuloMetricas.anadirMetricaCommit(numeroCommit, explicacion, pruebas, cobertura, tipo);
        this.lastCommitNumber = numeroCommit; // Actualizar el último número de commit
        return true;
    }
    return false; 
  }

  motrarMetricas(){
    return this.ModuloMetricas.desplegarMetrica();
  }

  eliminarDatos(nombre){
    if(this.nombre == nombre){
        this.nombre = null;
        this.descripcion = null;
        this.fecha = null;
        this.enlace = null;
        this.tipo = null;
    }
  }
  editarDatos(nuevoNombre, nuevaDescripcion, nuevaFecha, nuevoEnlace, nuevoTipo){
    this.nombre = nuevoNombre;
    this.descripcion = nuevaDescripcion;
    this.fecha = nuevaFecha;
    this.enlace = nuevoEnlace;
    this.tipo = nuevoTipo;
  }

  eliminarMetrica(numeroCommit) {
    this.ModuloMetricas.eliminarMetricaCommit(numeroCommit);
  }  

  contarPruebas() {
    return this.pruebas.length;
  }
  obtenerRecomendacion() {
    const metricas = this.motrarMetricas();
    const numeroCommits = metricas.length;

    if (numeroCommits === 0) {
      return "no existen commits";
    }

    if (numeroCommits > 0 && numeroCommits === this.contarPruebas()) {
      return "el numero de pruebas agregadas fue agregada de buena manera, buen trabajo!";
    }else if (numeroCommits > 0 && numeroCommits !== this.contarPruebas()) {
      return "el numero de pruebas agregadas fue implementada de muy mala forma, ten cuidado!";
    }

  }
  
}

export default Practicas;

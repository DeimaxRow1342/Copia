import MetricaArray from "./metricasArray";

class Practicas{
  constructor(){
    this.nombre = null;
    this.descripcion = null;
    this.fecha = null;
    this.enlace = null;
    this.metricaArray = new MetricaArray();
    this.lastCommitNumber = 0;
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

  anadirMetrica(numeroCommit, puntaje, explicacion) {
    // Validar que el número de commit sea exactamente uno más que el último
    if (numeroCommit === this.lastCommitNumber + 1) {
        this.metricaArray.anadirMetricaCommit(numeroCommit, puntaje, explicacion);
        this.lastCommitNumber = numeroCommit; // Actualizar el último número de commit
        return true;
    }
    return false; // Retornar false si el número no es el siguiente en la secuencia
  }

  motrarMetricas(){
    return this.metricaArray.desplegarMetrica();
  }

  eliminarDatos(nombre){
    if(this.nombre == nombre){
        this.nombre = null;
        this.descripcion = null;
        this.fecha = null;
        this.enlace = null;
    }
  }
}

export default Practicas;

export interface Resultado {
  id_resultado: number;
  id_autoestima: number;
  clasificacion: string;
  nivel_autoestima: string;
  puntaje: number;
}

export interface Resultado2 {
  id_resultado: number;
  autoestima: Autoestima;
  clasificacion: Clasificacion; 
}
export interface Clasificacion {
  id_clasificacion: number;
  nombre: string;
  descripcion: string | null;
}
export interface Autoestima {
  id_autoestima: number;
  nivel_autoestima: string;
  descripcion: string;
  recomendaciones: Recomendacion[] | null;
  estado_recomendacion: boolean;
}
export interface Recomendacion {
  id_recomendacion: number;
  titulo: string;
  contenido: string;
  sub_recomendaciones: SubRecomendacion[]  | null;
}
export interface SubRecomendacion {
  id_sub_recomendacion: number;
  titulo: string;
  contenido: string;
}
export interface Vehiculo {
    codigo: string;
    marca: string;
    color?: string;
    modelo: string;
    kilometraje?: number;
    precio?: number;
    foto?: string | null;
    anio?: number;
    calificacion?: number | undefined;
}
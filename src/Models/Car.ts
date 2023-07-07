import { Especificacoes } from "./Especificacoes";

export type Car = {
    id: number;
    modelo: string;
    marca: string;
    titulo: string;
    imagens: string[];
    especificacoes: Especificacoes;
    diaria: number;
    descricao: string;
    colorhex: string;
}
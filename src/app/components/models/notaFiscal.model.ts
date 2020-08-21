import { ItemNota } from './ItemPrecoRe.model';

export interface NotaFiscal{
    id?:number;
    chave?:string;
    local?:string;
    dataEmissao: Date;
    valorTotal: number;
    valorDesconto: number;
    listaItens?: ItemNota[];
    cnpj?:string;
}
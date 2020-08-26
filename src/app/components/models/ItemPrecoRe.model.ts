export interface ItemNota{
    id?:number;
    codigo: string;
    descricao?: string;
    qtd?: number;
    unidade?: string;
    dt?: Date;
    valorUnitario?: number;
    variacao?: number;
    valorTotal?: number;
    totalGeral?: number;
    avg?: number;
    min?: number;
    max?: number;
}
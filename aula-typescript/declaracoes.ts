// declarações de variaveis
let nome:string = 'joao';
let idade: number= 25;
let estaAtivo: boolean = true;

//arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string [] = ['Ana', 'Bruno', 'Carlos'];
let misto: (string | number) [] = ['Ana', 25, 'Carlos', 30];
let misto2: Array<string | number> = ['ana', 25, 'Carlos', 30];

//tuplas
let pessoa: [string, number] = ['Maria',30];

//Union Types
let id: number | string = 123;
id = 'ABC123';

//Interfaces - são usadas para definir estrutura de objetos
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //opcional
    }

//utilizar elas ficam assim:

let novo_usuario: Usuario = {
    nome: 'William',
    idade: 31
};

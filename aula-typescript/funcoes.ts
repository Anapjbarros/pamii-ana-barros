function saudacao(nome: string): string {
    return 'Ola, ${nome}!';
}

console.log(saudacao('leandro'));

//interface para objetio usuario
interface Usuario{
    nome: string;
    idade: number;
    email?: string;
}
//utilizando a interface usuario fica assim:
function exibirUsuario(usuario:Usuario): void {
    console.log ('nome: ${usuario.nome}');
    console.log('idade: ${usuario.idade}');
}

exibirUsuario({nome: 'William', idade: 31});

//exemplo de uma funcão que retorna arrays e tem parametros opcionais
function listarNomes(nomes: string[]):void{
    nomes.forEach(nome => console.log(nome));
}
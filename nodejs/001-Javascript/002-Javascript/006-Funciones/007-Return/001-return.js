function saluda(nombre,edad,email){
    cadena ="";
    cadena += "Me llamo "+nombre+".\n";
    cadena += "Tengo "+edad+" años\n"
    cadena += "Mi correo es "+email+"\n"
    return cadena;
}

console.log(saluda("lolo",67,"2@email"));
console.log(saluda("Pepe",21,"email"));
console.log(saluda("Juan",89,"email"));
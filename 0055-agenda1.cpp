#include <iostream>
#include <iostream>
using namespace std;

int main(){
    //Defino los datos con los que voy a trabajar
        //Defino la longitud de la agenda
    int longitud = 100;
    // Creo una estructura
    struct registro{
        string nombre;
        int telefono;
        string email;
    };
    //Defino el array de agenda
    registro agenda [100];
    //Guardo la opcion del usuario
    string opcion;
    //Muestro el menu inicial al usuario de la aplicacion
    cout << "Programa agenda v.001 por Jose Alberto\n";
    cout << "Escoge una opcion:\n";
    cout << "1.-Introducir un registro";
    cout << "2.-Listar registros\n";
    cin >> opcion;
    cout << "Has elegido la opcion; " << opcion << "\n";
    
    return 0;
}
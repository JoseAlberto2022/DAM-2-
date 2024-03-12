#include <iostream>
using namespace std;

int main(){
    string diadelasemana = "miercoles";
    switch(str2int(diadelasemana)){
            
    }
    case str2int("lunes"):
        cout << "Hoy es el peor dia de la semana\n";
        break;
    case str2int("martes"):
        cout << "Hoy es el segundo peor dia de la semana\n";
        break;
    case str2int("miercoles"):
        cout << "Ya estamos a mitad de semana\n";
        break;
    case str2int("jueves"):
        cout << "Hoy es juernes\n";
        break;
    case str2int("viernes"):
        cout << "Por fin es viernes\n";
        break;
    case str2int("sabado"):
        cout << "Ya es fin de semana\n";
        break;
    case str2int("domingo"):
        cout << "Puta madre\n";
        break;
    default:
        cout << "Lo que has introducido no es un día de la semana\n";
    }
    return 0;
}
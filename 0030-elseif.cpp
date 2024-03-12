#include <iostream>
using namespace std;

int main(){
    string diadelasemana = "miercoles";
    if(diadelasemana == "lunes"){
        cout << "Hoy es el peor dia de la semana\n";
    }else if(diadelasemana == "martes"){
        cout << "Hoy es el segundo peor dia de la semana\n";
    }else if(diadelasemana == "miercoles"){
        cout << "Ya estamos a mitad de semana\n";
    }else if(diadelasemana == "jueves"){
        cout << "Hoy es juernes\n";
    }else if(diadelasemana == "viernes"){
        cout << "Por fin es viernes\n";
    }else if(diadelasemana == "sabado"){
        cout << "Ya es fin de semana\n";
    }else if(diadelasemana == "domingo"){
        cout << "Puta madre\n";
    }else if(diadelasemana == "longaniza"){
        cout << "Lo que has introducido no es un día de la semana\n";
    }
    return 0;
}
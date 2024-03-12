#include <iostream>
#include <iostream>
using namespace std;

int main(){
    struct{
        string nombre;
        int telefono;
        string email;
    } registro1,registro2;
    
    registro1.nombre = "Jose Vicente";
    registro1.telefono = 6546654;
    registro1.email = "email@email";
    
    cout << registro1.nombre << "\n";
    
    return 0;
}
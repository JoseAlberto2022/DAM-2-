#include <iostream>
#include <iostream>
using namespace std;

int main(){
    struct registro{
        string nombre;
        int telefono;
        string email;
    };
    
    registro agenda [20];
    agenda[0].nombre = "Jose Vicente";
    agenda[0].telefono = 556641;
    agenda[0].email = "email@email";
    
    cout << agenda[0].nombre << "\n";
    
    return 0;
}
#include <iostream>
using namespace std;

class Persona{
    public:
        string nombre;
        int edad;
    private:
        double altura; 
};

int main(){
    
    Persona persona1;
    persona1.nombre = "Jose Vicente";
    persona1.altura = 1.80;

    return 0;
}
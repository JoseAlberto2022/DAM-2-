#include <iostream>
using namespace std;

class Animal{
    public:
        string seMueve(){
            return "este animal se mueve\n";
        }
};

class Mamifero: public Animal{
    public:
        string mama(){
            return "este animal mama cuando es pequeño\n";
        }
};

class Gato: public Mamifero{
    public:
        string nombre;
        int edad;
        string maulla(){
            return "el gato esta maullando\n";
        }
};

int main(){
    Gato gato1;
    cout << gato1.maulla();
    cout << gato1.mama();
    cout << gato1.seMueve();

    return 0;
}
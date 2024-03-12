#include <iostream>
#include <string>
using namespace std;

int main(){
    string nombre = "Jose Alberto";
    string &referencia = nombre;
    
    cout << &nombre << "\n";
    
    return 0;
}
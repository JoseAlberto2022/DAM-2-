#include <iostream>
#include <iostream>
using namespace std;

int main(){
    int longitud = 20;
    string agenda[20][3];
    agenda[0][0] = "Jose Vicente";
    agenda[0][1] = "4666557";
    agenda[0][2] = "jocarsa@f.com";
    
    agenda[1][0] = "Carlos";
    agenda[1][1] = "65451";
    agenda[1][2] = "carlos@carlos";
    
    agenda[2][0] = "Celia";
    agenda[2][1] = "445667";
    agenda[2][2] = "celia@cs";
    
    for(int i = 0;i<longitud;i++){
        cout << "nombre: " << agenda[i][0] << " - telefono: " << agenda[i][1] << " - email: " << agenda[i][2] << "\n";
    }
    
    return 0;
}
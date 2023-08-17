var theList =[];
class Personas {
    constructor(id, nombre, mail) {
          this._id = id;
          this._nombre = nombre; 
          this._mail = mail;
          this.info = ' Mail enviado a : ' + this._mail;
          this.pushToTheList = function() { 
            theList.push(this.mail);
        }
        this.pushToTheList(); // And so does this.
    };
    Enviar(){
        alert(this.info);
        return  ;
    };
    EnviaraTodos()
    {        
        alert(' Mail enviado a : ' + theList);
        return  ;
    }    

    get id(){ return this._id; }
    get mail(){ return this._mail; }
    get nombre(){ return this._nombre; }
  }                 
  
  const pen1 = new Personas(1, "Pedro", "pedro@mail.cl");
  const pen2 = new Personas(2, "Juan", "juan@mail.cl");
  const pen3 = new Personas(3, "Jorge", "jorge@mail.cl");
  const pen4 = new Personas(4, "Diego", "diego@mail.cl");

  const todos = new Personas();

  //console.log(theList)
  //console.log(pen1.mail);
  
  document.getElementById("a11").innerHTML =  pen1.id; 
  document.getElementById("a12").innerHTML =  pen1.nombre; 
  document.getElementById("a13").innerHTML =  pen1.mail;

  document.getElementById("a21").innerHTML =  pen2.id; 
  document.getElementById("a22").innerHTML =  pen2.nombre; 
  document.getElementById("a23").innerHTML =  pen2.mail;

  document.getElementById("a31").innerHTML =  pen3.id; 
  document.getElementById("a32").innerHTML =  pen3.nombre; 
  document.getElementById("a33").innerHTML =  pen3.mail;

  document.getElementById("a41").innerHTML =  pen4.id; 
  document.getElementById("a42").innerHTML =  pen4.nombre; 
  document.getElementById("a43").innerHTML =  pen4.mail;

  




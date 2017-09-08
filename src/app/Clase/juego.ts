export class Juego {
    Nombre:string;
    NumeroSecreto:number;
    Gano:boolean;
    Jugador:string;
    NumeroGenerador:boolean;
    NumeroIngresado:number;
    cont:number;
    GenerarNuevo()
    {
        
    this.NumeroSecreto=Math.floor(Math.random()*100);
    console.info("numero",this.NumeroSecreto);
    this.NumeroGenerador=true;
    this.Gano=false;
    this.NumeroIngresado=null;
    this.cont=0;
  
    }
    Verificar(_numero:Int32Array)
    {
        if(this.NumeroSecreto==this.NumeroIngresado)
            {
               this.Gano=true;
               this.NumeroGenerador=false;

            }
            else

                this.Gano=false;
                this.cont++;

    }
}

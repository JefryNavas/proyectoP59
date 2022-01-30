import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LevelCapLogger } from '@angular-devkit/core/src/logger';

@Component({
  selector: 'app-lista-niveles2',
  templateUrl: './lista-niveles2.page.html',
  styleUrls: ['./lista-niveles2.page.scss'],
})
export class ListaNiveles2Page implements OnInit {

  public list: Array<any>;
  public list2: Array<any>;
  public progress:number;
  public iniciado: Array<any>=[];
  public id_modo:any;

  constructor(public dataservice: DataService,
    public alertController: AlertController,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id_modo = this.route.snapshot.paramMap.get('id');
    this.id_modo = Number(this.id_modo);
    this.dataservice.obtenerUsuarioLogeado();
    const id = this.dataservice.usuarioLoged.id_usuario;
    this.dataservice.obtenerNiveles((status)=>{
      this.list = status;
    });
    this.dataservice.getProgresoByModo(id,2,(status2)=>{
      console.log(status2);
      this.list2 = status2;
      for(let i=0;i<this.list2.length;i++){
        this.iniciado.unshift(this.list2[i].title);
      }

    });
  }

  isInit(nivel){
    const resp = this.iniciado.some(x => x=== nivel);
    return resp;
  }


  getProgress(name){
      const resultado = this.list2.find( level => level.title === name );
      if(resultado.title == 'Nivel 1'){
        this.progress = ((resultado.aciertos + resultado.fallos)/10)*100;
      }else{
        this.progress = ((resultado.fallos + resultado.aciertos)/10)*100;
      }

      //this.progress = ((resultado.aciertos + resultado.fallos)/10)*100;
    return this.progress;
  }

  async presentAlertButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Espera',
      message: 'No puedes acceder hasta completar el nivel de arriba',
      buttons: ['Ok']
    });

    await alert.present();
  }

}
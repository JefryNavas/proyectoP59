import { Component, OnInit } from '@angular/core';
import { ModalPopoverPage } from '../../componentes/modal-popover/modal-popover.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-escritura',
  templateUrl: './escritura.page.html',
  styleUrls: ['./escritura.page.scss'],
})
export class EscrituraPage implements OnInit {

  modelData: any;
  public list: Array<any>;
  constructor(
              public modalController: ModalController) { }
  ngOnInit() {
    this.list = [
      {id:1,
      title: 'Nivel 1', progress: '35',
      aciertos:'15', fallos:'5' },

      {id:2,
      title: 'Nivel 2', progress: '15',
      aciertos:'10', fallos:'10' },

      {id:3,
      title: 'Nivel 3', progress: '4',
      aciertos:'0', fallos:'0',
      },

      {id:4,
      title: 'Nivel 4', progress: '0',
      aciertos:'0', fallos:'0',
      },

      {id:5,
      title: 'Nivel 5', progress: '0',
      aciertos:'0', fallos:'0',
      }

  ];
  }


  async openIonModal(id) {
    const resultado = this.list.find( level => level.id === id );
    const modal = await this.modalController.create({
      component: ModalPopoverPage,
      cssClass: 'my-custom-class',
      componentProps:{
        nombre: resultado.title,
        aciertos: resultado.aciertos,
        fallos: resultado.fallos
      }
    });
    modal.onDidDismiss().then((modelData)=>{
      if (modelData !== null) {

        this.modelData = modelData.data;
      }
    });
    return await modal.present();

  }

}

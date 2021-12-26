import { ItemListaComrpas } from "./../models/itemListaCompras.model";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { NotificationService } from "src/app/services/notification.service";
import { ServiceControlService } from "src/app/services/service-control.service";

@Component({
  selector: "nfx-lista-compras-incluir",
  templateUrl: "./lista-compras-incluir.component.html",
  styleUrls: ["./lista-compras-incluir.component.css"],
})
export class ListaComprasIncluirComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private service: ServiceControlService,
    private notification: NotificationService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.createForm(new ItemListaComrpas());
  }

  createForm(item: ItemListaComrpas) {
    this.formGroup = this.fb.group({
      //id: [item.id],
      //tick: [item.tick],
      descritivo: [item.descritivo],
      //itemNota: [item.itemNota],
    });
  }

  onSubmit() {
    this.service.incluirItemListaCompras(this.formGroup.value).subscribe
    (it => {
      console.log(it)
      this.createForm(new ItemListaComrpas());
      }
    )
  }

}

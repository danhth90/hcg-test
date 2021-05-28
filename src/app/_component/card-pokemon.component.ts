import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { SimplifiedPokemon } from 'src/app/_models/pokemon.model';
import { PokemonService } from 'src/app/_services/pokemon.service';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

@Component({
  selector: 'hcg-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {
  @Input() pokemon: Observable<SimplifiedPokemon>;
  @Input() id: number | string;

  vmPokemon$: Observable<SimplifiedPokemon>
  constructor(private pokeSvr: PokemonService,
    private modal: NzModalService,
    private vcf: ViewContainerRef) { }

  ngOnInit(): void {
    this.pokemon = this.pokeSvr.getPokemonDetail(this.id.toString());
  }

  openDialog(vm:SimplifiedPokemon){
    const modal = this.modal.create({
      nzTitle: `${vm.name} - Detail information`,
      nzContent: DetailPokemonComponent,
      nzViewContainerRef: this.vcf,
      nzComponentParams: {
        pokemon: vm
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      nzFooter: [
        
      ]
    });
  }
}

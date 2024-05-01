import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/Cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrl: './cadastrar-cliente.component.css'
})
export class CadastrarClienteComponent {

  public cliente: Cliente = new Cliente(0, '', '');

  constructor(private _clienteService: ClienteService, private _router: Router) { }

  cadastrar(): void {
    this._clienteService.cadastrarCliente(this.cliente).subscribe(cliente => {
      this.cliente = new Cliente(0, '', '');
      alert('Cliente cadastrado com sucesso!');
    },
      err => {
        alert('Erro ao cadastrar cliente!');
      }
    );

    this._router.navigate(['/listar-cliente']);

  }
}

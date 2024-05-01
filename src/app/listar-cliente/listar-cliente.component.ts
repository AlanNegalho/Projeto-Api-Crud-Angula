import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/Cliente.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})

export class ListarClienteComponent {

  public clientes: Cliente[] = [];

  clienteService: ClienteService;

  constructor(clienteService: ClienteService, private _router: Router) {
    this.clienteService = clienteService;
  }


  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void {
    this.clienteService.getClientes().subscribe(
      (retornaCliente: any[]) => {
        this.clientes = retornaCliente.map(
          item => {
            return new Cliente(
              item.id,
              item.nome,
              item.endereco
            );
          }
        )
      },
      error => {
        console.error('Erro ao listar clientes:', error);
      }
    )
  }

}

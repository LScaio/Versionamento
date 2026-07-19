import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css'],
  standalone: false
})
export class CadastrarClienteComponent {
  nome = '';
  endereco = '';

  constructor(private service: ClienteService, private router: Router) {}

  cadastrar(): void {
    const cliente = new Cliente();

    cliente.nome = this.nome;
    cliente.endereco = this.endereco;

    this.service.cadastrarCliente(cliente).subscribe(() => {
      this.router.navigate(['/clientes']);
    });
  }
}
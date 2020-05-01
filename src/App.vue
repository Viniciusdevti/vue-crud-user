
<template>
  <div id="app">

    <nav color="red">
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Cadastro de ongs</a>
      </div>
    </nav>

    <div class="container">

      <form>

          <label>Nome</label>
          <input type="text" placeholder="Nome">
          <label>Quantidade</label>
          <input type="number" placeholder="QTD">
          <label>Valor</label>
          <input type="text" placeholder="Valor">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form >
<table>

        <thead>

          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Data de nascimento</th>
            <th>CPF</th>
            <th>Tipo de usuário</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="user of users" :key="user.id">

            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.data }}</td>
            <td>{{ user.cpf }}</td>
            <td>{{ user.typeUser }}</td>
          
            <td>
              <button @click="editar(user)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="remover(user)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>


<script>

import Users from './service/users'

export default {

  data(){
    return {
      users: []
      }
  },
  
  mounted(){
    Users.listar().then(resposta => {
      console.log(resposta.data);
      this.users = resposta.data;
            })

  }
  }

</script>


<style>

</style>


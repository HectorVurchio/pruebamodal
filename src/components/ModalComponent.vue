<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel" v-if="terms">
            {{
              missing
                ? "Debe Completar los Siguientes Campos:"
                : "Vas a enviar a continuacion:"
            }}
          </h1>
          <h1 class="modal-title fs-5" id="exampleModalLabel" v-else>
            Debe Realizar la Siguiente Acción:
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <ul class="modal-data" v-if="terms">
            <li :class="missing ? 'missing-list' : 'normal-list'">
              {{ missing ? (name == "" ? "Nombre" : "") : `Nombre: ${name}` }}
            </li>
            <li :class="missing ? 'missing-list' : 'normal-list'">
              {{
                missing
                  ? lastName == ""
                    ? "Apellido"
                    : ""
                  : `Apellido: ${lastName}`
              }}
            </li>
            <li :class="missing ? 'missing-list' : 'normal-list'">
              {{ missing ? (email == "" ? "Correo" : "") : `Correo: ${email}` }}
            </li>
            <li :class="missing ? 'missing-list' : 'normal-list'">
              {{
                missing ? (phone == "" ? "Teléfono" : "") : `Teléfono: ${phone}`
              }}
            </li>
            <li :class="missing ? 'missing-list' : 'normal-list'">
              {{
                missing
                  ? comment == ""
                    ? "Mensaje"
                    : ""
                  : `Mensaje: ${comment}`
              }}
            </li>
            <li>Terms: {{ terms }}</li>
          </ul>
          <h3 v-else>Aceptar los términos y condiciones</h3>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            :class="
              terms
                ? missing
                  ? 'btn btn-primary'
                  : 'btn btn-danger'
                : 'btn btn-primary'
            "
            data-bs-dismiss="modal"
          >
            {{ terms ? (missing ? "Aceptar" : "No Enviar") : "Aceptar" }}
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-if="terms && !missing"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    name: String,
    lastName: String,
    email: String,
    phone: String,
    comment: String,
    terms: Boolean,
    missing: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal-data {
  list-style: none;
  text-align: left;
}
.missing-list {
  font-size: 24px;
  color: red;
  text-align: center;
}
</style>

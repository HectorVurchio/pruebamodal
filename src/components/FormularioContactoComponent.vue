<template>
  <ModalComponent
    msg="Welcome to Your Modal Component"
    :name="name"
    :lastName="lastname"
    :email="email"
    :phone="phone"
    :comment="comment"
    :terms="terms"
    :missing="missing"
    @resetForm="sendToBE"
  />
  <form
    ref="formular"
    @submit.prevent="
      insert(
        this.name,
        this.lastname,
        this.email,
        this.phone,
        this.comment,
        this.terms
      )
    "
  >
    <h2>Déjanos un Mensaje y Pronto te Contactaremos:</h2>
    <div class="row">
      <div class="col-sm-6">
        <label for="name" class="form-label">Nombre</label>
        <input
          type="text"
          v-model="name"
          class="form-control"
          id="name"
          placeholder="Juan"
        />
      </div>
      <div class="col-sm-6">
        <label for="lastname" class="form-label">Apellido</label>
        <input
          v-model="lastname"
          type="text"
          class="form-control"
          id="lastname"
          placeholder="Perez"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          placeholder="juan_perez@dominio.com"
        />
      </div>
      <div class="col-sm-6">
        <label for="phone" class="form-label">Teléfono</label>
        <input
          v-model="phone"
          type="text"
          class="form-control"
          id="phone"
          placeholder="Ej: 04100000000"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <label for="comment" class="form-label">Coméntanos:</label>
        <textarea
          v-model="comment"
          class="form-control"
          id="comment"
          rows="3"
          placeholder="Escribe tu pregunta o coméntanos...."
        ></textarea>
      </div>
    </div>
    <div class="row terms-row">
      <div class="col-sm-12">
        <input
          ref="cheque"
          class="form-check-input"
          v-model="terms"
          type="checkbox"
          value="false"
          id="terms"
        />
        <label class="form-check-label" for="terms">
          Acepto los términos y condiciones
        </label>
        <label class="form-check-label" for="terms">
          y autorizo el uso de mis datos de acuerdo a la Declaración de
          Privacidad.
        </label>
      </div>
    </div>
    <div class="row button-row">
      <div class="col-sm-12">
        <!-- Button trigger modal -->
        <button
          type="submit"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Enviar
        </button>
      </div>
    </div>
  </form>
</template>
<script>
import Firebase from "@/services/Firebase.js";
import ModalComponent from "./ModalComponent.vue";
export default {
  name: "FormularioContactoComponent",
  components: {
    ModalComponent,
  },
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      terms: false,
      missing: false,
      comment: "",
    };
  },
  methods: {
    // eslint-disable-next-line
    insert(name, lastname, email, phone, comment, terms) {
      if (
        name == "" ||
        lastname == "" ||
        email == "" ||
        phone == "" ||
        comment == ""
      ) {
        this.missing = true;
      } else {
        this.missing = false;
      }
    },
    async sendToBE() {
      this.$refs.formular.reset();
      /* eslint-disable */
      const name = this.name;
      const lastname = this.lastname;
      const email = this.email;
      const phone = this.phone;
      const comment = this.comment;
      const firebase = new Firebase();
      try {
        const docRef = await firebase.getAddDoc("messages", {
          name: name,
          lastname: lastname,
          email: email,
          phone: phone,
          comment: comment,
        });
        //console.log("Document written with ID: ", docRef.id);
        this.$store.dispatch("setFlash", {
          method: "change_flash_yellow",
          message: "Datos enviados con éxito.... ",
        });
        setTimeout(() => {
          this.$store.dispatch("setFlash", {
            method: "change_flash_yellow",
            message: "",
          });
        }, 3000);
      } catch (e) {
        console.error("Error adding document: ", e);
        this.$store.dispatch("setFlash", {
          method: "change_flash_red",
          message: "Envío de datos fallido...",
        });
        setTimeout(() => {
          this.$store.dispatch("setFlash", {
            method: "change_flash_red",
            message: "",
          });
        }, 3000);
      }

      this.name = "";
      this.lastname = "";
      this.email = "";
      this.phone = "";
      this.comment = "";
    },
  },
};
</script>
<style scoped>
h2 {
  font-size: 18px;
  font-weight: bold;
}
form {
  width: 90%;
  max-width: 670px;
  background: #ffde5d;
  padding: 4%;
  margin: auto;
}
.form-check-input {
  margin-right: 10px;
}
.button-row {
  margin-top: 20px;
}
.terms-row {
  margin-top: 20px;
  font-size: 14px;
}
</style>

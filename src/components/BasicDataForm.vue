<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido"),
  surname: Yup.string().required("El apellido es requerido"),
  comment: Yup.string(),
});

function onSubmit(values) {
  console.log("ON SUBMIT" + JSON.stringify(values, null, 4));
}
</script>

<template>
  <Form
    class="form"
    @submit="onSubmit"
    :validation-schema="schema"
    v-slot="{ errors }"
  >
    <div class="mb-3">
      <label for="name" class="form-label">Nombre</label>
      <Field
        class="form-control"
        :class="{ 'is-invalid': errors.name }"
        name="name"
        id="name"
        placeholder="Escribe tu nombre"
      />
      <div class="invalid-feedback">{{ errors.name }}</div>
    </div>
    <div class="mb-3">
      <label for="surname" class="form-label">Apellido</label>
      <Field
        class="form-control"
        :class="{ 'is-invalid': errors.surname }"
        name="surname"
        id="surname"
        placeholder="Escribe tu apellido"
      />
      <div class="invalid-feedback">{{ errors.surname }}</div>
    </div>
    <div class="mb-3">
      <label for="comment" class="form-label">Observaciones</label>
      <Field
        as="textarea"
        class="form-control"
        name="comment"
        id="comment"
        placeholder="Escribe cualquier observación que tengas"
        rows="3"
      />
    </div>
    <div class="mb-3">
      <button type="submit" class="btn btn-primary mr-1">Enviar</button>
    </div>
  </Form>
</template>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
}
</style>

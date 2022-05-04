<template>
    <Form @submit="onSubmit" v-slot="{ errors }">
        <Field name="field" :rules="isRequired" />
        <span>{{ errors.field }}</span>
    </Form>
</template>

<script>
import { Field, Form } from "vee-validate";

export default {
    name: "FormValidationSimple",
    components: {
        Field,
        Form,
    },
    methods: {
        isRequired(value) {
            return value && value.trim() ? true : "This is required";
        },
        onSubmit(values) {
            alert(JSON.stringify(values, null, 2));
        },
    },
};
</script>

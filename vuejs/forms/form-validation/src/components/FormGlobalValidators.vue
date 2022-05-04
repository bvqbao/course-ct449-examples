<template>
    <Form
        @submit="onSubmit"
        :validation-schema="schema"
        @invalid-submit="onInvalidSubmit"
    >
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <button>Submit</button>
    </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    name: "FormGlobalValidators",
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema = {
            email: "required|email",
            password: "required|min:8",
        };
        return {
            schema,
        };
    },
    methods: {
        onSubmit(values) {
            // Submit values to API...
            alert(JSON.stringify(values, null, 2));
        },
        onInvalidSubmit({ values, errors, results }) {
            console.log(values); // current form values
            console.log(errors); // a map of field names and their first error message
            console.log(results); // a detailed map of field names and their validation results
        },
    },
};
</script>
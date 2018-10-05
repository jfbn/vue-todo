<script>
export default {
    props: {
        name: {
            type: String,
            required: true    
        },
        deadline: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div>
        <h1>{{name}}</h1>
        <p>{{deadline}}</p>
        <p>{{status}}</p>
    </div>

</template>


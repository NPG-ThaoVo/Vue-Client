<template>
  <b-table :items="items" :fields="fields">
    <template slot="Action" slot-scope="row">
      <b-button size="sm" class="mr-2">
        Update
      </b-button>
      <b-button size="sm" class="mr-2">
        Delete
      </b-button>
    </template>
   <template slot="Action" slot-scope="row">
      <b-button size="sm" class="mr-2">
        Update
      </b-button>
      <b-button size="sm" class="mr-2">
        Delete
      </b-button>
    </template>
  </b-table>
</template>


<script>
export default {
  data () {
    return {
      fields: [ 'first_name', 'last_name', 'Action' ],
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', _showDetails: true },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  }
}
</script>
<style lang="scss">
.jumbotron {
  background-color: transparent !important;
}
</style>

<template>
<div class="form pb-4">
 <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-8 col-xl-6">
      <div class="row align-items-center">
        <div class="col mt-4">
          <b-form-group horizontal :label-cols="2" label="Name" label-for="input_default">
            <b-form-input id="input_default"></b-form-input>
          </b-form-group>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col mt-4">
          <b-form-group horizontal :label-cols="2" label="Age" label-for="input_default">
            <b-form-input id="input_default"></b-form-input>
          </b-form-group>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col mt-4">
          <b-form-group horizontal :label-cols="2" label="Comment" label-for="input_default">
            <textarea class="form-control" rows="5" id="comment"></textarea>
          </b-form-group>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col mt-4">
          <b-button variant="primary">Always Pressed</b-button>
          <b-button variant="danger">Always Pressed</b-button>
        </div>
      </div>
    </div>
  </div>
</div>
 
</template>
<style lang="scss">
.btn-danger {
  margin-left: 15px;
}
input{
    max-width: 500px;
}
.form{
    border-bottom: 2px solid lightgray;
}
</style>


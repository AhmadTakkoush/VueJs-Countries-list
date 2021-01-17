<template>
  <div>
    <b-container>
      <b-row class="text-center" align-v="center">
        <b-col>
          <b-button
            class="main-navigation-button"
            variant="primary"
            v-b-modal.modal-1
            >View History</b-button
          >
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="modal-1" title="History">
      <p class="my-4">{{ historyProps }}</p>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: ["historyProps"],
};
</script>

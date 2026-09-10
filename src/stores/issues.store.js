import { defineStore } from "pinia";
import { ref } from "vue";

export const useIssuesStore = defineStore('issues', () => {

  const isCreateIssuesModal = ref(false);


  return {
    isCreateIssuesModal,
  }

})
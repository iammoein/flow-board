import { formatDate } from "@/utils/formatDate.util";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useIssuesStore = defineStore("issues", () => {
  const issues = ref([]);

  const isCreateIssuesModal = ref(false);

  const createIssue = (issue = {}) => {
    issues.value.push({
      ...issue,
      id: Date.now(),
      date: formatDate(new Date()),
    });
  };

  return {
    issues,
    isCreateIssuesModal,
    createIssue,
  };

}, {
  persist: true,
});

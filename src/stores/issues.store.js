import { formatDate } from "@/utils/formatDate.util";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useIssuesStore = defineStore(
  "issues",
  () => {
    const issues = ref([]);

    const isCreateIssuesModal = ref(false);

    const createIssue = (issue = {}) => {
      issues.value.push({
        ...issue,
        id: Date.now(),
        number: nextIssueNumber.value,
        date: formatDate(new Date()),
      });
    };

    const nextIssueNumber = computed(() => {
      if (issues.value.length === 0) return 100;
      return Math.max(...issues.value.map((issue) => issue.number)) + 1;
    });

    return {
      issues,
      isCreateIssuesModal,
      createIssue,
    };
  },
  {
    persist: true,
  },
);

import { reactive, ref } from 'vue';
import z from 'zod';

export function useModalForm({ initialValues, schema, onSubmit, onClose }) {
  const formData = reactive(structuredClone(initialValues));
  const error = ref({});

  const resetForm = () => {
    Object.assign(formData, structuredClone(initialValues));
    error.value = {};
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  const handleSubmit = () => {
    const result = schema.safeParse(formData);

    if (!result.success) {
      error.value = z.flattenError(result.error).fieldErrors;
      return;
    }

    onSubmit(result.data);
    handleClose();
  };

  return { formData, error, handleClose, handleSubmit };
}

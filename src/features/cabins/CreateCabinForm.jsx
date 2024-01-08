import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import { Textarea } from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {}, onClose }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEdit = Boolean(editId);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: isEdit ? editValues : {},
  });

  const { createCabin, isCreating } = useCreateCabin();

  const { editCabin, isEditing } = useEditCabin();

  const isFormSubmitting = isCreating || isEditing;

  const onSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEdit)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onClose?.();
          },
        }
      );
    else
      createCabin(
        { ...data, image },
        {
          onSuccess: () => {
            reset();
            onClose?.();
          },
        }
      );
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onClose ? "modal" : "regular"}
    >
      <FormRow
        label={"Cabin name"}
        error={errors?.name?.message}
        orientation={"vertical"}
      >
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This is a required field",
          })}
          disabled={isFormSubmitting}
        />
      </FormRow>
      <FormRow
        label={"Maximum capacity"}
        error={errors?.maxCapacity?.message}
        orientation={"vertical"}
      >
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This is a required field",
            min: {
              value: 1,
              message: "Capacity should be at least 1.",
            },
          })}
          disabled={isFormSubmitting}
        />
      </FormRow>
      <FormRow
        label={"Regular price"}
        error={errors?.regularPrice?.message}
        orientation={"vertical"}
      >
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This is a required field",
            min: {
              value: 1,
              message: "Price should be at least 1.",
            },
          })}
          disabled={isFormSubmitting}
        />
      </FormRow>
      <FormRow
        label={"Discount"}
        error={errors?.discount?.message}
        orientation={"vertical"}
      >
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This is a required field",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
          disabled={isFormSubmitting}
        />
      </FormRow>
      <FormRow
        label={"Description"}
        error={errors?.description?.message}
        orientation={"vertical"}
      >
        <Textarea
          type="text"
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This is a required field",
          })}
          disabled={isFormSubmitting}
        />
      </FormRow>
      <FormRow label={"Cabin photo"} orientation={"vertical"}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEdit ? false : "This is a required field",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset" onClick={() => onClose?.()}>
          Cancel
        </Button>
        <Button disabled={isFormSubmitting}>
          {isEdit ? "Edit" : "Create"} cabin
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;

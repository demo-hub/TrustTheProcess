import Button from "@components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { button, form } from "./styles.css";

type SettingsProps = {
  onSubmit: (values: any) => void;
  loading?: boolean;
};

const SettingsForm = ({ onSubmit, loading }: SettingsProps) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      sequence: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      sequence: Yup.string().required("Sequence is required"),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form className={form} onSubmit={formik.handleSubmit}>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Board name"
        onChange={formik.handleChange}
        value={formik.values.name}
        className="border-b-2 focus:border-purple-300 focus:outline-none focus:shadow-outline"
      />

      <select
        value={formik.values.sequence}
        onChange={formik.handleChange}
        className="block w-full"
        name="sequence"
        id="sequence"
      >
        <option value="">Select card values</option>
        <option value="1">Fibonacci</option>
        <option value="2">Sequential</option>
      </select>

      <div className={button}>
        <Button label="Submit" type="primary" loading={loading} />
      </div>
    </form>
  );
};

export default SettingsForm;

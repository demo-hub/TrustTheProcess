import { useFormik } from "formik";

const SettingsForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      sequence: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit}>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Board name"
        onChange={formik.handleChange}
        value={formik.values.name}
        className="border-b-2 focus:border-purple-300 focus:outline-none focus:shadow-outline"
      />

      <select className="block" name="sequence" id="sequence">
        <option value="0">Select card values</option>
        <option value="1">Fibonacci</option>
        <option value="2">Sequential</option>
      </select>

      <button
        className="bg-purple-300 text-lg font-bold text-white p-1.5 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default SettingsForm;

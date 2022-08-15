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

      <div className="text-center">
        <button
          className="bg-purple-300 text-lg font-bold text-white py-1.5 px-2.5 rounded"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SettingsForm;

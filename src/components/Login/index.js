import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/features/AuthSlice";
import colorlogo from '../../assets/image/color-logo.jpg'

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_URL}/login/`, data);
    console.log(res);

    if (res?.status === 200) {
      dispatch(setToken(res.data.token));
      navigate("/");
    }
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(40, "Password must not exceed 40 characters"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (data) => {
      handleLogin(data);
    },
  });

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden border bg-slate-50 ">
      <div className="w-full py-14 px-6 m-auto bg-white rounded-lg shadow-md lg:max-w-xl">
        <div className="flex justify-center">
          <img alt="" className="h-14" src={colorlogo} />
        </div>
        <h1 className="text-center text-2xl font-extrabold text-gray-900 m-9">
          Log In To Your Acount
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <span className="text-red-500 text-sm">
              {formik.errors.email && formik.touched.email
                ? "Email is invalid !"
                : ""}
            </span>
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <span className="text-red-500 text-sm">
              {formik.errors.password && formik.touched.password
                ? "Password is Invalid !"
                : ""}
            </span>
          </div>
          {/* <Link to="/" className="text-xs text-blue-600 hover:underline">
            Forget Password?
          </Link> */}
          <div className="mt-6">
            <button
              onClick={formik.handleSubmit}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

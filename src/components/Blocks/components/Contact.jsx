import React, { useState, useRef, Suspense } from "react";
import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";
import { styles } from "../../../style";
import { EarthCanvas } from "../../canvas";
import { slideIn } from "../../../utils/motion";
import { StarsCanvas } from "../../canvas";
import { fallbackScene } from "../../../utils/spline";
import LoadLazy3D from "../../LoadLazy3D";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Form = ({ emailTo, scene }) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const _emailTo = emailTo
      ? emailTo
      : process.env.NEXT_PUBLIC_CONTACT_FALLBACK_EMAIL;
    const toName = _emailTo.split("@")[0];
    emailjs
      .send(
        process.env.NEXT_PUBLIC_NODE_MAIL_SERVICE,
        process.env.NEXT_PUBLIC_NODE_MAIL_TEMPLATE,
        {
          from_name: form.name,
          to_name: toName,
          from_email: form.email,
          to_email: _emailTo,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_NODE_MAIL_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Danke! Ich kontaktiere dich sobald wie möglich.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
        alert("Etwas ist schief gelaufen.");
      });
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden w-full items-center">
      <motion.div
        variants={slideIn("left", "tween", 0, 2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl w-full"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Kontakt.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Dein Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Wie ist dein Name?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Deine Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Was ist deine Email?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Dein Name</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              placeholder="Wie willst du sagen?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary text-white outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className=" bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "absenden..." : "Absenden"}
          </button>
        </form>
      </motion.div>
      <motion.div
        className="w-full xl:flex-1 h-[450px] md:h-[650px]  "
        variants={slideIn("right", "tween", 0, 2, 1)}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Spline
            className="opacity-50"
            scene={`${scene ? scene : fallbackScene}`}
          />
        </Suspense>
      </motion.div>
    </div>
  );
};

function Contact({ data }) {
  return (
    <div className="relative z-0 w-full">
      <Form {...data} />
      <StarsCanvas />
    </div>
  );
}

export default Contact;

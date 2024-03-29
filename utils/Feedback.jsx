import React, { Fragment, useContext, useState } from "react";
import axios from "axios";

import { PortfolioContext } from "@/contextApi/PortfolioContext";

const Feedback = () => {
  const [formData, setFormData] = useState({});
  const [submit, setSubmit] = useState(false);
  const { showModal, setShowModal } = useContext(PortfolioContext);

  const collectData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitFeedback = async (e) => {
    e.preventDefault();
    setSubmit(true);
    try {
      const { data } = await axios.post("/api/feedback/new", formData);
      setFormData({});
      setSubmit(false);
      setShowModal(false);
      if (data.success) {
        alert(data.message);
      }
    } catch (error) {
      setSubmit(false);
      alert(
        error.response.data.message || error.message || "Some error Accured"
      );
    }
  };

  return (
    <Fragment>
      <div
        className={`fixed z-30 top-0 left-0 h-screen w-screen bg-[#80808082] flex justify-center md:items-center ${
          showModal ? "" : "hidden"
        }`}
      >
        <form
          className='dark:bg-white bg-white z-40 p-4 rounded sm:w-full sm:h-screen md:h-fit md:w-[500px] flex flex-col gap-4'
          onSubmit={submitFeedback}
        >
          <h3 className='text-center text-2xl font-bold dark:text-[#0c11ab] text-[#0c11ab]'>
            Feedback
          </h3>
          <p>Thanks for your sharing your feedback on my website!</p>
          <input
            className='dark:bg-white border dark:border-black border-black p-2 rounded'
            id='name'
            name='name'
            onChange={collectData}
            placeholder='Name'
            value={formData.name || ""}
          />
          <input
            className='dark:bg-white border dark:border-black border-black p-2 rounded'
            id='email'
            name='email'
            onChange={collectData}
            placeholder='Email'
            value={formData.email || ""}
          />
          <input
            className='dark:bg-white border dark:border-black border-black p-2 rounded'
            id='good'
            name='good'
            onChange={collectData}
            placeholder='Feedback Topic'
            value={formData.good || ""}
          />
          <textarea
            className='dark:bg-white border dark:border-black border-black p-2 rounded'
            id='suggetion'
            name='suggetion'
            onChange={collectData}
            placeholder='Feedback Details'
            rows='3'
            value={formData.suggetion || ""}
          />
          <div className='flex justify-between'>
            <button
              className='font-bold px-4 text-white dark:bg-[black] disabled:cursor-default p-2 rounded dark:hover:bg-[white] hover:text-black'
              onClick={() => {
                setShowModal(false);
                setFormData({});
              }}
              type='button'
            >
              Cancel
            </button>
            <button
              className='font-bold px-4 text-white dark:bg-[black] disabled:cursor-default p-2 rounded dark:hover:bg-[white] hover:text-black'
              disabled={submit}
              type='submit'
            >
              {submit ? "Submiting.." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Feedback;

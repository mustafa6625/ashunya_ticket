import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { commonToast } from '../Utils/CustomComponent';

const CreateTicket = ({close, refreshTable}) => {
  const { handleSubmit, register } = useForm();
  const [severityValues, setSeverityValues] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [urgencyOptions, setUrgencyOptions] = useState([]);
  const [categoriesOption, setCategoriesOption] = useState([]);

  useEffect(() => {
    // const axiosConfig = {
    //   headers: {
    //     'Authorization': 'Basic UkVTVEFQSUxPQU5MSU5ROjg4V2VIZWxwVSQjQA=='
    //   }
    // }
    //   const requestUrls = [
    //     urls.support.getCreateTicketDropdown('severity'),
    //     urls.support.getCreateTicketDropdown('department'),
    //     urls.support.getCreateTicketDropdown('urgency'),
    //     urls.support.getCreateTicketDropdown('category')
    //   ];
    //   Promise.all(
    //     requestUrls?.map(url => axios.get(url, axiosConfig))
    //   )
    //   .then((responses) => {
    //     const [severityRes, departmentRes, urgencyRes, categoryRes] = responses;
    //     setSeverityValues(severityRes.data.items);
    //     setDepartmentOptions(departmentRes.data.items);
    //     setUrgencyOptions(urgencyRes.data.items);
    //     setCategoriesOption(categoryRes.data.items);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);
  const onSubmit = (data) => {
    // const id = toast.loading("Creating a new ticket");

    // data.user_id = `${userDetails.user_id}`;
    // data.contact_email = userDetails.email;
    // data.status_id = "1"
    // const headers = {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Basic UkVTVEFQSUxPQU5MSU5ROjg4V2VIZWxwVSQjQA==',
    //     'maxBodyLength': Infinity
    //   }
    // axios.post(urls.support.postTicket(), data,  {headers} )
    // .then((response) => {
    //   close();
    //   toast.update(id, {
    //     render: "Ticket Created",
    //     type: "success",
    //     isLoading: false,
    //     ...commonToast,
    //   });
    //   refreshTable();
    // })
    // .catch((error) => {
    //   console.error(error);
    //   toast.update(id, {
    //     render: "SOME ERROR OCCURED",
    //     type: "error",
    //     isLoading: false,
    //     ...commonToast,
    //   });
    // });
 
  };

  return (
    <div className="mt-2">
      <form className="py-5 bg-white" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <label htmlFor="summary" className="form-label fw-bold">
                Summary
              </label>
              <input
                id="summary"
                name="summary"
                type="text"
                className="form-control"
                {...register("subject", { required: true })}
              />
            </div>

            <div className="col-12 mb-4">
              <label htmlFor="description" className="form-label fw-bold">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="form-control"
                {...register("incident_description", { required: true })}
              />
            </div>

            <div className="col-6 mb-4">
              <label htmlFor="department" className="form-label fw-bold">
                Department
              </label>
              <select
                id="department"
                name="department"
                className="form-select"
                {...register("department_id", { required: true })}
              >
                <option value=""></option>
                {/* {departmentOptions &&
                  departmentOptions?.map((option, index) => (
                    <option key={index} value={option.id}>
                      {option.product_name}
                    </option>
                  ))} */}
              </select>
            </div>

            <div className="col-6 mb-4">
              <label htmlFor="category" className="form-label fw-bold">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="form-select"
                {...register("category_id", { required: true })}
              >
                <option value=""></option>
                {/* {categoriesOption &&
                  categoriesOption?.map((option, index) => (
                    <option key={index} value={option.id}>
                      {option.category_name}
                    </option>
                  ))} */}
              </select>
            </div>

            <div className="col-6 mb-4">
              <label htmlFor="severity" className="form-label fw-bold">
                Severity
              </label>
              <select
                id="severity"
                name="severity"
                className="form-select"
                {...register("severity_id", { required: true })}
              >
                <option value=""></option>
                {/* {severityValues &&
                  severityValues?.map((option, index) => (
                    <option key={index} value={option.id}>
                      {option.severity_name}
                    </option>
                  ))} */}
              </select>
            </div>

            <div className="col-6 mb-4">
              <label htmlFor="urgency" className="form-label fw-bold">
                Urgency
              </label>
              <select
                id="urgency"
                name="urgency"
                className="form-select"
                {...register("urgency_id", { required: true })}
              >
                <option value=""></option>
                {/* {urgencyOptions &&
                  urgencyOptions?.map((option, index) => (
                    <option key={index} value={option.id}>
                      {option.urgency_name}
                    </option>
                  ))} */}
              </select>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-5">
          <button type="button" className="btn btn-secondary" onClick={() => close()}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary text-white">
            Create Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTicket;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FileAttch from "@/public.icons/paperclip-icon.svg";
import { Button } from "../ui/button";

const Data = [
  {
    htmlfor: "name",
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Name",
    errname: "name",
  },
  {
    htmlfor: "email",
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Email",
    errname: "email",
  },
  {
    htmlfor: "phone",
    type: "tel",
    id: "phone",
    name: "phone",
    placeholder: "Phone",
    errname: "phone",
  },
  {
    htmlfor: "project_info",
    type: "text",
    id: "project_info",
    name: "project_info",
    placeholder: "Short message",
    errname: "project_info",
  },
];

const Contact = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email"),
    phone: Yup.string().required("Phone is required"),
    project_info: Yup.string().required("Project info is required"),
    privacy: Yup.boolean().oneOf([true], "Please accept privacy policy"),
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      
      // Check file size (20MB limit)
      if (selectedFile.size > 20 * 1024 * 1024) {
        alert("File size exceeds 20MB limit");
        return;
      }
      
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  return (
    <div
      id="Contact"
      className="lg:h-screen w-full text-primary relative overflow-hidden h-full"
    >
      <video
        src="/images/HomeBanner3.mp4"
        autoPlay
        loop
        muted
        title="ContactBanner"
        className="absolute max-md:h-screen -z-10 xl:w-full max-w-none "
      ></video>
      <section className="lg:pt-40">
        <h3 className="text-heading1">Contact Us</h3>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            project_info: "",
            privacy: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // Create FormData object to send to API
            const formData = new FormData();
            
            // Add form fields to FormData
            Object.keys(values).forEach(key => {
              if (key !== 'privacy') { // Don't include privacy checkbox in email
                // Use type assertion to handle the dynamic key
                formData.append(key, values[key as keyof typeof values] as string);
              }
            });
            
            // Add file if one was selected
            if (file) {
              formData.append('attachment', file);
            }
            
            // Send form data to API
            fetch('/api/contactus', {
              method: 'POST',
              body: formData,
            })
              .then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then(data => {
                // Show success message
                alert('Thank you for your message! We will get back to you soon.');
                // Reset form
                resetForm();
                // Reset file state
                setFile(null);
                setFileName('');
              })
              .catch(error => {
                console.error('Error submitting form:', error);
                alert('There was an error sending your message. Please try again.');
              })
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form>
              <div className="lg:pt-8">
                <div className="gap-2 grid pt-4 lg:grid-cols-2 lg:gap-x-8">
                  {Data.map((x) => (
                    <div key={x.id} className="pt-4">
                      <label htmlFor={x.htmlfor} className="">
                        <Field
                          type={x.type}
                          id={x.id}
                          name={x.name}
                          placeholder={x.placeholder}
                          className={`bg-transparent placeholder:text-primary w-full hover:border-b-blue focus:outline-none ${touched.name && errors.name
                            ? "border-red-500 bg-transparent"
                            : "bg-transparent"
                            }`}
                        />
                      </label>

                      <div className="w-full h-[1px] mt-4 bg-primary"></div>
                      <ErrorMessage
                        name={x.errname}
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:flex md:gap-10 lg:justify-between">
                {/* File Attached */}
                <div className="flex gap-x-2 pt-4 items-center">
                  <div className="relative">
                    <input
                      type="file"
                      id="file-upload"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                    />
                    <FileAttch className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-base md:text-sm">Attach your file</p>
                    <p className="text-sm">Up to 20MB</p>
                    {fileName && (
                      <p className="text-xs text-blue mt-1 truncate max-w-[200px]">
                        {fileName}
                      </p>
                    )}
                  </div>
                </div>
                {/* Privacy Policy */}
                <div className="flex flex-col py-8 md:py-5">
                  <div>
                    <p className="text-xs  w-full">
                      We will process your personal information in accordance
                      with our{" "}
                      <Link
                        title="privacy"
                        href="/"
                        className="text-blue cursor-pointer"
                      >
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                  {/* Checkbox */}
                  <div className="flex gap-x-2 items-center">
                    <Field
                      type="checkbox"
                      name="privacy"
                      id="privacy"
                      className={`rounded-lg mt-2 ${touched.privacy && errors.privacy
                        ? "border-red-500"
                        : ""
                        }`}
                    />
                    <label htmlFor="privacy" className="text-xs pt-2 ">
                      I would like to be contacted with news and updates about
                      your events and services
                    </label>
                  </div>
                  <ErrorMessage
                    name="privacy"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
              </div>
              {/* Button */}
              <div className="grid pt-10">
                <Button
                  variant="default"
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                >
                  Send Message
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
};

export default Contact;

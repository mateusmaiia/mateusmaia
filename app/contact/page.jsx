"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser'
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect } from "react";


const ContactSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  textarea: z.string(),
  phoneNumber: z.string().regex(/^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/, {
    message: "Invalid Brazilian phone number format",
  })
})

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+83) 99953-3314",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mateusssmaia@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "João Pessoa, Paraiba, Brasil",
  },
];

const Contact = () => {

  const {handleSubmit, register, reset, formState} = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues:{
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      textarea: "",
    }
  })

  const {isSubmitSuccessful, errors} = formState

  useEffect(() => {
    if (errors.phoneNumber) {
      toast.error(errors.phoneNumber.message);
    }
    if (errors.email) {
      toast.error(errors.email.message);
    }
    if (errors.firstName) {
      toast.error(errors.firstName.message);
    }
    if (errors.lastName) {
      toast.error(errors.lastName.message);
    }
    if (errors.textarea) {
      toast.error(errors.textarea.message);
    }
  }, [errors])

  function handleSendEmail(data){
   try {
      if(isSubmitSuccessful) {

        emailjs.send('service_portfolio', "template_mubvn9e", data, "jC_iAK5wdMrBaG9o3")

        toast.success('Email enviado com sucesso');
        reset({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          textarea: "",
        });
      }
      return console.log(data)
      } catch (error) {
        console.log(error)
   }

  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 "
    >
      <div className=" container mx-auto pb-20 lg:pb-0">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit(handleSendEmail)}>
              <h3 className="text-4xl text-accent">Let&apos;s work together!</h3>
              <p className="text-white/60">
                Focused on providing high-level Web Development services, we transform your ideas into functional and beautiful websites. Contact us today to see how we can help you succeed online.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="first name" {...register("firstName")} />
                <Input type="lastname" placeholder="last mame" {...register("lastName")}/>
                <Input type="email" placeholder="email address"  {...register("email")}/>
                <Input type="phone" placeholder="phone number" {...register("phoneNumber")}/>

              </div>
              
              {/* select */}
               {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                {...register("textarea")}
              />
              {/* btn */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

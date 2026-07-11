import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Textarea from "@/components/ui/Textarea";

import {
  contactSchema,
  type ContactFormData,
} from "@/lib/contactSchema";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 w-full max-w-2xl mx-auto space-y-6"
    >
      <div>
        <Label htmlFor="name">Your name</Label>

        <Input
          id="name"
          placeholder="John Smith"
          {...register("name")}
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email address</Label>

        <Input
          id="email"
          type="email"
          placeholder="john@email.com"
          {...register("email")}
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="business">Business name</Label>

        <Input
          id="business"
          placeholder="North Coffee"
          {...register("business")}
        />

        {errors.business && (
          <p className="mt-2 text-sm text-red-400">
            {errors.business.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message">
          Tell us about your project
        </Label>

        <Textarea
          id="message"
          placeholder="Describe your project..."
          {...register("message")}
        />

        {errors.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        withArrow
        disabled={isSubmitting}
        className="w-full justify-center"
      >
        {isSubmitting ? "Sending..." : "Send Request"}
      </Button>
    </motion.form>
  );
}
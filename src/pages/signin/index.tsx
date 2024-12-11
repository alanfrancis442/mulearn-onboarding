import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Outline from "@/components/ui/outline";

const Signin = () => {
  const formSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password: z.string().min(8, {
      message: "Password should be at least 8 characters",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Add sign-in logic here
  }

  return (
    <div className="px-4 py-16 bg-white flex flex-col justify-between items-center overflow-hidden h-screen">
      <div className="relative mb-12">
        <img
          src="/common/planet.webp"
          alt=""
          height={50}
          width={50}
          className="absolute -top-6 -right-8"
        />
        <h1 className="font-PlusJakartaSans font-bold text-3xl">Signin</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="max-sm:w-[90vw]">
                <FormLabel className="text-lg font-PlusJakartaSans font-semibold">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded-xl h-12"
                    placeholder="email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter your registered email address.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-PlusJakartaSans font-semibold">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded-xl h-12"
                    type="password"
                    placeholder="password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Enter your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            size={"lg"}
            className="rounded-full w-full p-6 font-normal font-PlusJakartaSans my-2"
            type="submit"
          >
            Sign In
          </Button>
          <p className="mt-4 text-primary text-center">
            New to μlearn?
            <a href="#" className="text-lg font-semibold">
              Sign Up
            </a>
          </p>
        </form>
        <div className="w-full flex justify-center items-center flex-col border-t-2 mt-8">
          <span
            style={{
              marginTop: "-0.9rem",
              backgroundColor: "white",
            }}
            className="text-gray-500 px-1 capitalize"
          >
            or
          </span>
        </div>
      </Form>
      <div className="flex flex-col justify-between items-center p-16 gap-5">
        <Outline className="w-full font-PlusJakartaSans flex gap-3 rounded-full p-3 font-semibold px-4">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.9652 11.1986L14.4639 11.1982C14.0885 11.1982 13.7842 11.5025 13.7842 11.8779V14.5937C13.7842 14.969 14.0885 15.2733 14.4638 15.2733H19.2512C18.727 16.6338 17.7486 17.7732 16.5002 18.4971L18.5416 22.0308C21.8162 20.137 23.7521 16.8141 23.7521 13.0944C23.7521 12.5647 23.7131 12.1861 23.635 11.7598C23.5757 11.4359 23.2944 11.1986 22.9652 11.1986Z"
                fill="#167EE6"
              />
              <path
                d="M13.3313 19.3538C10.9884 19.3538 8.94315 18.0737 7.84467 16.1794L4.31104 18.2162C6.10928 21.3328 9.47796 23.4316 13.3313 23.4316C15.2216 23.4316 17.0053 22.9226 18.5418 22.0356V22.0308L16.5005 18.497C15.5667 19.0386 14.4862 19.3538 13.3313 19.3538Z"
                fill="#12B347"
              />
              <path
                d="M18.5418 22.0356V22.0307L16.5005 18.4969C15.5667 19.0385 14.4863 19.3537 13.3313 19.3537V23.4315C15.2216 23.4315 17.0054 22.9226 18.5418 22.0356Z"
                fill="#0F993E"
              />
              <path
                d="M6.98796 13.0105C6.98796 11.8557 7.30312 10.7753 7.84457 9.84156L4.31093 7.80481C3.41908 9.3365 2.91016 11.1153 2.91016 13.0105C2.91016 14.9057 3.41908 16.6845 4.31093 18.2162L7.84457 16.1794C7.30312 15.2457 6.98796 14.1653 6.98796 13.0105Z"
                fill="#FFD500"
              />
              <path
                d="M13.3313 6.66728C14.8591 6.66728 16.2624 7.21016 17.3586 8.11316C17.629 8.33591 18.022 8.31983 18.2697 8.07213L20.1939 6.1479C20.475 5.86686 20.455 5.40683 20.1547 5.14638C18.3182 3.55314 15.9287 2.58948 13.3313 2.58948C9.47796 2.58948 6.10928 4.68822 4.31104 7.80485L7.84467 9.84159C8.94315 7.94736 10.9884 6.66728 13.3313 6.66728Z"
                fill="#FF4B26"
              />
              <path
                d="M17.3585 8.11316C17.629 8.33591 18.022 8.31983 18.2697 8.07213L20.1939 6.1479C20.4749 5.86686 20.4549 5.40683 20.1547 5.14638C18.3182 3.5531 15.9287 2.58948 13.3313 2.58948V6.66728C14.859 6.66728 16.2624 7.21016 17.3585 8.11316Z"
                fill="#D93F21"
              />
            </svg>
          </svg>
          Sign in with Google
        </Outline>
        <Outline className="w-full font-PlusJakartaSans flex gap-3 rounded-full p-3 font-semibold px-4">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2525 10.8737C21.2525 16.0753 17.4415 20.3866 12.4597 21.1681V13.886H14.8879L15.35 10.8737H12.4597V8.91893C12.4597 8.09461 12.8636 7.29145 14.158 7.29145H15.4721V4.7269C15.4721 4.7269 14.2794 4.52336 13.1391 4.52336C10.759 4.52336 9.20316 5.96603 9.20316 8.5778V10.8737H6.55719V13.886H9.20316V21.1681C4.22141 20.3866 0.4104 16.0753 0.4104 10.8737C0.4104 5.1185 5.07626 0.452637 10.8315 0.452637C16.5866 0.452637 21.2525 5.1185 21.2525 10.8737Z"
                fill="#1877F2"
              />
              <path
                d="M14.8881 13.886L15.3501 10.8736H12.4599V8.91884C12.4599 8.09472 12.8637 7.29141 14.1582 7.29141H15.4723V4.72685C15.4723 4.72685 14.2797 4.52332 13.1395 4.52332C10.7591 4.52332 9.20334 5.96598 9.20334 8.57776V10.8736H6.55737V13.886H9.20334V21.1681C9.73392 21.2513 10.2777 21.2947 10.8316 21.2947C11.3856 21.2947 11.9293 21.2513 12.4599 21.1681V13.886H14.8881Z"
                fill="white"
              />
            </svg>
          </svg>
          Sign in with Facebook
        </Outline>
      </div>
    </div>
  );
};

export default Signin;

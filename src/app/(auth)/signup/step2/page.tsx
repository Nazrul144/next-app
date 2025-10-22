"use client";
import { Button } from "@/components/ui/button";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookmarkIcon, ChevronDownIcon, HeartIcon, StarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import { MdNavigateNext } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import z, { number } from "zod";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";


const formSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(11, { message: "Phone number must be at least 11 digits" })
    .max(14, { message: "Phone number must not exceed 14 digits" })
    .regex(/^(?:\+?88)?01[3-9]\d{8}$/, { message: "Enter a valid Bangladeshi phone number" }),

  date: z.date().refine((val) => val !== null, {
    message: "Please select a date",
  }),

  comment: z.array(z.string()),
  rating: z.number().min(1, { message: "Select at least 1 star" })

});

const Step2Page = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      date: undefined,
      comment: [],
      rating: 0,
    },
  });

  const handleFormSubmit = (data: any) => {
    console.log(data);
    form.reset(); //Form has been clear after submit the form.
  };


  return (
    <div>
      <div className="w-96 mx-auto border-1 border-red-400 rounded-lg py-4 px-6 mt-8">
        <h1 className="text-center font-semibold text-2xl "> Step 2</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <PhoneInput
                      country={"bd"}
                      value={field.value}
                      onChange={field.onChange}
                      inputProps={{
                        name: field.name,
                        required: true,
                      }}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Give us your feedback</FormLabel>
                  <FormControl>
                    <ToggleGroup
                      type="multiple"
                      value={field.value || []} // ✅ ToggleGroup value
                      onValueChange={field.onChange} // ✅ Change handler
                      variant="outline"
                      spacing={2}
                      size="sm"
                    >
                      <ToggleGroupItem
                        value="Star"
                        aria-label="Toggle star"
                        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-yellow-500 data-[state=on]:*:[svg]:stroke-yellow-500"
                      >
                        <StarIcon />
                        Star
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="heart"
                        aria-label="Toggle heart"
                        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500"
                      >
                        <HeartIcon />
                        Heart
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="bookmark"
                        aria-label="Toggle bookmark"
                        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
                      >
                        <BookmarkIcon />
                        Bookmark
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </FormControl>
                  <FormDescription className="sr-only">This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Your Suitable Date</FormLabel>
                  <FormControl>
                    <div className="flex flex-col gap-3">
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button variant="outline" id="date" className="w-full justify-between font-normal">
                            {field.value ? field.value.toLocaleDateString() : "Select date"}
                            <ChevronDownIcon />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            captionLayout="dropdown"
                            fromYear={1950}
                            toYear={2025}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </FormControl>
                  <FormDescription className="sr-only">This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ratings:</FormLabel>
                  <FormControl>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <StarIcon
                        key={i}
                        className={`cursor-pointer ${i <= field.value ? "text-yellow-500" : "text-gray-300"}`}
                        onClick={() => field.onChange(i)}
                      />
                      ))}
                    </div>
                  </FormControl>
                  <FormDescription className="sr-only">This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full mt-4 cursor-pointer flex items-center" type="submit">
              Next <MdNavigateNext size={30} className="mt-1" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Step2Page;

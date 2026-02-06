import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen ein").max(100),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse ein").max(255),
  phone: z.string().trim().optional(),
  service: z.string().optional(),
  message: z.string().trim().min(10, "Bitte geben Sie eine Nachricht ein (min. 10 Zeichen)").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  showServiceSelect?: boolean;
}

export function ContactForm({ showServiceSelect = true }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate form submission (replace with actual email service)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);

    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns schnellstmöglich bei Ihnen.",
    });

    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 animate-fade-up">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-serif text-2xl font-medium mb-2">Vielen Dank!</h3>
        <p className="text-muted-foreground">
          Ihre Nachricht wurde gesendet. Wir melden uns schnellstmöglich bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name *
          </label>
          <Input
            id="name"
            placeholder="Ihr Name"
            {...register("name")}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            E-Mail *
          </label>
          <Input
            id="email"
            type="email"
            placeholder="ihre@email.de"
            {...register("email")}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Telefon (optional)
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="Ihre Telefonnummer"
            {...register("phone")}
          />
        </div>

        {showServiceSelect && (
          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-2">
              Gewünschte Leistung
            </label>
            <select
              id="service"
              {...register("service")}
              className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Bitte wählen...</option>
              <option value="thai-massage">Traditionelle Thai Massage</option>
              <option value="aroma-massage">Aromaöl Massage</option>
              <option value="ruecken-nacken">Rücken & Nacken Massage</option>
              <option value="fuss-massage">Fußreflexzonen Massage</option>
              <option value="hot-stone">Hot Stone Massage</option>
              <option value="paar-massage">Paarmassage</option>
              <option value="other">Andere / Beratung</option>
            </select>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Nachricht *
        </label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Ihr Anliegen, Wunschtermin, Fragen..."
          {...register("message")}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && (
          <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Nachricht senden
          </>
        )}
      </Button>
    </form>
  );
}

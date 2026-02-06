import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Gift, CreditCard, Mail, Phone, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { businessInfo, services } from "@/data/siteContent";
import { useToast } from "@/hooks/use-toast";

const voucherSchema = z.object({
  senderName: z.string().trim().min(2, "Bitte geben Sie Ihren Namen ein").max(100),
  senderEmail: z.string().trim().email("Bitte geben Sie eine gültige E-Mail ein").max(255),
  senderPhone: z.string().trim().optional(),
  recipientName: z.string().trim().min(2, "Bitte geben Sie den Namen des Beschenkten ein").max(100),
  amount: z.string().min(1, "Bitte wählen Sie einen Betrag"),
  deliveryAddress: z.string().trim().optional(),
  personalMessage: z.string().trim().max(500).optional(),
});

type VoucherFormData = z.infer<typeof voucherSchema>;

const voucherAmounts = [
  { value: "35", label: "35 €", description: "30 Min. Massage" },
  { value: "55", label: "55 €", description: "60 Min. Massage" },
  { value: "80", label: "80 €", description: "90 Min. Massage" },
  { value: "100", label: "100 €", description: "120 Min. Massage" },
  { value: "custom", label: "Individuell", description: "Wunschbetrag" },
];

export default function VouchersPage() {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<VoucherFormData>({
    resolver: zodResolver(voucherSchema),
  });

  const handleAmountSelect = (value: string) => {
    setSelectedAmount(value);
    if (value !== "custom") {
      setValue("amount", value);
    } else {
      setValue("amount", customAmount);
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (selectedAmount === "custom") {
      setValue("amount", value);
    }
  };

  const onSubmit = async (data: VoucherFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Voucher order:", {
      ...data,
      amount: selectedAmount === "custom" ? customAmount : selectedAmount,
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    toast({
      title: "Gutschein-Anfrage gesendet!",
      description: "Wir melden uns schnellstmöglich bei Ihnen.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="pt-32 pb-20">
          <div className="container">
            <div className="max-w-lg mx-auto text-center animate-fade-up">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                Vielen Dank!
              </h1>
              <p className="text-muted-foreground mb-8">
                Ihre Gutschein-Anfrage wurde erfolgreich übermittelt. 
                Wir melden uns schnellstmöglich mit den Zahlungsdetails bei Ihnen.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Weiteren Gutschein bestellen
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-calm">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Gift className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              Gutscheine verschenken
            </h1>
            <p className="text-muted-foreground text-lg">
              Verschenken Sie Entspannung und Wohlbefinden – das perfekte 
              Geschenk für jeden Anlass. Unsere Gutscheine sind 3 Jahre gültig 
              und für alle Massagen einlösbar.
            </p>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              {/* Amount Selection */}
              <div>
                <h2 className="font-serif text-2xl font-medium mb-6">
                  1. Betrag wählen
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {voucherAmounts.map((amount) => (
                    <button
                      key={amount.value}
                      type="button"
                      onClick={() => handleAmountSelect(amount.value)}
                      className={`p-4 rounded-xl border-2 transition-all text-center ${
                        selectedAmount === amount.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="font-serif text-xl font-medium block">
                        {amount.label}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {amount.description}
                      </span>
                    </button>
                  ))}
                </div>

                {selectedAmount === "custom" && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-2">
                      Ihr Wunschbetrag (€)
                    </label>
                    <Input
                      type="number"
                      min="20"
                      placeholder="z.B. 75"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                    />
                  </div>
                )}

                {errors.amount && (
                  <p className="text-destructive text-sm mt-2">{errors.amount.message}</p>
                )}
              </div>

              {/* Sender Info */}
              <div>
                <h2 className="font-serif text-2xl font-medium mb-6">
                  2. Ihre Daten
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ihr Name *
                    </label>
                    <Input
                      placeholder="Ihr Name"
                      {...register("senderName")}
                      className={errors.senderName ? "border-destructive" : ""}
                    />
                    {errors.senderName && (
                      <p className="text-destructive text-sm mt-1">{errors.senderName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ihre E-Mail *
                    </label>
                    <Input
                      type="email"
                      placeholder="ihre@email.de"
                      {...register("senderEmail")}
                      className={errors.senderEmail ? "border-destructive" : ""}
                    />
                    {errors.senderEmail && (
                      <p className="text-destructive text-sm mt-1">{errors.senderEmail.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Ihre Telefonnummer (optional)
                    </label>
                    <Input
                      type="tel"
                      placeholder="Für Rückfragen"
                      {...register("senderPhone")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name des Beschenkten *
                    </label>
                    <Input
                      placeholder="Für wen ist der Gutschein?"
                      {...register("recipientName")}
                      className={errors.recipientName ? "border-destructive" : ""}
                    />
                    {errors.recipientName && (
                      <p className="text-destructive text-sm mt-1">{errors.recipientName.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div>
                <h2 className="font-serif text-2xl font-medium mb-6">
                  3. Versand
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Lieferadresse (für Postversand)
                    </label>
                    <Textarea
                      rows={3}
                      placeholder="Straße, Hausnummer&#10;PLZ Ort&#10;(Leer lassen für Abholung)"
                      {...register("deliveryAddress")}
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      Versandgebühr: {businessInfo.shippingFee} € (entfällt bei Abholung)
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Persönliche Nachricht (optional)
                    </label>
                    <Textarea
                      rows={3}
                      placeholder="Ihre Grußbotschaft für den Gutschein..."
                      {...register("personalMessage")}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-medium flex items-center gap-2 mb-4">
                  <CreditCard className="w-5 h-5" />
                  Zahlung per Überweisung
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Nach Absenden der Bestellung erhalten Sie eine Bestätigung mit den 
                  Überweisungsdaten. Der Gutschein wird nach Zahlungseingang versendet.
                </p>
                <div className="text-sm space-y-1">
                  <p><strong>Kontoinhaber:</strong> {businessInfo.bankDetails.accountHolder}</p>
                  <p><strong>Bank:</strong> {businessInfo.bankDetails.bank}</p>
                  <p><strong>IBAN:</strong> {businessInfo.bankDetails.iban}</p>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || !selectedAmount}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    <Gift className="w-4 h-4 mr-2" />
                    Gutschein bestellen
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-medium mb-4">
              Lieber persönlich?
            </h2>
            <p className="text-muted-foreground mb-6">
              Sie können Gutscheine auch telefonisch oder per WhatsApp bestellen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" asChild>
                <a href={businessInfo.phoneLink}>
                  <Phone className="w-4 h-4 mr-2" />
                  {businessInfo.phone}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={businessInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Mail className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

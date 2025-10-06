import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, Calendar, Sparkles } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { Download, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { useState } from "react";
const Contact = () => {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [agree, setAgree] = useState<boolean>(false);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent/20 to-secondary/20 border-2 border-accent/40 rounded-full">
                <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                <span className="text-accent font-bold text-lg">GET IN TOUCH</span>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              Let’s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">amazing</span> together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you have questions about features, trials, pricing, need a demo, or anything else — our team is ready to answer all your questions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left column: info cards (kept as in original) */}
            <div className="space-y-6">
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-background/60 to-background/20 backdrop-blur border border-accent/20 hover:border-accent/40 transition-all">
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-accent to-primary shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Email Us</h3>
                    <p className="text-muted-foreground mb-3 text-lg">
                      Our team responds within 24 hours
                    </p>
                    <a href="mailto:info@kimiyaa.ai" className="underline-offset-4 hover:underline hover:text-primary/80 transition-colors text-lg font-semibold">
                      info@kimiyaa.ai
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-8 rounded-3xl bg-gradient-to-br from-background/60 to-background/20 backdrop-blur border border-accent/20 hover:border-accent/40 transition-all duration-500 relative overflow-hidden">
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-secondary to-accent shadow-lg">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Chat with Us</h3>
                    <p className="text-muted-foreground mb-3 text-lg">We’re available Monday–Friday</p>
                    <Button className="bg-gradient-to-r from-primary via-accent to-secondary text-white rounded-2xl font-bold px-6 shadow-lg hover:scale-105 transition-all">
                      Start Chat
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group p-8 rounded-3xl bg-gradient-to-br from-background/60 to-background/20 backdrop-blur border border-accent/20 hover:border-accent/40 transition-all">
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Book a Demo</h3>
                    <p className="text-muted-foreground mb-3 text-lg">See Kimiyaa in action with your use case</p>
                    <Button className="bg-gradient-to-r from-primary via-accent to-secondary hover:to-primary/90 text-white rounded-2xl font-bold px-6 shadow-lg hover:scale-105 transition-all">
                      Schedule Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (replaced with 3‑step flow) */}
            <div className="p-10 rounded-3xl bg-gradient-to-br from-background/60 to-background/20 backdrop-blur border border-accent/20 animate-fade-in shadow-2xl" style={{ animationDelay: '200ms' }}>
              {/* Multi-step Contact Flow */}
              <div className="space-y-8">
                {/* Step pills */}
                <div className="grid grid-cols-3 gap-2">
                  <div className={`h-1.5 rounded-full ${step >= 1 ? "bg-accent" : "bg-muted/30"}`} />
                  <div className={`h-1.5 rounded-full ${step >= 2 ? "bg-accent" : "bg-muted/30"}`} />
                  <div className={`h-1.5 rounded-full ${step >= 3 ? "bg-accent" : "bg-muted/30"}`} />
                </div>

                {/* STEP 1: name + email */}
                {step === 1 && (
                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (name.trim() && emailValid) setStep(2);
                    }}
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold mb-3 text-foreground">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Ada Lovelace"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-background/5 border-accent/30 focus-visible:ring-accent/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold mb-3 text-foreground">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ada@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-background/5 border-accent/30 focus-visible:ring-accent/50"
                      />
                      {!emailValid && email.length > 0 && (
                        <p className="text-destructive text-xs mt-2">Please enter a valid email.</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary via-accent to-secondary text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all glow-primary"
                      disabled={!(name.trim() && emailValid)}
                    >
                      Continue <ArrowRight className="h-4 w-4" />
                    </Button>
                  </form>
                )}

                {/* STEP 2: Terms & Conditions */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold mb-3">Terms &amp; Conditions</h3>
                      <div className="bg-background/5 border border-accent/20 rounded-xl p-4 max-h-60 overflow-auto text-sm leading-relaxed">
                        <p className="mb-3">
                          <strong>Dummy Terms:</strong> This is placeholder text for your Terms and Conditions. Replace this with your real legal copy.
                        </p>
                        <p className="mb-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
                          adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue.
                        </p>
                        <p>
                          Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                          Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                        </p>
                      </div>
                      <div className="flex items-center gap-3 mt-4">
                        <Checkbox id="agree" checked={agree} onCheckedChange={(v:any) => setAgree(!!v)} />
                        <label htmlFor="agree" className="text-sm">
                          I have read and agree to the Terms &amp; Conditions.
                        </label>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        type="button"
                        variant="secondary"
                        className="rounded-xl"
                        onClick={() => setStep(1)}
                      >
                        <ArrowLeft className="h-4 w-4" /> Back
                      </Button>
                      <Button
                        type="button"
                        className="rounded-xl bg-gradient-to-r from-primary via-accent to-secondary text-white ml-auto"
                        onClick={() => agree && setStep(3)}
                        disabled={!agree}
                      >
                        Proceed <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Download */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="rounded-xl border border-accent/20 bg-background/5 p-4">
                      <div className="flex items-center gap-2 text-accent mb-2">
                        <CheckCircle className="h-5 w-5" />
                        <h3 className="text-lg font-bold">You're all set{name ? `, ${name}` : ""}!</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        You can now download the demo file.
                      </p>
                    </div>

                    <Button
                      type="button"
                      onClick={() => {
                        const now = new Date().toLocaleString();
                        const content = [
                          "Demo file: Thank you for trying this flow!",
                          "",
                          `Name:  ${name}`,
                          `Email: ${email}`,
                          `Date:  ${now}`,
                          "",
                          "Replace this with your real file later.",
                          ""
                        ].join("\n");
                        const blob = new Blob([content], { type: "text/plain" });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = "demo.txt";
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                        URL.revokeObjectURL(url);
                      }}
                      className="w-full rounded-xl bg-gradient-to-r from-primary via-accent to-secondary text-white shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all"
                    >
                      <Download className="h-5 w-5" /> Download demo.txt
                    </Button>

                    <Button
                      type="button"
                      variant="ghost"
                      className="w-full rounded-xl"
                      onClick={() => { setStep(1); setAgree(false); }}
                    >
                      Start over
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

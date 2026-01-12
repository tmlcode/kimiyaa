import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mail,
  MessageSquare,
  Calendar,
  Sparkles,
  Download,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, FormEvent } from "react";
import posthog from "posthog-js";

const Contact = () => {
  const [activeTab, setActiveTab] = useState<"download" | "license">("download");
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [agree, setAgree] = useState<boolean>(false);
  const [selectedApp, setSelectedApp] = useState<"app1" | "app2" | null>(null);

  const [hardwareId, setHardwareId] = useState<string>("");
  const [licenseKey, setLicenseKey] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // Toggle this to re-enable Terms step later
  const DOWNLOAD_HAS_TERMS = false;


  // DOWNLOAD flow still requires valid email
  const canContinueDownload = !!(name.trim() && emailValid && selectedApp);

  // LICENSE flow: only Name + Hardware ID + App (no email requirement)
  const canGenerateLicense = !!(name.trim() && hardwareId.trim() && selectedApp);

  // ---- Keygen helpers (mirrors your standalone CGI page) ----
  const ddmmyyyy = (date: Date) => {
    const d = String(date.getDate()).padStart(2, "0");
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const y = String(date.getFullYear());
    return d + m + y; // DDMMYYYY
  };


  // Point directly to your keygen server
  type AppId = "app1" | "app2";


  const APP_LABELS: Record<AppId, string> = {
  app1: "Kimiyaa DCC",
  app2: "Kimiyaa AI",
};

  const getAppLabel = (app: AppId) => APP_LABELS[app];



  // ✅ put your real routes here (example paths shown)
  const KEYGEN_BY_APP: Record<
    AppId,
    { endpoint: string; fileName: string; executions: string; days: string }
  > = {
    app1: {
      endpoint: "https://license.kimiyaa.ai/kimiyaa/cgi-bin/keygen.exe",
      fileName:
        "C:\\Sites\\KeygenSite\\kimiyaa\\cgi-bin\\registration_production_blender_mya_figma_SPECIAL.enigma64",
      executions: "50",
      days: "14",
    },
    app2: {
      endpoint: "https://license.kimiyaa.ai/kimiyaa_s2s/cgi-bin/keygen.exe",
      fileName:
        "C:\\Sites\\KeygenSite\\kimiyaa_s2s\\cgi-bin\\Registration_Production_packaging_tcare_tcare2_mt34_vb_tcare2_and_venv_stripped.enigma64",
      executions: "50",
      days: "14",
    },
  };

  const KIMIYAA_DCC_SETUP = "Setup_Kimiyaa Sketch to Shape_1.0.0.exe";
  const KIMIYAA_AI_SETUP  = "Setup_Kimiyaa Sketch to Shape_1.0.0.exe";

  // same file for both, for now
  const DOWNLOAD_BY_APP: Record<AppId, { href: string; downloadName: string }> = {
    app1: {
      href: `/downloads/${encodeURIComponent(KIMIYAA_DCC_SETUP)}`,
      downloadName: KIMIYAA_DCC_SETUP,
    },
    app2: {
      href: `/downloads/${encodeURIComponent(KIMIYAA_AI_SETUP)}`,
      downloadName: KIMIYAA_AI_SETUP,
    },
  };



  
  const handleGenerateLicense = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCopied(false);

    // Only check Name + HWID here (email is not processed for now)
    if (!name.trim() || !hardwareId.trim()) {
      setLicenseKey("Please enter Name and Hardware ID.");
      return;
    }
    if (!selectedApp) {
      setLicenseKey(`Please select ${APP_LABELS.app1} or ${APP_LABELS.app2}.`);
      return;
    }
    
    
    const { endpoint, fileName, executions, days } = KEYGEN_BY_APP[selectedApp];

    const expire = new Date();
    expire.setDate(expire.getDate() + 365);
    const Expiration = ddmmyyyy(expire);

    const payload: Record<string, string> = {
      Action: "GenerateKeyFromProject",
      FileName: fileName,
      RegName: name.trim(),
      Hardware: hardwareId.trim(),
      Executions: executions,
      Days: days,
      Expiration,
    };

    try {
      setIsGenerating(true);
      setLicenseKey("Generating…");

      const params = new URLSearchParams();
      Object.entries(payload).forEach(([k, v]) => params.append(k, v));

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      const text = await res.text();
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${text}`);
      }
      setLicenseKey(text.trim() || "No output received from key generator.");


      // ...

      const key = text.trim() || "No output received from key generator.";
      setLicenseKey(key);

      // use email as the distinct id if possible (best for “unique users”)
      // fallback to hardwareId if email is empty
      const distinctId = (email.trim() || hardwareId.trim()).toLowerCase();

      posthog.identify(distinctId, {
        name: name.trim(),
        email: email.trim(),
        latest_hardware_id: hardwareId.trim(), // person property (latest)
      });

      posthog.capture("license_key_generated_success", {
        app: selectedApp,
        hardware_id: hardwareId.trim(),        // event property (keeps history)
      });

    } catch (err: any) {
      setLicenseKey(`Error generating key: ${err?.message || String(err)}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyLicenseKey = async () => {
    if (!licenseKey.trim()) return;
    if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) return;

    try {
      await navigator.clipboard.writeText(licenseKey.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // silently fail or hook up a toast
    }
  };

  const appLabel = selectedApp ? getAppLabel(selectedApp) : "";

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
              Let’s build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                amazing
              </span>{" "}
              together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you have questions about features, trials, pricing, need a demo, or anything else — our team
              is ready to answer all your questions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left column: info cards */}
            <div className="space-y-6">
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-background/60 to-background/20 backdrop-blur border border-accent/20 hover:border-accent/40 transition-all">
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-accent to-primary shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Email Us</h3>
                    <p className="text-muted-foreground mb-3 text-lg">Our team responds within 24 hours</p>
                    <a
                      href="mailto:info@kimiyaa.ai"
                      className="underline-offset-4 hover:underline hover:text-primary/80 transition-colors text-lg font-semibold"
                    >
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

            {/* Right column: Download / License tabs */}
            <div className="p-10 rounded-3xl bg-gradient-to-br from-background/60 to-background/20 backdrop-blur border border-accent/20 animate-fade-in shadow-2xl">
              <div className="space-y-8">
                {/* Tab selector */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center rounded-full border border-accent/20 bg-background/40 p-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab("download")}
                      className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                        activeTab === "download"
                          ? "bg-gradient-to-r from-primary via-accent to-secondary text-white shadow-lg"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Download
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("license")}
                      className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                        activeTab === "license"
                          ? "bg-gradient-to-r from-primary via-accent to-secondary text-white shadow-lg"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      License
                    </button>
                  </div>
                </div>

                {/* DOWNLOAD FLOW */}
                {activeTab === "download" && (
                  <>
                    {/* Step pills */}
                    {DOWNLOAD_HAS_TERMS ? (
                      <div className="grid grid-cols-3 gap-2">
                        <div className={`h-1.5 rounded-full ${step >= 1 ? "bg-accent" : "bg-muted/30"}`} />
                        <div className={`h-1.5 rounded-full ${step >= 2 ? "bg-accent" : "bg-muted/30"}`} />
                        <div className={`h-1.5 rounded-full ${step >= 3 ? "bg-accent" : "bg-muted/30"}`} />
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2">
                        <div className={`h-1.5 rounded-full ${step >= 1 ? "bg-accent" : "bg-muted/30"}`} />
                        <div className={`h-1.5 rounded-full ${step >= 2 ? "bg-accent" : "bg-muted/30"}`} />
                      </div>
                    )}


                    {/* STEP 1: Name + Email + App */}
                    {step === 1 && (
                      <form
                        className="space-y-6"
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (name.trim() && emailValid && selectedApp) {
                            setStep(2);
                          }
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

                        <div>
                          <p className="block text-sm font-bold mb-3 text-foreground">Choose your app</p>
                          <div className="grid grid-cols-2 gap-3">
                            <button
                              type="button"
                              onClick={() => setSelectedApp("app1")}
                              className={`rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                                selectedApp === "app1"
                                  ? "border-accent bg-gradient-to-r from-primary/80 via-accent/80 to-secondary/80 text-white shadow-lg"
                                  : "border-accent/20 bg-background/5 hover:border-accent/40"
                              }`}
                            >
                              <span className="font-semibold block">{APP_LABELS.app1}</span>
                              <span className="text-xs text-muted-foreground block">
                              </span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setSelectedApp("app2")}
                              className={`rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                                selectedApp === "app2"
                                  ? "border-accent bg-gradient-to-r from-primary/80 via-accent/80 to-secondary/80 text-white shadow-lg"
                                  : "border-accent/20 bg-background/5 hover:border-accent/40"
                              }`}
                            >
                              <span className="font-semibold block">{APP_LABELS.app2}</span>
                              <span className="text-xs text-muted-foreground block">
                              </span>
                            </button>
                          </div>
                          {!selectedApp && (
                            <p className="text-xs text-muted-foreground mt-2">
                              Please select exactly one app to continue.
                            </p>
                          )}
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-primary via-accent to-secondary text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all glow-primary"
                          disabled={!canContinueDownload}
                        >
                          Continue <ArrowRight className="h-4 w-4" />
                        </Button>
                      </form>
                    )}

                    {/* STEP 2: Terms */}
                    {DOWNLOAD_HAS_TERMS && step === 2 && (
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-bold mb-3">Terms &amp; Conditions</h3>
                          <div className="bg-background/5 border border-accent/20 rounded-xl p-4 max-h-60 overflow-auto text-sm leading-relaxed">
                            <p className="mb-3">
                              <strong>Dummy Terms:</strong> This is placeholder text for your Terms and Conditions.
                              Replace this with your real legal copy.
                            </p>
                            <p className="mb-3">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
                              tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
                              diam. Maecenas ligula massa, varius a, semper congue.
                            </p>
                            <p>
                              Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna
                              eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
                              facilisis luctus, metus.
                            </p>
                          </div>
                          <div className="flex items-center gap-3 mt-4">
                            <Checkbox id="agree" checked={agree} onCheckedChange={(v: any) => setAgree(!!v)} />
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
                    {step === (DOWNLOAD_HAS_TERMS ? 3 : 2) && (
                      <div className="space-y-6">
                        <div className="rounded-xl border border-accent/20 bg-background/5 p-4">
                          <div className="flex items-center gap-2 text-accent mb-2">
                            <CheckCircle className="h-5 w-5" />
                            <h3 className="text-lg font-bold">
                              You're all set{name ? `, ${name}` : ""}!
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            You can now download the file for{" "}
                            <span className="font-semibold">
                              {selectedApp ? getAppLabel(selectedApp) : APP_LABELS.app1}
                            </span>
                            .
                          </p>
                        </div>

                        <Button
                          type="button"
                          onClick={() => {
                            const appKey = (selectedApp || "app1") as AppId;
                            const { href, downloadName } = DOWNLOAD_BY_APP[appKey];

                            const a = document.createElement("a");
                            a.href = href;
                            a.download = downloadName; // best when file is same-origin
                            document.body.appendChild(a);
                            a.click();
                            a.remove();
                          }}

                          className="w-full rounded-xl bg-gradient-to-r from-primary via-accent to-secondary text-white shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all"
                        >
                          <Download className="h-5 w-5" />
Download {selectedApp ? DOWNLOAD_BY_APP[(selectedApp as AppId)].downloadName : "Setup.exe"}
                        </Button>

                        <Button
                          type="button"
                          variant="ghost"
                          className="w-full rounded-xl"
                          onClick={() => {
                            setStep(1);
                            setAgree(false);
                            setSelectedApp(null);
                          }}
                        >
                          Start over
                        </Button>
                      </div>
                    )}
                  </>
                )}

                {/* LICENSE FLOW */}
                {activeTab === "license" && (
                  <form className="space-y-6" onSubmit={handleGenerateLicense}>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Generate License Key</h3>
                      <p className="text-sm text-muted-foreground">
                        Create a hardware-locked license for your Kimiyaa installation.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="license-name" className="block text-sm font-bold mb-3 text-foreground">
                        Name
                      </label>
                      <Input
                        id="license-name"
                        placeholder="Ada Lovelace"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-background/5 border-accent/30 focus-visible:ring-accent/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="license-email" className="block text-sm font-bold mb-3 text-foreground">
                        Email Address
                      </label>
                      <Input
                        id="license-email"
                        type="email"
                        placeholder="ada@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-background/5 border-accent/30 focus-visible:ring-accent/50"
                      />
                      {/* Email is NOT used for keygen right now */}
                    </div>

                    <div>
                      <label htmlFor="hardware-id" className="block text-sm font-bold mb-3 text-foreground">
                        Hardware ID
                      </label>
                      <Input
                        id="hardware-id"
                        placeholder="e.g. C69A93-08A25D-D58B73-43CEBD"
                        value={hardwareId}
                        onChange={(e) => setHardwareId(e.target.value)}
                        className="bg-background/5 border-accent/30 focus-visible:ring-accent/50"
                      />
                    </div>

                    <div>
                      <p className="block text-sm font-bold mb-3 text-foreground">Choose your app</p>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedApp("app1")}
                          className={`rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                            selectedApp === "app1"
                              ? "border-accent bg-gradient-to-r from-primary/80 via-accent/80 to-secondary/80 text-white shadow-lg"
                              : "border-accent/20 bg-background/5 hover:border-accent/40"
                          }`}
                        >
                          <span className="font-semibold block">{APP_LABELS.app1}</span>
                          <span className="text-xs text-muted-foreground block">
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedApp("app2")}
                          className={`rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                            selectedApp === "app2"
                              ? "border-accent bg-gradient-to-r from-primary/80 via-accent/80 to-secondary/80 text-white shadow-lg"
                              : "border-accent/20 bg-background/5 hover:border-accent/40"
                          }`}
                        >
                          <span className="font-semibold block">{APP_LABELS.app2}</span>
                          <span className="text-xs text-muted-foreground block">
                          </span>
                        </button>
                      </div>
                      {!selectedApp && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Please select exactly one app to generate a license.
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Button
                        type="submit"
                        disabled={!canGenerateLicense || isGenerating}
                        className="rounded-xl bg-gradient-to-r from-primary via-accent to-secondary text-white shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all"
                      >
                        {isGenerating ? "Generating…" : "Generate Key"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleCopyLicenseKey}
                        disabled={!licenseKey.trim()}
                        className="rounded-xl"
                      >
                        {copied ? "Copied!" : "Copy Key"}
                      </Button>
                    </div>

                    <div className="rounded-xl border border-accent/20 bg-background/5 p-4 min-h-[80px]">
                      <p className="text-[11px] uppercase tracking-wide text-muted-foreground mb-1 flex justify-between">
                        <span>License key</span>
                        {selectedApp && (
                          <span className="font-semibold text-foreground">for {appLabel}</span>
                        )}
                      </p>
                      <p className="text-sm break-words leading-relaxed">
                        {licenseKey || "Your license key will appear here…"}
                      </p>
                    </div>

                    <p className="text-[11px] text-muted-foreground">
                      Notes: Use the Hardware ID from the Kimiyaa app.
                    </p>
                  </form>
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

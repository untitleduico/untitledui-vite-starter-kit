import { CreditCard } from "untitledui-vite-starter-kit";

export const BrandThemes = () => (
    <div className="flex flex-wrap gap-6">
        <CreditCard type="brand-dark" width={240} cardHolder="OLIVIA RHYE" cardNumber="4242 4242 4242 4242" cardExpiration="06/28" />
        <CreditCard type="brand-light" width={240} cardHolder="OLIVIA RHYE" cardNumber="4242 4242 4242 4242" cardExpiration="06/28" />
    </div>
);

export const GrayThemes = () => (
    <div className="flex flex-wrap gap-6">
        <CreditCard type="gray-dark" width={240} cardHolder="PHOENIX BAKER" cardNumber="5555 5555 5555 4444" cardExpiration="09/27" />
        <CreditCard type="gray-light" width={240} cardHolder="PHOENIX BAKER" cardNumber="5555 5555 5555 4444" cardExpiration="09/27" />
    </div>
);

export const StripVariants = () => (
    <div className="flex flex-wrap gap-6">
        <CreditCard type="gradient-strip" width={240} cardHolder="LANA STEINER" cardNumber="3782 8224 6310 005" cardExpiration="01/29" />
        <CreditCard type="salmon-strip" width={240} cardHolder="LANA STEINER" cardNumber="3782 8224 6310 005" cardExpiration="01/29" />
    </div>
);

export const VerticalStrip = () => (
    <div className="flex flex-wrap gap-6">
        <CreditCard type="gradient-strip-vertical" width={240} cardHolder="DEMI WILKINSON" cardNumber="6011 0009 9013 9424" cardExpiration="11/26" />
        <CreditCard type="salmon-strip-vertical" width={240} cardHolder="DEMI WILKINSON" cardNumber="6011 0009 9013 9424" cardExpiration="11/26" />
    </div>
);

import { SocialButton } from "untitledui-vite-starter-kit";

export const Brand = () => (
    <div className="flex w-80 flex-col gap-3">
        <SocialButton social="google">Sign in with Google</SocialButton>
        <SocialButton social="facebook">Sign in with Facebook</SocialButton>
        <SocialButton social="apple">Sign in with Apple</SocialButton>
        <SocialButton social="dribble">Sign in with Dribbble</SocialButton>
    </div>
);

export const GrayTheme = () => (
    <div className="flex w-80 flex-col gap-3">
        <SocialButton theme="gray" social="google">
            Sign in with Google
        </SocialButton>
        <SocialButton theme="gray" social="apple">
            Sign in with Apple
        </SocialButton>
        <SocialButton theme="gray" social="figma">
            Sign in with Figma
        </SocialButton>
    </div>
);

export const IconOnly = () => (
    <div className="flex items-center gap-3">
        <SocialButton social="google" />
        <SocialButton social="facebook" />
        <SocialButton social="apple" />
        <SocialButton social="twitter" />
        <SocialButton social="figma" />
        <SocialButton social="dribble" />
    </div>
);

export const Sizes = () => (
    <div className="flex items-center gap-3">
        <SocialButton size="md" social="google">
            Continue
        </SocialButton>
        <SocialButton size="lg" social="google">
            Continue
        </SocialButton>
    </div>
);

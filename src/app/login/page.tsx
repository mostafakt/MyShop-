import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login — MyShop",
  description: "Sign in to your MyShop account",
};

const LoginForm = dynamic(() => import("../../components/login/LoginForm"), {
  ssr: false,
  loading: () => (
    <div className="max-w-md w-full p-8 bg-base-100 border border-base-300 rounded-box shadow-lg">
      <div className="space-y-6">
        <div className="h-8 bg-base-300 rounded-box w-3/4 mx-auto"></div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i}>
              <div className="h-4 bg-base-300 rounded-full w-1/4 mb-2"></div>
              <div className="h-10 bg-base-300 rounded-field"></div>
            </div>
          ))}
          <div className="h-10 bg-base-300 rounded-field"></div>
        </div>
      </div>
    </div>
  ),
});

export default function LoginPage() {
  return (
    <div className=" bg-[url('/images/login-bg.png')] bg-no-repeat bg-cover bg-center min-h-screen w-full flex items-center justify-center p-4   from-base-200 to-base-300">
      <div className="  inset-0 z-0">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-secondary/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl  flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12   backdrop-filter backdrop-blur-lg 
               bg-indigo-100/40 dark:bg-gray-800/60
               border border-white/20
               p-8 rounded-xl shadow-lg">
        <div
          className="text-center md:text-left max-w-md 
             "
        >
          <div className="flex justify-center md:justify-start">
            <div className="w-16 h-16 rounded-box bg-primary flex items-center justify-center shadow-lg mb-6">
              <div className="w-8 h-8 bg-primary-content rounded-full"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            Welcome Back
          </h1>

          <p className="text-xl text-base-content/80 mb-6">
            Sign in to access your account and continue shopping
          </p>

          <div className="hidden md:block space-y-4 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-success"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-base-content/80">Secure shopping experience</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-success"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-base-content/80">Fast checkout process</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-success"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-base-content/80">
                Personalized recommendations
              </p>
            </div>
          </div>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}

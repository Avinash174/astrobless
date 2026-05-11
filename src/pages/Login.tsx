import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

const LOGO_URL = "/splash_logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[calc(100vh-80px)] bg-light flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white rounded-[3rem] p-8 md:p-12 premium-shadow border border-gray-100">
          {/* Logo & Header */}
          <div className="text-center mb-10">
            <Link to="/" className="inline-block mb-6 group">
              <div className="w-20 h-20 bg-primary/10 rounded-full p-3 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <img src={LOGO_URL} alt="AstroBless Logo" className="w-full h-full object-contain" />
              </div>
            </Link>
            <h1 className="text-3xl font-black text-secondary tracking-tighter mb-2">Welcome Back</h1>
            <p className="text-gray-400 font-bold text-sm">Enter your details to access your cosmic insights.</p>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-black text-secondary uppercase tracking-widest ml-4">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-light border-2 border-transparent focus:border-primary/20 rounded-2xl py-4 pl-14 pr-6 outline-none transition-all font-bold text-secondary placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-4">
                <label className="text-xs font-black text-secondary uppercase tracking-widest">Password</label>
                <Link to="#" className="text-xs font-black text-primary hover:underline">Forgot?</Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                  <Lock size={20} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full bg-light border-2 border-transparent focus:border-primary/20 rounded-2xl py-4 pl-14 pr-14 outline-none transition-all font-bold text-secondary placeholder:text-gray-400"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-secondary transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button className="w-full bg-secondary text-white py-5 rounded-2xl font-black text-lg hover:bg-accent transition-all shadow-2xl shadow-secondary/20 flex items-center justify-center gap-3 active:scale-[0.98] mt-8 group">
              Log In
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase font-black text-gray-300">
              <span className="bg-white px-4">Or continue with</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 bg-light py-4 rounded-2xl font-black text-sm text-secondary hover:bg-gray-100 transition-all border border-gray-100">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12.48 10.92v3.28h7.84c-.24 1.84-1.96 5.4-7.84 5.4-5.08 0-9.24-4.2-9.24-9.36s4.16-9.36 9.24-9.36c2.88 0 4.8 1.2 5.88 2.28l2.52-2.44C19.24 1.48 16.12 0 12.48 0 5.56 0 0 5.56 0 12.48s5.56 12.48 12.48 12.48c7.24 0 12.08-5.08 12.08-12.32 0-.84-.08-1.48-.2-2.12h-11.88z"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-3 bg-light py-4 rounded-2xl font-black text-sm text-secondary hover:bg-gray-100 transition-all border border-gray-100">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </button>
          </div>

          {/* Signup Link */}
          <p className="text-center mt-10 text-gray-400 font-bold">
            Don't have an account? <Link to="/signup" className="text-primary hover:underline font-black">Sign Up</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

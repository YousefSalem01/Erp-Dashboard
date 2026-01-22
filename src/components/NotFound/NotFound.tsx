import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <div className="text-[150px] font-bold text-primary/10 select-none animate-pulse">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Floating animation container */}
              <div className="animate-[float_3s_ease-in-out_infinite]">
                <svg
                  className="w-32 h-32 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {/* Document with question mark */}
                  <path
                    className="animate-[dash_2s_ease-in-out_infinite]"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              {/* Orbiting dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-hr rounded-full animate-[orbit_4s_linear_infinite]" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-finance rounded-full animate-[orbit_3s_linear_infinite_reverse]" />
            </div>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-foreground mb-3 animate-[fadeIn_0.5s_ease-out]">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8 animate-[fadeIn_0.5s_ease-out_0.1s_both]">
          Oops! The page you're looking for doesn't exist or is still under construction.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-[fadeIn_0.5s_ease-out_0.2s_both]">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
          <Button
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary/30 animate-[bounce_1s_ease-in-out_infinite]" />
          <div className="w-2 h-2 rounded-full bg-primary/50 animate-[bounce_1s_ease-in-out_infinite_0.1s]" />
          <div className="w-2 h-2 rounded-full bg-primary/70 animate-[bounce_1s_ease-in-out_infinite_0.2s]" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;

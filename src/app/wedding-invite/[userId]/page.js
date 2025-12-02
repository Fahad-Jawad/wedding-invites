'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Heart } from 'lucide-react';
import Template1Preview from '@/components/previews/Template1Preview';
import Template2Preview from '@/components/previews/Template2Preview';
import Template3Preview from '@/components/previews/Template3Preview';
import LoadingTemplate1 from '@/components/LoadingTemplate1';
import LoadingTemplate2 from '@/components/LoadingTemplate2';
import LoadingTemplate3 from '@/components/LoadingTemplate3';

export default function PreviewPage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [showTemplateLoader, setShowTemplateLoader] = useState(false);
  const [error, setError] = useState(null);
  const [templateData, setTemplateData] = useState(null);

  useEffect(() => {
    const fetchTemplateData = async () => {
      try {
        const response = await fetch(`/api/template/preview/${params.userId}`);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to load template');
        }

        const data = await response.json();
        setTemplateData(data.data);

        // Switch to template-specific loader with actual initials
        setShowTemplateLoader(true);

        // Add delay to show the beautiful loading animation
        await new Promise(resolve => setTimeout(resolve, 1200));
      } catch (err) {
        console.error('Error fetching template:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (params.userId) {
      fetchTemplateData();
    }
  }, [params.userId]);

  if (loading) {
    // Show template-specific loading screen with actual initials after data is fetched
    if (showTemplateLoader && templateData) {
      const groomInitial = templateData.content?.groomName?.[0]?.toUpperCase() || 'G';
      const brideInitial = templateData.content?.brideName?.[0]?.toUpperCase() || 'B';

      switch (templateData.templateNumber) {
        case 1:
          return <LoadingTemplate1 groomInitial={groomInitial} brideInitial={brideInitial} />;
        case 2:
          return <LoadingTemplate2 groomInitial={groomInitial} brideInitial={brideInitial} />;
        case 3:
          return <LoadingTemplate3 groomInitial={groomInitial} brideInitial={brideInitial} />;
        default:
          return <LoadingTemplate1 groomInitial={groomInitial} brideInitial={brideInitial} />;
      }
    }

    // Default platform loading (shown while fetching data)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
        <div className="text-center">
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 animate-pulse"
            style={{ background: 'linear-gradient(to right, #8224E3, #580BA7)' }}
          >
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
            Loading Your Invitation...
          </h2>
          <p className="text-gray-600">Please wait while we prepare your beautiful invitation</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
            style={{ background: 'linear-gradient(to right, #ef4444, #dc2626)' }}
          >
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
            Invitation Not Found
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            style={{ background: 'linear-gradient(to right, #8224E3, #580BA7)' }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Go to Homepage
          </button>
        </div>
      </div>
    );
  }

  // Render the appropriate template based on templateNumber
  if (templateData) {
    switch (templateData.templateNumber) {
      case 1:
        return <Template1Preview content={templateData.content} />;
      case 2:
        return <Template2Preview content={templateData.content} />;
      case 3:
        return <Template3Preview content={templateData.content} />;
      default:
        return (
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-600">Invalid template</p>
          </div>
        );
    }
  }

  return null;
}

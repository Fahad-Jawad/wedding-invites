'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials, selectCurrentUser } from '@/store/authSlice';
import { Heart, Edit, Eye, Sparkles } from 'lucide-react';
import Link from 'next/link';
import DashboardSidebar from '@/components/DashboardSidebar';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const reduxUser = useSelector(selectCurrentUser);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }

    // Sync session with Redux
    if (status === 'authenticated' && session?.user) {
      if (!reduxUser || reduxUser.id !== session.user.id) {
        dispatch(setCredentials({
          user: session.user,
          token: 'session-token',
        }));
      }
    }

    if (session?.user?.selectedTemplate) {
      setSelectedTemplate(session.user.selectedTemplate);
    }
  }, [status, session, router, dispatch, reduxUser]);

  const handleTemplateSelect = async (templateNumber) => {
    setLoading(true);
    try {
      const response = await fetch('/api/template/select', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ templateNumber }),
      });

      if (response.ok) {
        setSelectedTemplate(templateNumber);
        // Redirect to edit page
        router.push(`/edit/template${templateNumber}`);
      } else {
        alert('Failed to select template');
      }
    } catch (error) {
      console.error('Error selecting template:', error);
      alert('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const templates = [
    {
      number: 1,
      name: 'Classic Romance',
      description: 'Elegant rose and pink design with floral accents',
      gradient: 'linear-gradient(to right, #f43f5e, #ec4899)',
      preview: '/template1',
    },
    {
      number: 2,
      name: 'Modern Elegance',
      description: 'Emerald and teal with glass morphism effects',
      gradient: 'linear-gradient(to right, #10b981, #14b8a6)',
      preview: '/template2',
    },
    {
      number: 3,
      name: 'Vintage Floral',
      description: 'Amber and pink with decorative floral elements',
      gradient: 'linear-gradient(to right, #f59e0b, #ec4899)',
      preview: '/template3',
    },
    {
      number: 4,
      name: 'Modern Luxe',
      description: 'Contemporary light theme with innovative split design',
      gradient: 'linear-gradient(to right, #fb7185, #f472b6, #fb923c)',
      preview: '/template4',
    },
  ];

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mb-4 animate-pulse">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />

      <main className="flex-1 lg:ml-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {selectedTemplate ? (
          /* Already Selected Template */
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-gradient-emerald">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">
              Your Template is Ready!
            </h2>
            <p className="text-gray-600 mb-8">
              You've selected {templates[selectedTemplate - 1]?.name}. Continue editing or preview your invitation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/edit/template${selectedTemplate}`}
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl bg-gradient-primary hover:opacity-90"
              >
                <Edit className="w-5 h-5" />
                Continue Editing
              </Link>
              <Link
                href={`/wedding-invite/${session?.user?.id}`}
                target='_blank'
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl border-2 border-gray-200"
              >
                <Eye className="w-5 h-5" />
                Preview Invitation
              </Link>
            </div>
          </div>
        ) : (
          /* Template Selection */
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
                Choose Your Perfect Template
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Select a template that matches your wedding style. You can customize every detail once you choose.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {templates.map((template) => (
                <div
                  key={template.number}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="h-40 flex items-center justify-center" style={{ background: template.gradient }}>
                    <Heart className="w-16 h-16 text-white opacity-80" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">
                      {template.name}
                    </h3>
                    <p className="text-gray-600 mb-6 min-h-[3rem]">
                      {template.description}
                    </p>
                    <div className="flex flex-col gap-3">
                      <Link
                        href={template.preview}
                        target="_blank"
                        className="w-full py-2 px-4 border-2 border-gray-200 text-gray-700 rounded-lg font-medium hover:border-gray-300 hover:bg-gray-50 transition-all text-center"
                      >
                        Preview
                      </Link>
                      <button
                        onClick={() => handleTemplateSelect(template.number)}
                        disabled={loading}
                        className="w-full py-2 px-4 text-white rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-primary"
                      >
                        {loading ? 'Selecting...' : 'Choose Template'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        </div>
      </main>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import DashboardSidebar from '@/components/DashboardSidebar';
import {
  Users,
  Plus,
  Edit2,
  Trash2,
  Link as LinkIcon,
  Mail,
  Phone,
  CheckCircle,
  XCircle,
  Clock,
  Copy,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GuestsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingGuest, setEditingGuest] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (status === 'authenticated') {
      fetchGuests();
    }
  }, [status]);

  const fetchGuests = async () => {
    try {
      const response = await fetch('/api/guests');
      if (response.ok) {
        const data = await response.json();
        setGuests(data.guests);
      }
    } catch (error) {
      console.error('Error fetching guests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('Please enter guest name');
      return;
    }

    try {
      if (editingGuest) {
        // Update existing guest
        const response = await fetch(`/api/guests/${editingGuest._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          await fetchGuests();
          setEditingGuest(null);
          setFormData({ name: '', email: '', phone: '' });
          setShowAddForm(false);
        }
      } else {
        // Create new guest
        const response = await fetch('/api/guests', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          await fetchGuests();
          setFormData({ name: '', email: '', phone: '' });
          setShowAddForm(false);
        }
      }
    } catch (error) {
      console.error('Error saving guest:', error);
      alert('Failed to save guest');
    }
  };

  const handleEdit = (guest) => {
    setEditingGuest(guest);
    setFormData({
      name: guest.name,
      email: guest.email || '',
      phone: guest.phone || '',
    });
    setShowAddForm(true);
  };

  const handleDelete = async (guestId) => {
    if (!confirm('Are you sure you want to delete this guest?')) {
      return;
    }

    try {
      const response = await fetch(`/api/guests/${guestId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchGuests();
      }
    } catch (error) {
      console.error('Error deleting guest:', error);
      alert('Failed to delete guest');
    }
  };

  const generateInviteLink = (guestId) => {
    const baseUrl = window.location.origin;
    return `${baseUrl}/wedding-invite/${session?.user?.id}/${guestId}`;
  };

  const copyLink = (guestId) => {
    const link = generateInviteLink(guestId);
    navigator.clipboard.writeText(link);
    setCopiedId(guestId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'attending':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'not_attending':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'attending':
        return 'Attending';
      case 'not_attending':
        return 'Not Attending';
      default:
        return 'Pending';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'attending':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'not_attending':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading guests...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />

      <main className="flex-1 lg:ml-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-serif font-bold text-gray-800">Guest List</h1>
                  <p className="text-gray-600">Manage your wedding guests and track RSVPs</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowAddForm(true);
                  setEditingGuest(null);
                  setFormData({ name: '', email: '', phone: '' });
                }}
                className="flex items-center gap-2 px-4 py-3 bg-gradient-primary text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all"
              >
                <Plus className="w-5 h-5" />
                <span className="hidden sm:inline">Add Guest</span>
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Guests</p>
                  <p className="text-3xl font-bold text-gray-800">{guests.length}</p>
                </div>
                <Users className="w-10 h-10 text-purple-500 opacity-20" />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Attending</p>
                  <p className="text-3xl font-bold text-green-600">
                    {guests.filter((g) => g.attendingStatus === 'attending').length}
                  </p>
                </div>
                <CheckCircle className="w-10 h-10 text-green-500 opacity-20" />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Pending</p>
                  <p className="text-3xl font-bold text-gray-600">
                    {guests.filter((g) => g.attendingStatus === 'pending').length}
                  </p>
                </div>
                <Clock className="w-10 h-10 text-gray-500 opacity-20" />
              </div>
            </div>
          </div>

          {/* Add/Edit Form Modal */}
          <AnimatePresence>
            {showAddForm && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                onClick={() => {
                  setShowAddForm(false);
                  setEditingGuest(null);
                  setFormData({ name: '', email: '', phone: '' });
                }}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl"
                >
                  <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">
                    {editingGuest ? 'Edit Guest' : 'Add New Guest'}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus-primary transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus-primary transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus-primary transition-all outline-none"
                        placeholder="+1 234 567 8900"
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setShowAddForm(false);
                          setEditingGuest(null);
                          setFormData({ name: '', email: '', phone: '' });
                        }}
                        className="flex-1 px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-4 py-3 bg-gradient-primary text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all"
                      >
                        {editingGuest ? 'Update' : 'Add'} Guest
                      </button>
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Guests List */}
          {guests.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No guests yet</h3>
              <p className="text-gray-600 mb-6">Start adding guests to manage your wedding invitation list</p>
              <button
                onClick={() => setShowAddForm(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all"
              >
                <Plus className="w-5 h-5" />
                Add Your First Guest
              </button>
            </div>
          ) : (
            <div className="grid gap-4">
              {guests.map((guest) => (
                <motion.div
                  key={guest._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Guest Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          {guest.name[0].toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg text-gray-800 mb-1 truncate">
                            {guest.name}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                            {guest.email && (
                              <div className="flex items-center gap-1">
                                <Mail className="w-4 h-4" />
                                <span className="truncate">{guest.email}</span>
                              </div>
                            )}
                            {guest.phone && (
                              <div className="flex items-center gap-1">
                                <Phone className="w-4 h-4" />
                                <span>{guest.phone}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="flex items-center gap-2">
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                            guest.attendingStatus
                          )}`}
                        >
                          {getStatusIcon(guest.attendingStatus)}
                          {getStatusText(guest.attendingStatus)}
                        </div>
                        {guest.message && guest.message !== 'Not replied yet' && (
                          <span className="text-sm text-gray-500 italic truncate">
                            "{guest.message.substring(0, 50)}..."
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => copyLink(guest._id)}
                        title="Copy invitation link"
                        className="p-3 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all"
                      >
                        {copiedId === guest._id ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <LinkIcon className="w-5 h-5" />
                        )}
                      </button>
                      <button
                        onClick={() => handleEdit(guest)}
                        className="p-3 rounded-xl bg-purple-50 text-purple-600 hover:bg-purple-100 transition-all"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(guest._id)}
                        className="p-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-all"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

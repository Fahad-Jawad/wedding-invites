# Wedding Invites Platform - Setup Guide

## 🎉 What's Been Built

I've transformed your wedding invitation templates into a full-fledged platform with:

### ✅ Completed Features:
1. **User Authentication** (NextAuth.js with email/password)
2. **MongoDB Database** with Mongoose ODM
3. **User Registration & Login Pages**
4. **Dashboard for Template Selection** (users can choose ONE template)
5. **Image Upload System** (files saved to `/public/uploads`)
6. **Save Template Data API** (saves all content to database)
7. **Image Upload API** (uploads images to server)
8. **Session Management** (JWT tokens)

### 📋 Still To Do:
1. Add "Save" buttons to all 3 editable templates
2. Protect edit routes with authentication (check if user is logged in)
3. Load saved data when user opens their template
4. Create `/preview/[template]/[userId]` public route
5. Set up MongoDB database

---

## 🚀 Quick Start Guide

### Step 1: Set Up MongoDB

You have two options:

#### Option A: MongoDB Atlas (Cloud - Recommended)
1. Go to [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (free tier is fine)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Update `.env.local`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/wedding-invites?retryWrites=true&w=majority
```

#### Option B: Local MongoDB
1. Install MongoDB locally from [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. The `.env.local` is already configured for local:
```env
MONGODB_URI=mongodb://localhost:27017/wedding-invites
```

### Step 2: Update NEXTAUTH_SECRET

Generate a secure random string for `NEXTAUTH_SECRET` in `.env.local`:

```bash
# Run this in terminal to generate a secure secret:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Then update `.env.local`:
```env
NEXTAUTH_SECRET=your-generated-secret-here
```

### Step 3: Start the Development Server

```bash
npm run dev
```

### Step 4: Test the Platform

1. **Register**: Go to `http://localhost:3000/register`
2. **Login**: Go to `http://localhost:3000/login`
3. **Dashboard**: You'll be redirected to `/dashboard` after login
4. **Select Template**: Choose one of the 3 templates
5. **Edit**: You'll be redirected to `/edit/template1` (or 2 or 3)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/route.js   # NextAuth configuration
│   │   │   └── register/route.js         # User registration endpoint
│   │   ├── template/
│   │   │   ├── save/route.js             # Save template data
│   │   │   └── select/route.js           # Select template
│   │   └── upload/route.js               # Image upload endpoint
│   ├── dashboard/page.js                  # User dashboard
│   ├── login/page.js                      # Login page
│   ├── register/page.js                   # Registration page
│   ├── edit/
│   │   ├── template1/page.js             # Editable Template 1
│   │   ├── template2/page.js             # Editable Template 2
│   │   └── template3/page.js             # Editable Template 3
│   └── layout.js                          # Root layout with SessionProvider
├── components/
│   ├── SessionProvider.js                 # NextAuth session wrapper
│   ├── EditableWrapper.js                 # Edit button wrapper
│   ├── EditorDrawer.js                    # Slide-in editor drawer
│   └── EditorForms.js                     # Form inputs (updated for file upload)
├── lib/
│   └── mongodb.js                         # MongoDB connection utility
├── models/
│   ├── User.js                            # User model
│   └── TemplateData.js                    # Template data model
└── hooks/
    └── useDebounce.js                     # Debounce hook
```

---

## 🗄️ Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed with bcrypt),
  selectedTemplate: Number (1, 2, 3, or null),
  createdAt: Date
}
```

### TemplateData Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref to User, unique),
  templateNumber: Number (1, 2, or 3),
  content: Object (JSON with all template data),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔐 Authentication Flow

1. User registers at `/register` → Password hashed with bcrypt → Saved to MongoDB
2. User logs in at `/login` → NextAuth validates credentials → Creates JWT session
3. Session stored in cookie and included in all requests
4. Protected routes check session to verify authentication
5. User data accessible via `useSession()` hook or `getServerSession()` on server

---

## 🎨 How the Edit System Works

1. User selects a template in dashboard
2. `selectedTemplate` is saved to their User record
3. User is redirected to `/edit/template1` (or 2 or 3)
4. User edits content using the editor drawers
5. User clicks "Save" (to be added) → Sends data to `/api/template/save`
6. Data is saved to `TemplateData` collection
7. When user returns, saved data is loaded from database

---

## 📤 Image Upload System

### How it works:
1. User clicks "Upload Image" in ImageEditor
2. File is validated (type, size)
3. File is sent to `/api/upload` endpoint
4. Server saves file to `/public/uploads/` with unique filename format: `{userId}_{timestamp}_{originalName}`
5. Server returns public URL: `/uploads/filename.jpg`
6. URL is saved in template content
7. Image is displayed using the URL

### Image Files Location:
- **Storage**: `public/uploads/`
- **Access**: `http://localhost:3000/uploads/filename.jpg`

---

## 🔧 Next Steps (What You Need to Do)

### 1. Add Save Button to Templates (Priority: HIGH)

I need to add a "Save" button to each editable template that:
- Collects all current content
- Sends it to `/api/template/save`
- Shows success/error message
- Stores it in MongoDB

### 2. Protect Edit Routes (Priority: HIGH)

Add authentication check to edit pages:
```javascript
'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function EditableTemplate1() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // Rest of component...
}
```

### 3. Load Saved Data (Priority: HIGH)

When user opens their template, load their saved data from database:
```javascript
useEffect(() => {
  const loadSavedData = async () => {
    const response = await fetch('/api/template/save');
    if (response.ok) {
      const data = await response.json();
      setContent(data.data.content);
    }
  };
  loadSavedData();
}, []);
```

### 4. Create Preview Route (Priority: MEDIUM)

Create `/preview/[template]/[userId]/page.js` that:
- Fetches saved template data by userId
- Renders the template (non-editable)
- Is publicly accessible (no auth required)
- Shows "Template not found" if no data exists

---

## 🐛 Troubleshooting

### MongoDB Connection Issues
- **Error**: "MongoServerError: Authentication failed"
  - **Fix**: Check your MongoDB URI username and password

- **Error**: "connect ECONNREFUSED"
  - **Fix**: Make sure MongoDB is running locally or check Atlas connection

### NextAuth Errors
- **Error**: "NEXTAUTH_SECRET not set"
  - **Fix**: Add `NEXTAUTH_SECRET` to `.env.local`

### Image Upload Issues
- **Error**: "ENOENT: no such file or directory"
  - **Fix**: The `/public/uploads` directory will be created automatically on first upload

### Session Issues
- **Error**: "useSession must be wrapped in SessionProvider"
  - **Fix**: Already done! Check that `layout.js` has `<SessionProvider>` wrapper

---

## 🎯 Testing Checklist

- [ ] Can register a new user
- [ ] Can login with registered credentials
- [ ] Redirected to dashboard after login
- [ ] Can select a template
- [ ] Redirected to edit page after selection
- [ ] Can edit text fields
- [ ] Can upload images (saved to `/public/uploads`)
- [ ] Can save template data (once Save button is added)
- [ ] Can logout
- [ ] Cannot access edit pages without login (once protected)

---

## 📝 Environment Variables Reference

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/wedding-invites  # Local
# OR
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/wedding-invites  # Atlas

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-min-32-chars
```

---

## 💡 Tips

1. **Testing locally**: Use local MongoDB for development
2. **Production**: Use MongoDB Atlas for deployment
3. **Security**: Never commit `.env.local` to Git (already in `.gitignore`)
4. **Images**: The `/public/uploads` folder is not tracked by Git (add to `.gitignore`)
5. **Backups**: Regularly backup your MongoDB database

---

## 🚀 Ready to Continue?

Let me know when you want me to:
1. ✅ Add Save buttons to all templates
2. ✅ Protect edit routes with authentication
3. ✅ Load saved data on template pages
4. ✅ Create the public preview routes

Just say "continue" and I'll complete the remaining features!

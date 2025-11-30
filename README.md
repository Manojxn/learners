# Learners Global - Next.js Website

A modern, professional website for Learners Global educational institution, built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern UI Components** - Professional, accessible components with Radix UI
- **Type-Safe** - Built with TypeScript for reliability
- **Performance Optimized** - Fast page loads with Next.js 14
- **Contact Form Integration** - Google Sheets integration with email notifications
- **Success Stories** - Dynamic carousel and dedicated page
- **Image Carousel** - Multiple images support for success stories
- **Animated Components** - Smooth animations with Framer Motion

## 📄 Pages

- **Home** (`/`) - Hero section, features, success stories carousel, recognitions
- **About Us** (`/about`) - Mission, vision, values, team information
- **Success Stories** (`/success-stories`) - Student achievements and testimonials
- **Reach Us** (`/reach-us`) - Contact form, locations, map integration
- **FAQs** (`/faqs`) - Frequently asked questions (currently hidden)

## 🛠️ Tech Stack

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible UI components
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon set
- **[Google Apps Script](https://developers.google.com/apps-script)** - Contact form backend

## � Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm, yarn, or pnpm
- Google account (for contact form setup)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Manojxn/learners.git
   cd learners-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_google_apps_script_url_here
   ```
   
   > **Note**: See [CONTACT_FORM_SETUP.md](./CONTACT_FORM_SETUP.md) for detailed instructions on setting up the contact form.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📧 Contact Form Setup

The contact form integrates with Google Sheets to store submissions and send email notifications.

**Quick Setup:**
1. Create a Google Sheet
2. Add Google Apps Script
3. Deploy as web app
4. Add URL to `.env.local`

**For complete step-by-step instructions, see:**
👉 **[CONTACT_FORM_SETUP.md](./CONTACT_FORM_SETUP.md)**

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
learners-next/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── reach-us/            # Contact page
│   ├── success-stories/     # Success stories page
│   └── page.tsx             # Home page
├── src/
│   ├── components/          # React components
│   │   ├── home/           # Home page components
│   │   ├── about/          # About page components
│   │   ├── reach-us/       # Contact form components
│   │   ├── pages/          # Page-level components
│   │   └── ui/             # Reusable UI components
│   └── lib/                # Utility functions
├── public/                  # Static assets
│   └── images/             # Image files
├── .env.local              # Environment variables (create this)
├── CONTACT_FORM_SETUP.md   # Contact form setup guide
└── README.md               # This file
```

## 🎨 Key Components

### Home Page
- **Hero Section** - Eye-catching introduction
- **Features Grid** - Key offerings
- **Success Stories Carousel** - Auto-rotating student achievements
- **Recognitions Section** - Awards and achievements
- **Partners Section** - Institutional partnerships

### Success Stories
- **Grid Layout** - Professional card design
- **Modal Popup** - Detailed story view
- **Image Carousel** - Multiple images per story
- **Achievement Badges** - Visual highlights

### Contact Form
- **Form Validation** - Required field checking
- **Success Modal** - Animated confirmation
- **Google Sheets Integration** - Automatic data storage
- **Email Notifications** - Instant alerts with IST timestamp
- **Professional Email Design** - Rounded card layout

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```env
# Google Apps Script URL for contact form
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### Customization

- **Colors**: Edit `tailwind.config.ts` for theme colors
- **Content**: Update components in `src/components/`
- **Images**: Add to `public/images/`
- **Success Stories**: Edit data in `src/components/pages/SuccessStoriesPage.tsx`

## 📱 Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured experience (1024px+)
- **Large Screens**: Optimized for 4K displays

## ✨ Features in Detail

### Success Stories Carousel
- Auto-rotating (5-second intervals)
- Pause on hover/interaction
- Navigation arrows
- Dot indicators
- Smooth animations

### Contact Form
- Real-time validation
- Loading states
- Success modal with animation
- Error handling
- Google Sheets integration
- Email notifications

### Image Carousel (Success Stories Modal)
- Multiple images per story
- Previous/Next navigation
- Dot indicators
- Click to navigate
- Smooth transitions

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🐛 Troubleshooting

### Contact Form Issues

If the contact form isn't working:
1. Check `.env.local` has the correct Google Script URL
2. Restart the dev server after adding environment variables
3. Verify Google Apps Script is deployed correctly
4. See [CONTACT_FORM_SETUP.md](./CONTACT_FORM_SETUP.md) for detailed troubleshooting

### Build Errors

If you encounter build errors:
1. Delete `.next` folder and `node_modules`
2. Run `npm install` again
3. Clear npm cache: `npm cache clean --force`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

---

**Learners Global** - Empowering Education, Inspiring Excellence

For contact form setup instructions, see [CONTACT_FORM_SETUP.md](./CONTACT_FORM_SETUP.md)

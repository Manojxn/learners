# Contact Form - Google Sheets Integration Setup

Complete guide to connect your contact form with Google Sheets using Google Apps Script.

---

## 📋 Overview

This setup allows your contact form submissions to:
- ✅ Save automatically to Google Sheets
- ✅ Send email notifications with IST timestamp
- ✅ Display success modal to users
- ✅ Store all data securely

---

## 🚀 Quick Start (5 Steps)

### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **"Learners Contact Form Submissions"**
4. Add these column headers in Row 1:
   ```
   Timestamp | Full Name | Email | Phone | Message
   ```

---

### Step 2: Create Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste the complete script below
4. **IMPORTANT**: Change email on line 28:
   ```javascript
   const recipientEmail = 'info@learnersglobal.com'; // Change to YOUR email
   ```

---

### Step 3: Complete Apps Script Code

```javascript
/**
 * @OnlyCurrentDoc
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Convert to IST timezone
    const timestamp = data.timestamp ? new Date(data.timestamp) : new Date();
    const istTime = Utilities.formatDate(timestamp, "Asia/Kolkata", "dd-MM-yyyy HH:mm:ss");
    
    // Save to sheet
    sheet.appendRow([
      istTime,
      data.full_name || '',
      data.email || '',
      data.phone || '',
      data.message || ''
    ]);
    
    // Send email notification
    sendEmailNotification(data, istTime);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data, istTime) {
  try {
    const recipientEmail = 'info@learnersglobal.com'; // ⚠️ CHANGE THIS TO YOUR EMAIL
    const subject = 'New Contact Form Submission - Learners Global';
    
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
      </head>
      <body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: normal;">New Contact Form Submission</h1>
            <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">Learners Global Website</p>
          </div>
          
          <div style="padding: 20px; background-color: #eff6ff; border-left: 4px solid #3b82f6; margin: 20px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Action Required:</strong> A new inquiry has been submitted through your website contact form. Please respond promptly.
            </p>
          </div>
          
          <div style="padding: 0 20px 20px 20px;">
            <h2 style="color: #1f2937; font-size: 18px; margin: 20px 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">Contact Information</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Full Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; text-align: right; color: #111827; font-size: 14px;">${data.full_name || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Email Address</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; text-align: right;">
                  <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none; font-size: 14px;">${data.email || 'N/A'}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Phone Number</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; text-align: right;">
                  <a href="tel:${data.phone}" style="color: #667eea; text-decoration: none; font-size: 14px;">${data.phone || 'N/A'}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6b7280; font-size: 14px;">Submitted On</td>
                <td style="padding: 12px 0; text-align: right; color: #111827; font-size: 14px;">${istTime} IST</td>
              </tr>
            </table>
          </div>
          
          <div style="padding: 0 20px 20px 20px;">
            <h2 style="color: #1f2937; font-size: 18px; margin: 20px 0 15px 0; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">Message</h2>
            
            <div style="background-color: #f9fafb; border-left: 4px solid #667eea; padding: 15px; margin-bottom: 20px;">
              <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6;">${data.message || 'No message provided'}</p>
            </div>
          </div>
          
          <div style="padding: 0 20px 30px 20px; text-align: center;">
            <a href="mailto:${data.email}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-size: 14px; font-weight: 600;">
              Reply to Customer
            </a>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 12px;">
              This is an automated notification from Learners Global contact form
            </p>
            <p style="margin: 0; color: #9ca3af; font-size: 11px;">
              &copy; ${new Date().getFullYear()} Learners Global. All rights reserved.
            </p>
          </div>
          
        </div>
      </body>
      </html>
    `;
    
    const plainBody = `
NEW CONTACT FORM SUBMISSION - LEARNERS GLOBAL

Action Required: A new inquiry has been submitted through your website contact form.

CONTACT INFORMATION:
Full Name:      ${data.full_name || 'N/A'}
Email Address:  ${data.email || 'N/A'}
Phone Number:   ${data.phone || 'N/A'}
Submitted On:   ${istTime} IST

MESSAGE:
${data.message || 'No message provided'}

---
Reply to: ${data.email}
    `;
    
    GmailApp.sendEmail(recipientEmail, subject, plainBody, {
      htmlBody: htmlBody,
      name: 'Learners Global Contact Form'
    });
    
    Logger.log('Email sent to: ' + recipientEmail);
    
  } catch (error) {
    Logger.log('Error sending email: ' + error.toString());
  }
}

function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        full_name: 'Test User',
        email: 'test@example.com',
        phone: '+91 1234567890',
        message: 'This is a test message from the contact form.'
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

---

### Step 4: Authorize & Deploy

#### A. Authorize Email Permissions

1. Click **Run** button (▶️) at top
2. Select `testDoPost` from dropdown
3. Click **Run**
4. Click **Review Permissions**
5. Choose your Google account
6. Click **Advanced**
7. Click **"Go to [Project Name] (unsafe)"**
8. Click **Allow**
9. Check your email - you should receive a test notification!

#### B. Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click gear icon ⚙️ → Select **Web app**
3. Configure:
   - **Description**: "Contact Form Handler"
   - **Execute as**: **Me**
   - **Who has access**: **Anyone**
4. Click **Deploy**
5. **COPY THE WEB APP URL** (looks like: `https://script.google.com/macros/s/ABC.../exec`)
6. Click **Done**

---

### Step 5: Add URL to Environment Variable

1. In your project root, open `.env.local`
2. Add this line (paste your actual URL):
   ```env
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
3. **Save the file**
4. **Restart dev server**:
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

---

## ✅ Testing

### Test the Form

1. Go to: `http://localhost:3000/reach-us`
2. Fill out the form
3. Click **Send Message**
4. You should see:
   - ✅ Success modal popup
   - ✅ New row in Google Sheet
   - ✅ Email notification in your inbox

---

## 🔧 Troubleshooting

### Form submits but no data in sheet?

- Check script URL in `.env.local` is correct
- Verify deployment is set to "Anyone" can access
- Check Apps Script **Executions** tab for errors

### Email not sending?

- Make sure you authorized Gmail permissions
- Check recipient email is correct (line 28)
- View Apps Script logs: **Executions** tab

### Getting CORS errors?

- Normal! The code uses `mode: "no-cors"` which is required
- Data still saves successfully

### Need to update script?

1. Make changes in Apps Script
2. **Deploy** → **Manage deployments**
3. Click ✏️ **Edit**
4. Change to **New version**
5. Click **Deploy**

---

## 📊 Features

### What Gets Saved

- ✅ Timestamp (IST timezone)
- ✅ Full Name
- ✅ Email Address
- ✅ Phone Number
- ✅ Message

### Email Notifications

- ✅ Professional HTML design
- ✅ Gradient header
- ✅ Contact details table
- ✅ Message preview
- ✅ Reply button
- ✅ Rounded card design

### User Experience

- ✅ Success modal with animation
- ✅ Auto-close after 3 seconds
- ✅ Form clears after submission
- ✅ Loading state during submission

---

## 🎯 Summary

**Setup Time**: ~10 minutes

**What You Need**:
1. Google account
2. Google Sheet with headers
3. Apps Script code (provided above)
4. Script URL in `.env.local`

**Result**:
- Fully functional contact form
- Automatic data collection
- Email notifications
- Professional user experience

---

## 📝 Notes

- Free for unlimited submissions
- Data stored in your Google Sheet
- Full control over your data
- Easy to export (Excel/CSV)
- Searchable and organized

---

## 🆘 Support

If you encounter issues:

1. Check Apps Script **Executions** tab for errors
2. Verify `.env.local` has correct URL
3. Ensure dev server was restarted after adding URL
4. Test using `testDoPost()` function in Apps Script

---

**Last Updated**: December 2024
**Version**: 1.0

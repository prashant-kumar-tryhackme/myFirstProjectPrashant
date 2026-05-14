# 🏛️ Jan Seva Kendra — Web App

## जन सेवा केंद्र वेब एप्लिकेशन

**Color Theme:** Navy Blue (#0f2850) + Gold (#d4a017) — Professional Government Look

---

## 📁 File Structure / फाइल संरचना

```
jan-seva-kendra/
│
├── index.html          ← Main HTML file — Sab sections hain yahan
│
├── css/
│   ├── style.css       ← Main CSS — Colors, Layout, Components
│   └── animations.css  ← Animations, Scroll Reveal, Keyframes
│
├── js/
│   ├── data.js         ← Services Data (Modal content + Search data)
│   └── main.js         ← All JavaScript Functionality
│
└── README.md           ← Ye file
```

---

## 🔧 Customization Guide / बदलाव कैसे करें

### 1. Owner Details / मालिक की जानकारी
**File:** `index.html`
- Search: `[ Owner ka Naam Yahan ]` → Apna naam likhein
- Search: `91XXXXXXXXXX` → Apna WhatsApp number likhein (country code ke saath, bina + ke)
- Example: `919876543210`

### 2. Shop Address / दुकान का पता
**File:** `index.html`
- Search: `[ Aapke Gaon ka Naam ]` → Apna gaon likhein
- Search: `[ Landmark ]` → Nearby jagah likhein
- Search: `[ Jila ]` → Apna jila likhein
- Search: `[ PIN Code ]` → Apna PIN likhein

### 3. Google Map Add Karein
**File:** `index.html` — Address Section mein:
```html
<!-- Purana code hatao aur Google Maps embed lagao -->
<iframe 
  src="YOUR_GOOGLE_MAPS_EMBED_URL" 
  width="100%" height="100%" 
  style="border:0;" 
  allowfullscreen>
</iframe>
```

Google Maps se embed URL kaise lein:
1. Google Maps par apni shop dhundho
2. Share button dabao
3. "Embed a map" chuno
4. HTML copy karo

### 4. Phone Numbers / फोन नंबर
`91XXXXXXXXXX` search karo HTML mein aur apna number daalo

### 5. New Service Add Karein
**File:** `js/data.js` mein new entry add karo:
```javascript
const servicesData = {
  // ...existing services...
  
  newService: {
    title: "Service Name | सेवा नाम",
    hindi: "Description in Hindi",
    icon: "fas fa-icon-name",  // FontAwesome icon
    iconClass: "classname",     // CSS color class
    items: [
      "Feature 1 | विशेषता 1",
      "Feature 2 | विशेषता 2",
    ]
  }
};
```

Phir `index.html` mein Services Section mein card add karo:
```html
<div class="service-card" data-name="Search terms">
  <div class="card-icon classname"><i class="fas fa-icon"></i></div>
  <h4>Service Name</h4>
  <p class="card-hindi">सेवा नाम</p>
  <p class="card-desc">Description<br/>विवरण</p>
  <button class="card-btn" onclick="openModal('newService')">Know More / जानें</button>
</div>
```

**File:** `js/data.js` mein `searchData` array mein bhi add karo.

### 6. Colors Change Karein
**File:** `css/style.css` — Top mein `:root` section:
```css
:root {
  --navy: #0f2850;       /* Main dark blue */
  --gold: #d4a017;       /* Gold accent */
  --gold-light: #f0c040; /* Light gold */
}
```

### 7. Ticker/Notice Change Karein
**File:** `index.html` — `.ticker-content` mein apna notice likhein

---

## 🌟 Features / सुविधाएं

- ✅ Professional Navy Blue + Gold theme
- ✅ Hindi + English bilingual content
- ✅ Live Search bar with instant results
- ✅ Service Modal Popups
- ✅ Mobile Responsive Design
- ✅ WhatsApp Contact Integration
- ✅ Animated scroll reveal
- ✅ Counter animation (Stats)
- ✅ Preloader
- ✅ Scroll progress bar
- ✅ Floating WhatsApp button
- ✅ Scroll to top button
- ✅ News ticker / Notice bar
- ✅ All sections: Home, Services, About, Certificate, Owner, Address, Contact
- ✅ Google Fonts (Sora + Noto Sans Devanagari)
- ✅ Font Awesome 6 icons

---

## 🚀 How to Use / कैसे इस्तेमाल करें

1. Sabhi files ek folder mein rakhein (structure same rakho)
2. `index.html` browser mein open karo
3. Ya kisi bhi web hosting par upload karo (cPanel, Hostinger, etc.)
4. Internet chalega to Google Fonts aur Font Awesome load honge

---

## 📱 Browser Support

Chrome, Firefox, Safari, Edge — Sab mein kaam karega

---

*Made with ❤️ for Jan Seva Kendra | जन सेवा केंद्र के लिए*

'use client';

import { useState } from 'react';

export default function Home() {
  const [brandName, setBrandName] = useState('kotiba');
  const [primaryColor, setPrimaryColor] = useState('#667eea');
  const [secondaryColor, setSecondaryColor] = useState('#764ba2');
  const [style, setStyle] = useState('modern');

  const downloadLogo = (logoId: string) => {
    const svg = document.getElementById(logoId);
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 1200;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx?.drawImage(img, 0, 0, 1200, 1200);
      canvas.toBlob((blob) => {
        if (blob) {
          const link = document.createElement('a');
          link.download = `${brandName}-logo-${logoId}.png`;
          link.href = URL.createObjectURL(blob);
          link.click();
        }
      });
      URL.revokeObjectURL(url);
    };

    img.src = url;
  };

  return (
    <div className="container">
      <div className="header">
        <h1>🎨 مولد شعارات Kotiba الاحترافي</h1>
        <p>تصميمات شعارات عصرية ومبتكرة مستوحاة من أفضل المصممين</p>
      </div>

      <div className="controls">
        <h2>خصص شعارك</h2>
        <div className="control-group">
          <label>اسم العلامة التجارية</label>
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="kotiba"
          />
        </div>
        <div className="color-inputs">
          <div className="control-group">
            <label>اللون الأساسي</label>
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
            />
          </div>
          <div className="control-group">
            <label>اللون الثانوي</label>
            <input
              type="color"
              value={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="logo-grid">
        {/* Logo 1: Modern Geometric */}
        <div className="logo-card">
          <div className="logo-container">
            <svg id="logo1" viewBox="0 0 400 400" width="280" height="280">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: primaryColor, stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: secondaryColor, stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <circle cx="200" cy="150" r="70" fill="url(#grad1)" opacity="0.3"/>
              <path d="M 150 120 L 200 80 L 250 120 L 250 180 L 200 220 L 150 180 Z"
                    fill="url(#grad1)" stroke="white" strokeWidth="3"/>
              <text x="200" y="280" fontSize="48" fontWeight="900" fill={primaryColor}
                    textAnchor="middle" fontFamily="Cairo">{brandName}</text>
              <text x="200" y="310" fontSize="14" fill="#666" textAnchor="middle"
                    fontFamily="Tajawal">علامة تجارية مميزة</text>
            </svg>
          </div>
          <div className="logo-title">التصميم الهندسي العصري</div>
          <div className="logo-description">شعار بسيط وأنيق يجمع بين الأشكال الهندسية والحداثة</div>
          <button className="download-btn" onClick={() => downloadLogo('logo1')}>
            تحميل الشعار PNG
          </button>
        </div>

        {/* Logo 2: Minimalist Circle */}
        <div className="logo-card">
          <div className="logo-container">
            <svg id="logo2" viewBox="0 0 400 400" width="280" height="280">
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: primaryColor, stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: secondaryColor, stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <circle cx="200" cy="150" r="80" fill="none" stroke="url(#grad2)" strokeWidth="8"/>
              <text x="200" y="165" fontSize="42" fontWeight="900" fill="url(#grad2)"
                    textAnchor="middle" fontFamily="Cairo">{brandName.charAt(0).toUpperCase()}</text>
              <text x="200" y="270" fontSize="44" fontWeight="900" fill={primaryColor}
                    textAnchor="middle" fontFamily="Cairo">{brandName}</text>
              <circle cx="160" cy="140" r="5" fill={secondaryColor}/>
              <circle cx="240" cy="140" r="5" fill={secondaryColor}/>
            </svg>
          </div>
          <div className="logo-title">التصميم البسيط الدائري</div>
          <div className="logo-description">تصميم أنيق يعتمد على البساطة والوضوح مع لمسة عصرية</div>
          <button className="download-btn" onClick={() => downloadLogo('logo2')}>
            تحميل الشعار PNG
          </button>
        </div>

        {/* Logo 3: Bold Typography */}
        <div className="logo-card">
          <div className="logo-container">
            <svg id="logo3" viewBox="0 0 400 400" width="280" height="280">
              <defs>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: primaryColor, stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: secondaryColor, stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <rect x="120" y="120" width="160" height="10" fill={primaryColor} opacity="0.3"/>
              <rect x="120" y="210" width="160" height="10" fill={secondaryColor} opacity="0.3"/>
              <text x="200" y="190" fontSize="56" fontWeight="900" fill="url(#grad3)"
                    textAnchor="middle" fontFamily="Cairo">{brandName.toUpperCase()}</text>
              <rect x="120" y="230" width="160" height="4" fill="url(#grad3)"/>
            </svg>
          </div>
          <div className="logo-title">تصميم الطباعة الجريئة</div>
          <div className="logo-description">يركز على القوة والوضوح مع خطوط عريضة ومؤثرة</div>
          <button className="download-btn" onClick={() => downloadLogo('logo3')}>
            تحميل الشعار PNG
          </button>
        </div>

        {/* Logo 4: Abstract Wave */}
        <div className="logo-card">
          <div className="logo-container">
            <svg id="logo4" viewBox="0 0 400 400" width="280" height="280">
              <defs>
                <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: primaryColor, stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: secondaryColor, stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <path d="M 120 140 Q 160 120, 200 140 T 280 140" fill="none" stroke="url(#grad4)"
                    strokeWidth="12" strokeLinecap="round"/>
              <path d="M 120 160 Q 160 180, 200 160 T 280 160" fill="none" stroke="url(#grad4)"
                    strokeWidth="12" strokeLinecap="round" opacity="0.6"/>
              <text x="200" y="250" fontSize="46" fontWeight="900" fill={primaryColor}
                    textAnchor="middle" fontFamily="Cairo">{brandName}</text>
              <circle cx="120" cy="140" r="8" fill={primaryColor}/>
              <circle cx="280" cy="140" r="8" fill={secondaryColor}/>
            </svg>
          </div>
          <div className="logo-title">التصميم الموجي المجرد</div>
          <div className="logo-description">يعبر عن الحركة والديناميكية بأسلوب فني مبتكر</div>
          <button className="download-btn" onClick={() => downloadLogo('logo4')}>
            تحميل الشعار PNG
          </button>
        </div>

        {/* Logo 5: Premium Badge */}
        <div className="logo-card">
          <div className="logo-container">
            <svg id="logo5" viewBox="0 0 400 400" width="280" height="280">
              <defs>
                <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: primaryColor, stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: secondaryColor, stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <circle cx="200" cy="160" r="90" fill="url(#grad5)"/>
              <circle cx="200" cy="160" r="75" fill="white"/>
              <circle cx="200" cy="160" r="65" fill="url(#grad5)" opacity="0.1"/>
              <text x="200" y="175" fontSize="38" fontWeight="900" fill="url(#grad5)"
                    textAnchor="middle" fontFamily="Cairo">{brandName}</text>
              <path d="M 150 250 L 200 270 L 250 250" fill="none" stroke={primaryColor}
                    strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="logo-title">شعار الجودة الفاخرة</div>
          <div className="logo-description">تصميم كلاسيكي راقي يعكس الاحترافية والتميز</div>
          <button className="download-btn" onClick={() => downloadLogo('logo5')}>
            تحميل الشعار PNG
          </button>
        </div>

        {/* Logo 6: Tech Modern */}
        <div className="logo-card">
          <div className="logo-container">
            <svg id="logo6" viewBox="0 0 400 400" width="280" height="280">
              <defs>
                <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: primaryColor, stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: secondaryColor, stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <rect x="140" y="100" width="120" height="120" rx="20" fill="url(#grad6)" opacity="0.2"/>
              <rect x="150" y="110" width="100" height="100" rx="15" fill="none"
                    stroke="url(#grad6)" strokeWidth="4"/>
              <path d="M 180 140 L 200 160 L 220 140" fill="none" stroke={primaryColor}
                    strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M 180 170 L 220 170" stroke={primaryColor} strokeWidth="5"
                    strokeLinecap="round"/>
              <text x="200" y="280" fontSize="42" fontWeight="900" fill={primaryColor}
                    textAnchor="middle" fontFamily="Cairo">{brandName}</text>
            </svg>
          </div>
          <div className="logo-title">التصميم التقني العصري</div>
          <div className="logo-description">مثالي للشركات التقنية والمبتكرة بلمسة مستقبلية</div>
          <button className="download-btn" onClick={() => downloadLogo('logo6')}>
            تحميل الشعار PNG
          </button>
        </div>
      </div>
    </div>
  );
}

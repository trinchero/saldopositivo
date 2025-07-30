'use client';

import { useEffect, useState } from 'react';

const fonts = [
  { label: 'Inter', value: "'Inter', sans-serif" },
  { label: 'Roboto', value: "'Roboto', sans-serif" },
  { label: 'Montserrat', value: "'Montserrat', sans-serif" },
  { label: 'Arial', value: 'Arial, sans-serif' },
  { label: 'Lato', value: "'Lato', sans-serif" },
  { label: 'Open Sans', value: "'Open Sans', sans-serif" },
  { label: 'Poppins', value: "'Poppins', sans-serif" },
];

export default function ThemeEditor() {
  // Variabili di stile
  const [bgColor, setBgColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [font, setFont] = useState('');

  const [buttonBg, setButtonBg] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [buttonBorder, setButtonBorder] = useState('');
  const [buttonRadius, setButtonRadius] = useState('0.5rem');

  useEffect(() => {
    const vars = [
      ['--bg-color', '#F1F0F0', setBgColor],
      ['--text-color', '#000000', setTextColor],
      ['--font-family', "'Inter', sans-serif", setFont],
      ['--button-bg', '#000000', setButtonBg],
      ['--button-text', '#ffffff', setButtonText],
      ['--button-border', '#000000', setButtonBorder],
      ['--button-radius', '0.5rem', setButtonRadius],
    ];

    vars.forEach(([key, defaultVal, setter]) => {
      const saved = localStorage.getItem(key) || defaultVal;
      setter(saved);
      document.documentElement.style.setProperty(key, saved);
    });
  }, []);

  const updateStyle = (key: string, value: string) => {
    localStorage.setItem(key, value);
    document.documentElement.style.setProperty(key, value);
  };

  return (
    <div className="fixed top-4 right-4 bg-white border border-gray-300 rounded-xl p-4 shadow-lg z-50 text-sm space-y-3 max-w-[240px] text-black">
      <h4 className="font-semibold text-gray-700 mb-2">🎨 Theme Editor</h4>

      <div>
        <label className="block mb-1">Page Background</label>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => {
            setBgColor(e.target.value);
            updateStyle('--bg-color', e.target.value);
          }}
        />
      </div>

      <div>
        <label className="block mb-1">Text Color</label>
        <input
          type="color"
          value={textColor}
          onChange={(e) => {
            setTextColor(e.target.value);
            updateStyle('--text-color', e.target.value);
          }}
        />
      </div>

      <div>
        <label className="block mb-1">Font</label>
        <select
          value={font}
          onChange={(e) => {
            setFont(e.target.value);
            updateStyle('--font-family', e.target.value);
          }}
          className="w-full p-1 border border-gray-300 rounded"
        >
          {fonts.map(f => (
            <option key={f.value} value={f.value}>{f.label}</option>
          ))}
        </select>
      </div>

      <hr className="my-2" />

      <h5 className="font-semibold text-gray-700">🧩 Button Styles</h5>

      <div>
        <label className="block mb-1">Button Background</label>
        <input
          type="color"
          value={buttonBg}
          onChange={(e) => {
            setButtonBg(e.target.value);
            updateStyle('--button-bg', e.target.value);
          }}
        />
      </div>

      <div>
        <label className="block mb-1">Button Text Color</label>
        <input
          type="color"
          value={buttonText}
          onChange={(e) => {
            setButtonText(e.target.value);
            updateStyle('--button-text', e.target.value);
          }}
        />
      </div>

      <div>
        <label className="block mb-1">Button Border Color</label>
        <input
          type="color"
          value={buttonBorder}
          onChange={(e) => {
            setButtonBorder(e.target.value);
            updateStyle('--button-border', e.target.value);
          }}
        />
      </div>

      <div>
        <label className="block mb-1">Button Border Radius</label>
        <input
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={parseFloat(buttonRadius)}
          onChange={(e) => {
            const val = `${e.target.value}rem`;
            setButtonRadius(val);
            updateStyle('--button-radius', val);
          }}
        />
        <span className="text-xs text-gray-600">{buttonRadius}</span>
      </div>
    </div>
  );
}

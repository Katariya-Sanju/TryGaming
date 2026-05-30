/**
 * Premium 3D Blender-style tactical agent character built entirely in SVG.
 * Uses multi-layer gradients, specular highlights, ambient occlusion shadows,
 * and orange rim lighting to simulate a real-time game engine / Cycles render.
 */
export function HeroCharacter() {
  return (
    <svg
      viewBox="0 0 500 780"
      width="100%"
      height="100%"
      style={{ overflow: "visible" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* ─── Lighting gradients ─── */}
        <radialGradient id="rimGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#FF6B00" stopOpacity="0" />
          <stop offset="70%" stopColor="#FF6B00" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.25" />
        </radialGradient>

        <radialGradient id="ambientBody" cx="30%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#3A2800" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        {/* Helmet shading */}
        <radialGradient id="helmLight" cx="38%" cy="28%" r="55%">
          <stop offset="0%" stopColor="#5A4030" />
          <stop offset="35%" stopColor="#2A1A10" />
          <stop offset="100%" stopColor="#0A0806" />
        </radialGradient>
        <radialGradient id="helmSpecular" cx="36%" cy="26%" r="22%">
          <stop offset="0%" stopColor="rgba(255,200,120,0.55)" />
          <stop offset="100%" stopColor="rgba(255,200,120,0)" />
        </radialGradient>
        <radialGradient id="visorGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FF9040" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#FF6B00" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1A0800" stopOpacity="0.9" />
        </radialGradient>

        {/* Torso armor */}
        <linearGradient id="chestMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2E2218" />
          <stop offset="35%" stopColor="#1C1410" />
          <stop offset="100%" stopColor="#080604" />
        </linearGradient>
        <linearGradient id="chestLeft" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="chestRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A1208" />
          <stop offset="100%" stopColor="#040302" />
        </linearGradient>
        <radialGradient id="coreGlow" cx="50%" cy="45%" r="30%">
          <stop offset="0%" stopColor="#FF8C42" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#FF6B00" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
        </radialGradient>

        {/* Shoulder pads */}
        <linearGradient id="shoulderL" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D2D1A" />
          <stop offset="55%" stopColor="#1E1510" />
          <stop offset="100%" stopColor="#080604" />
        </linearGradient>
        <linearGradient id="shoulderR" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#221810" />
          <stop offset="100%" stopColor="#050403" />
        </linearGradient>

        {/* Leg panels */}
        <linearGradient id="legLGrad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2A1E12" />
          <stop offset="50%" stopColor="#150F08" />
          <stop offset="100%" stopColor="#050302" />
        </linearGradient>
        <linearGradient id="legRGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A1208" />
          <stop offset="100%" stopColor="#050302" />
        </linearGradient>
        <linearGradient id="bootGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E1810" />
          <stop offset="100%" stopColor="#04040202" />
        </linearGradient>

        {/* Arm */}
        <linearGradient id="armLGrad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2A1E12" />
          <stop offset="100%" stopColor="#0A0806" />
        </linearGradient>
        <linearGradient id="armRGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A1208" />
          <stop offset="100%" stopColor="#050302" />
        </linearGradient>

        {/* Weapon */}
        <linearGradient id="weaponBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2E2820" />
          <stop offset="40%" stopColor="#1A1610" />
          <stop offset="100%" stopColor="#060504" />
        </linearGradient>
        <linearGradient id="weaponAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#FF8C42" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="muzzleFlash" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFEECC" />
          <stop offset="40%" stopColor="#FF8C42" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
        </radialGradient>

        {/* Holographic elements */}
        <linearGradient id="holoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF8C42" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.2" />
        </linearGradient>

        {/* Shadow under character */}
        <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#FF6B00" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
        </radialGradient>

        {/* Filters */}
        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="subtleAO" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feBlend in="SourceGraphic" in2="blur" mode="multiply" />
        </filter>
        <filter id="rimLight" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ─── Ground contact shadow ─── */}
      <ellipse cx="250" cy="755" rx="110" ry="18" fill="url(#groundShadow)" filter="url(#subtleAO)" />

      {/* ─── BOOTS ─── */}
      {/* Left boot */}
      <path d="M186 690 L178 740 L176 750 L200 752 L216 748 L218 690Z" fill="url(#bootGrad)" />
      <path d="M176 748 L172 756 L204 758 L216 748Z" fill="#0E0A06" />
      <rect x="178" y="690" width="38" height="3" rx="1" fill="#FF6B00" opacity="0.7" filter="url(#rimLight)" />
      {/* Right boot */}
      <path d="M284 690 L282 740 L280 750 L304 752 L322 748 L324 690Z" fill="url(#bootGrad)" />
      <path d="M280 748 L276 756 L306 758 L322 748Z" fill="#0E0A06" />
      <rect x="284" y="690" width="38" height="3" rx="1" fill="#FF6B00" opacity="0.5" filter="url(#rimLight)" />

      {/* ─── LEGS ─── */}
      {/* Left leg outer */}
      <path d="M175 480 L168 690 L218 690 L224 480Z" fill="url(#legLGrad)" />
      {/* Left leg inner detail */}
      <path d="M198 485 L196 580 L202 580 L204 485Z" fill="rgba(255,107,0,0.12)" />
      {/* Left knee pad */}
      <path d="M172 565 L225 565 L230 590 L168 590Z" fill="#1E1810" />
      <path d="M175 567 L222 567 L226 572 L172 572Z" fill="#FF6B00" opacity="0.5" filter="url(#rimLight)" />
      <path d="M178 575 L218 575 L220 580 L175 580Z" fill="rgba(255,107,0,0.2)" />
      {/* Left thigh armor panel */}
      <path d="M178 490 L222 490 L226 540 L174 540Z" fill="#1A1410" />
      <path d="M180 492 L220 492 L224 496 L178 496Z" fill="rgba(255,107,0,0.15)" />
      {/* Left leg rim */}
      <path d="M168 690 L168 480" stroke="#FF6B00" strokeWidth="0.8" strokeOpacity="0.4" />

      {/* Right leg outer */}
      <path d="M276 480 L276 690 L326 690 L332 480Z" fill="url(#legRGrad)" />
      {/* Right knee pad */}
      <path d="M272 565 L330 565 L332 590 L270 590Z" fill="#140F08" />
      <path d="M275 567 L328 567 L329 572 L274 572Z" fill="rgba(255,107,0,0.2)" />
      {/* Right thigh armor */}
      <path d="M278 490 L328 490 L330 540 L276 540Z" fill="#100C06" />
      <path d="M280 492 L326 492 L327 496 L279 496Z" fill="rgba(255,107,0,0.08)" />
      {/* Right leg rim */}
      <path d="M332 690 L332 480" stroke="#FF6B00" strokeWidth="0.5" strokeOpacity="0.25" />

      {/* ─── PELVIS / WAIST ─── */}
      <path d="M168 470 L172 490 L328 490 L332 470 L320 455 L180 455Z" fill="#1A1410" />
      {/* Belt */}
      <rect x="168" y="468" width="164" height="8" rx="2" fill="#0E0A06" />
      <rect x="172" y="469" width="156" height="3" rx="1" fill="rgba(255,107,0,0.3)" />
      {/* Belt buckle */}
      <rect x="237" y="466" width="26" height="12" rx="2" fill="#1E1810" />
      <rect x="239" y="468" width="22" height="8" rx="1" fill="#FF6B00" opacity="0.8" filter="url(#softGlow)" />
      {/* Holster left */}
      <path d="M168 470 L150 500 L158 510 L172 490Z" fill="#140F08" />
      <path d="M150 500 L148 515 L158 515 L158 510Z" fill="#0A0806" />

      {/* ─── TORSO (main body) ─── */}
      <path d="M172 260 L162 455 L338 455 L328 260Z" fill="url(#chestMain)" />
      {/* Chest left facing panel (lit by orange rim) */}
      <path d="M172 260 L162 455 L210 455 L205 260Z" fill="url(#chestLeft)" />
      {/* Chest right panel (shadowed) */}
      <path d="M295 260 L328 260 L338 455 L290 455Z" fill="url(#chestRight)" />

      {/* Center chest plate */}
      <path d="M195 270 L195 440 L305 440 L305 270Z" fill="#130F0A" />
      {/* Chest plate specular sheen */}
      <path d="M196 271 L196 340 L230 340 L230 271Z" fill="rgba(255,180,80,0.06)" />

      {/* Core energy reactor */}
      <ellipse cx="250" cy="340" rx="28" ry="32" fill="#0A0704" />
      <ellipse cx="250" cy="340" rx="22" ry="26" fill="#120C06" />
      <ellipse cx="250" cy="340" rx="14" ry="17" fill="url(#coreGlow)" filter="url(#softGlow)" />
      <ellipse cx="250" cy="340" rx="7" ry="8" fill="#FFEECC" opacity="0.95" filter="url(#strongGlow)" />
      {/* Energy lines from reactor */}
      <line x1="250" y1="320" x2="250" y2="275" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.6" filter="url(#rimLight)" />
      <line x1="250" y1="360" x2="250" y2="435" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.5" filter="url(#rimLight)" />
      <line x1="228" y1="340" x2="198" y2="340" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="272" y1="340" x2="302" y2="340" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.3" />

      {/* Chest armor detail lines */}
      <path d="M205 280 L205 435 L215 435 L215 280Z" fill="rgba(255,107,0,0.04)" />
      <path d="M285 280 L285 435 L295 435 L295 280Z" fill="rgba(0,0,0,0.3)" />
      <path d="M200 300 L300 300 L300 303 L200 303Z" fill="rgba(255,107,0,0.12)" />
      <path d="M200 380 L300 380 L300 382 L200 382Z" fill="rgba(255,107,0,0.08)" />
      <path d="M200 420 L300 420 L300 422 L200 422Z" fill="rgba(255,107,0,0.06)" />

      {/* Left chest emblem */}
      <path d="M210 295 L225 295 L228 310 L218 318 L210 310Z" fill="#1E1810" />
      <path d="M212 297 L223 297 L225 309 L218 315 L212 309Z" fill="#FF6B00" opacity="0.7" filter="url(#softGlow)" />

      {/* Torso left rim light */}
      <path d="M172 260 L162 455" stroke="#FF6B00" strokeWidth="2" strokeOpacity="0.55" filter="url(#rimLight)" />
      {/* Torso right shadow edge */}
      <path d="M328 260 L338 455" stroke="#FF2000" strokeWidth="1" strokeOpacity="0.1" />

      {/* ─── SHOULDER PADS ─── */}
      {/* Left shoulder (lit) */}
      <path d="M130 230 L105 270 L105 310 L148 320 L172 295 L175 250Z" fill="url(#shoulderL)" />
      {/* Left shoulder top face */}
      <path d="M130 230 L175 250 L175 240 L135 218Z" fill="#3D2D1A" />
      {/* Left shoulder rim */}
      <path d="M105 270 L105 310 L108 310 L108 270Z" fill="#FF6B00" opacity="0.7" filter="url(#rimLight)" />
      <path d="M130 230 L105 270" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.6" filter="url(#rimLight)" />
      {/* Left shoulder detail */}
      <path d="M115 275 L145 275 L148 295 L112 295Z" fill="#1A1410" />
      <path d="M117 277 L143 277 L143 280 L117 280Z" fill="rgba(255,107,0,0.4)" />

      {/* Right shoulder (shadowed) */}
      <path d="M370 230 L395 270 L395 310 L352 320 L328 295 L325 250Z" fill="url(#shoulderR)" />
      {/* Right shoulder top */}
      <path d="M370 230 L325 250 L325 240 L365 218Z" fill="#1A1208" />
      {/* Right shoulder edge shadow */}
      <path d="M395 270 L395 310 L392 310 L392 270Z" fill="rgba(0,0,0,0.5)" />
      {/* Right shoulder detail */}
      <path d="M355 275 L385 275 L388 295 L352 295Z" fill="#100C06" />
      <path d="M357 277 L383 277 L383 280 L357 280Z" fill="rgba(255,107,0,0.15)" />

      {/* ─── NECK / COLLAR ─── */}
      <path d="M215 225 L215 265 L285 265 L285 225 L270 218 L230 218Z" fill="#1A1410" />
      <path d="M218 228 L218 262 L235 262 L235 228Z" fill="rgba(255,107,0,0.1)" />
      {/* Collar guard */}
      <path d="M210 258 L210 270 L290 270 L290 258Z" fill="#0E0A06" />
      <path d="M212 260 L212 266 L288 266 L288 260Z" fill="rgba(255,107,0,0.3)" filter="url(#rimLight)" />

      {/* ─── ARMS ─── */}
      {/* Left arm upper (lit from left) */}
      <path d="M128 310 L105 380 L118 450 L148 455 L172 380 L172 295Z" fill="url(#armLGrad)" />
      {/* Left arm rim lighting */}
      <path d="M105 380 L118 450" stroke="#FF6B00" strokeWidth="2" strokeOpacity="0.65" filter="url(#rimLight)" />
      <path d="M128 310 L105 380" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.5" />
      {/* Left elbow pad */}
      <path d="M112 390 L148 395 L148 415 L110 410Z" fill="#1E1810" />
      <path d="M114 392 L146 396 L146 400 L113 396Z" fill="rgba(255,107,0,0.5)" filter="url(#rimLight)" />
      {/* Left forearm */}
      <path d="M118 450 L108 520 L128 540 L155 530 L148 455Z" fill="#160E08" />
      {/* Left glove */}
      <path d="M108 520 L100 545 L125 555 L140 545 L128 540Z" fill="#0A0806" />
      <path d="M110 522 L102 540" stroke="#FF6B00" strokeWidth="1" strokeOpacity="0.55" />

      {/* Right arm (holding weapon, extended) */}
      <path d="M328 295 L352 310 L390 360 L380 430 L352 440 L328 380Z" fill="url(#armRGrad)" />
      {/* Right elbow */}
      <path d="M370 360 L395 365 L392 385 L367 380Z" fill="#140F08" />
      {/* Right forearm */}
      <path d="M380 430 L400 490 L378 510 L355 500 L352 440Z" fill="#100C06" />
      {/* Right glove / hand */}
      <path d="M400 490 L415 515 L395 528 L375 518 L378 510Z" fill="#0A0806" />

      {/* ─── WEAPON (futuristic rifle, right hand) ─── */}
      <g transform="translate(290, 460) rotate(-18)">
        {/* Main receiver */}
        <rect x="0" y="5" width="230" height="28" rx="5" fill="url(#weaponBody)" />
        {/* Top rail */}
        <rect x="30" y="0" width="160" height="10" rx="3" fill="#1A1610" />
        {/* Barrel */}
        <rect x="195" y="10" width="85" height="11" rx="2" fill="#100C08" />
        {/* Muzzle device */}
        <rect x="274" y="8" width="10" height="15" rx="2" fill="#1A1410" />
        {/* Muzzle glow */}
        <ellipse cx="282" cy="15" rx="5" ry="6" fill="url(#muzzleFlash)" filter="url(#strongGlow)" opacity="0.8" />
        {/* Scope */}
        <rect x="65" y="-8" width="65" height="18" rx="4" fill="#1E1A14" />
        <rect x="68" y="-5" width="59" height="12" rx="3" fill="#0E0A06" />
        <circle cx="97" cy="1" r="4" fill="#FF6B00" opacity="0.7" filter="url(#softGlow)" />
        <line x1="64" y1="5" x2="64" y2="-4" stroke="#333" strokeWidth="1.5" />
        <line x1="130" y1="5" x2="130" y2="-4" stroke="#333" strokeWidth="1.5" />
        {/* Magazine */}
        <rect x="100" y="31" width="24" height="36" rx="4" fill="#0E0A06" />
        <rect x="103" y="33" width="18" height="5" rx="1" fill="#FF6B00" opacity="0.6" />
        <rect x="105" y="40" width="14" height="2" rx="1" fill="rgba(255,107,0,0.3)" />
        {/* Grip */}
        <path d="M65 31 L58 58 L76 60 L78 31Z" fill="#140E08" />
        {/* Weapon accent line — top */}
        <rect x="0" y="5" width="230" height="2" rx="1" fill="url(#weaponAccent)" filter="url(#rimLight)" />
        {/* Weapon accent — bottom */}
        <rect x="0" y="31" width="180" height="1" rx="1" fill="rgba(255,107,0,0.25)" />
        {/* Panel details */}
        <rect x="20" y="9" width="10" height="22" rx="2" fill="#1E1A14" />
        <rect x="22" y="11" width="6" height="18" rx="1" fill="#FF6B00" opacity="0.45" />
        <rect x="150" y="9" width="35" height="22" rx="2" fill="#181410" />
        <rect x="155" y="12" width="25" height="7" rx="1" fill="#FF6B00" opacity="0.3" />
        <rect x="155" y="21" width="25" height="7" rx="1" fill="rgba(255,107,0,0.15)" />
        {/* Charging handle */}
        <rect x="185" y="2" width="8" height="6" rx="2" fill="#222" />
      </g>

      {/* ─── HEAD / HELMET ─── */}
      {/* Neck seal */}
      <rect x="222" y="205" width="56" height="22" rx="6" fill="#1A1410" />

      {/* Helmet base shape */}
      <path d="M165 175 Q163 118 250 105 Q337 118 335 175 L332 230 L168 230Z" fill="url(#helmLight)" />
      {/* Helmet top dome — high-poly look */}
      <path d="M168 175 Q166 112 250 98 Q334 112 332 175Z" fill="#221A10" />
      {/* Specular highlight on dome */}
      <ellipse cx="222" cy="130" rx="38" ry="28" fill="url(#helmSpecular)" />
      {/* Secondary specular */}
      <ellipse cx="210" cy="120" rx="15" ry="10" fill="rgba(255,220,160,0.18)" />

      {/* Helmet side cheek guards */}
      <path d="M165 175 L148 200 L152 225 L168 228Z" fill="#1E1810" />
      <path d="M165 175 L148 200 L150 203 L168 177Z" fill="#FF6B00" opacity="0.55" filter="url(#rimLight)" />
      <path d="M335 175 L352 200 L348 225 L332 228Z" fill="#0E0A06" />
      <path d="M335 175 L352 200 L350 198 L333 174Z" fill="rgba(0,0,0,0.4)" />

      {/* Visor */}
      <path d="M172 183 Q174 210 250 214 Q326 210 328 183 Q326 162 250 159 Q174 162 172 183Z" fill="url(#visorGrad)" />
      {/* Visor inner reflection */}
      <path d="M180 180 Q182 200 250 204 Q318 200 320 180 Q295 170 250 168 Q205 170 180 180Z" fill="rgba(255,120,40,0.25)" />
      {/* Visor glare streak */}
      <path d="M185 170 Q210 165 240 168" stroke="rgba(255,220,180,0.45)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M190 178 Q215 174 238 176" stroke="rgba(255,220,180,0.2)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Visor orange glow edge */}
      <path d="M174 183 Q174 210 250 214 Q326 210 328 183" stroke="#FF6B00" strokeWidth="1.5" fill="none" opacity="0.9" filter="url(#rimLight)" />

      {/* Helmet top ridge / mohawk plate */}
      <path d="M240 98 L242 50 L250 40 L258 50 L260 98Z" fill="#1E1810" />
      <path d="M244 98 L246 52 L250 44 L254 52 L256 98Z" fill="#FF6B00" opacity="0.6" filter="url(#softGlow)" />
      {/* Ridge tip glow */}
      <ellipse cx="250" cy="43" rx="4" ry="5" fill="#FFEECC" opacity="0.9" filter="url(#strongGlow)" />

      {/* Helmet ear/comm units */}
      <path d="M148 198 L132 208 L134 226 L152 224Z" fill="#1A1410" />
      <circle cx="140" cy="214" r="6" fill="#0A0806" />
      <circle cx="140" cy="214" r="3" fill="#FF6B00" opacity="0.75" filter="url(#softGlow)" />
      <path d="M352 198 L368 208 L366 226 L348 224Z" fill="#100C08" />
      <circle cx="360" cy="214" r="6" fill="#0A0806" />
      <circle cx="360" cy="214" r="3" fill="rgba(255,107,0,0.4)" />

      {/* Helmet back neck guard */}
      <path d="M195 226 L195 245 L305 245 L305 226Z" fill="#140F08" />
      <path d="M198 228 L198 235 L302 235 L302 228Z" fill="rgba(255,107,0,0.18)" />

      {/* ─── ORANGE RIM LIGHT OVERLAY (whole character left side) ─── */}
      <path
        d="M148 200 L105 310 L105 380 L108 450 L108 520 L125 555 M130 230 L105 270 M172 260 L162 455 L168 690 L176 752"
        stroke="#FF6B00"
        strokeWidth="2.5"
        fill="none"
        opacity="0.35"
        filter="url(#rimLight)"
        strokeLinecap="round"
      />

      {/* ─── AMBIENT BODY GLOW ─── */}
      <ellipse cx="200" cy="380" rx="180" ry="280" fill="url(#ambientBody)" opacity="0.5" />

      {/* ─── FLOATING HUD — health bar ─── */}
      <g transform="translate(60, 310)" opacity="0.92">
        <rect x="0" y="0" width="70" height="44" rx="3" fill="rgba(10,8,5,0.88)" />
        <rect x="0" y="0" width="70" height="44" rx="3" stroke="rgba(255,107,0,0.38)" strokeWidth="0.8" fill="none" />
        <text x="5" y="11" fill="#FF8C42" fontSize="6" fontFamily="'Share Tech Mono', monospace" letterSpacing="0.5">VITAL SIGNS</text>
        <text x="5" y="22" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="'Share Tech Mono', monospace">HP</text>
        <rect x="14" y="18" width="50" height="3" rx="1" fill="rgba(255,107,0,0.18)" />
        <rect x="14" y="18" width="47" height="3" rx="1" fill="#FF6B00" filter="url(#rimLight)" />
        <text x="5" y="32" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="'Share Tech Mono', monospace">SHD</text>
        <rect x="14" y="28" width="50" height="3" rx="1" fill="rgba(100,180,255,0.15)" />
        <rect x="14" y="28" width="38" height="3" rx="1" fill="#4AF" opacity="0.6" />
        <text x="5" y="41" fill="#FF8C42" fontSize="5" fontFamily="'Share Tech Mono', monospace" letterSpacing="0.3">ZONE: ENGAGE</text>
      </g>

      {/* ─── FLOATING HUD — ability cooldowns ─── */}
      <g transform="translate(368, 380)" opacity="0.9">
        <rect x="0" y="0" width="68" height="56" rx="3" fill="rgba(10,8,5,0.88)" />
        <rect x="0" y="0" width="68" height="56" rx="3" stroke="rgba(255,107,0,0.32)" strokeWidth="0.8" fill="none" />
        <text x="5" y="11" fill="#FF8C42" fontSize="5.5" fontFamily="'Share Tech Mono', monospace" letterSpacing="0.5">ABILITIES</text>
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(5, ${17 + i * 10})`}>
            <rect x="0" y="0" width="8" height="8" rx="1" fill={i < 3 ? "#FF6B00" : "rgba(255,255,255,0.1)"} opacity={i < 3 ? 0.9 : 1} filter={i < 3 ? "url(#rimLight)" : undefined} />
            <rect x="12" y="2" width={i === 3 ? 30 : 44 - i * 4} height="4" rx="1" fill={i < 2 ? "#FF6B00" : "rgba(255,107,0,0.35)"} opacity={i < 2 ? 0.7 : 0.4} />
            <rect x="12" y="2" width="44" height="4" rx="1" fill="rgba(255,255,255,0.05)" />
          </g>
        ))}
        <text x="5" y="53" fill="rgba(255,255,255,0.25)" fontSize="4.5" fontFamily="'Share Tech Mono', monospace">ULT: READY</text>
      </g>

      {/* ─── DAMAGE COUNTER FLOATING ─── */}
      <g transform="translate(310, 120)" opacity="0.78">
        <text x="0" y="0" fill="#FF6B00" fontSize="22" fontFamily="'Barlow Condensed', sans-serif" fontWeight="900" letterSpacing="-0.02em" filter="url(#strongGlow)">-247</text>
        <text x="2" y="14" fill="rgba(255,140,66,0.5)" fontSize="8" fontFamily="'Share Tech Mono', monospace">HEADSHOT</text>
      </g>

      {/* ─── RANK DIAMOND ─── */}
      <g transform="translate(60, 490)">
        <path d="M26 0 L52 26 L26 52 L0 26Z" fill="rgba(10,8,5,0.9)" />
        <path d="M26 0 L52 26 L26 52 L0 26Z" stroke="#FF6B00" strokeWidth="1" fill="none" opacity="0.6" />
        <path d="M26 8 L44 26 L26 44 L8 26Z" fill="rgba(255,107,0,0.12)" />
        <text x="26" y="23" fill="#FF6B00" fontSize="7" fontFamily="'Barlow Condensed', sans-serif" fontWeight="900" textAnchor="middle" letterSpacing="0.05em">IMM</text>
        <text x="26" y="33" fill="rgba(255,255,255,0.5)" fontSize="5.5" fontFamily="'Share Tech Mono', monospace" textAnchor="middle">III</text>
      </g>
    </svg>
  );
}

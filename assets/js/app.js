/**
 * Shared Application Logic & Utilities
 */

// Bengali Numeral Converter
function toBengaliNumber(num) {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, d => bnDigits[d]);
}

// Mobile Menu Toggle
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-menu-btn');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }
}

// Parse URL Search Parameters
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const result = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
}

document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
});

import { visaCountriesRaw } from "./visaCountries.raw";
import { fileProcessingCountriesData } from "./fileProcessingCountries.raw";

// Core brand + service keywords used on every page.
// Add/remove terms here to change what appears site-wide.
export const baseKeywords = [
  "Best Travel Agency in Islamabad",
  "Best Tour Agency in Pakistan",
  "Top Travel Agency Islamabad",
  "O.S Travel & Tours",
  "Best Visa Consultant Islamabad",
  "Best Visa Agent Pakistan",
  "Best Umrah Services Islamabad",
  "Umrah Visa Pakistan",
  "Best Visa File Processing Islamabad",
  "Schengen Visa Consultant Pakistan",
  "Air Ticketing Islamabad",
  "Hotel Booking Pakistan",
  "Travel Insurance Pakistan",
  "Authorized Visa Drop Box Agent",
];

// Keywords for the Air Ticketing / flight booking page.
export const ticketingKeywords = [
  "Air Ticketing Islamabad",
  "Best Air Ticketing Agency Islamabad",
  "Cheap Air Tickets Pakistan",
  "Flight Booking Islamabad",
  "Online Flight Booking Pakistan",
  "Cheap Flights from Islamabad",
  "Cheap Flights from Pakistan",
  "Domestic Flight Booking Pakistan",
  "International Flight Booking Pakistan",
  "PIA Ticket Booking Islamabad",
  "Emirates Ticket Booking Pakistan",
  "Qatar Airways Ticket Booking Pakistan",
  "Turkish Airlines Ticket Booking Pakistan",
  "Etihad Airways Ticket Booking Pakistan",
  "Airblue Ticket Booking Pakistan",
  "Serene Air Ticket Booking",
  "Fly Jinnah Ticket Booking",
  "One Way Flight Ticket Pakistan",
  "Round Trip Flight Ticket Pakistan",
  "Umrah Flight Tickets Pakistan",
  "Best Travel Agent for Air Tickets Islamabad",
  "IATA Approved Travel Agent Islamabad",
  "Book Flight Ticket Online Islamabad",
  "Air Ticket Reservation Islamabad",
  "Group Air Ticket Booking Pakistan",
  ...baseKeywords,
];

// Per-country keyword builder for "Visa" category pages (Malaysia, Thailand, etc.)
export function visaCountryKeywords(countryName) {
  return [
    `Best ${countryName} Visa Services`,
    `${countryName} Visa for Pakistani Citizens`,
    `${countryName} Visa Islamabad`,
    `${countryName} Visa Consultant Pakistan`,
    `${countryName} Visa Requirements`,
    `${countryName} Visa Fee Pakistan`,
    `Apply ${countryName} Visa Online`,
    `Best ${countryName} Visa Agent Islamabad`,
    `${countryName} eVisa Pakistan`,
    ...baseKeywords,
  ];
}

// Per-country keyword builder for "Visa File Processing" category (Schengen, USA, UK, etc.)
export function fileProcessingKeywords(countryName) {
  return [
    `Best ${countryName} Visa File Processing`,
    `${countryName} Visa File Processing Islamabad`,
    `${countryName} Visa Documentation Services`,
    `${countryName} Visa Application Pakistan`,
    `Best ${countryName} Visa File Processing Agent`,
    `${countryName} Visa Consultant Islamabad`,
    ...baseKeywords,
  ];
}

// Auto-built master keyword lists for the two index/listing pages —
// pulls every country name straight from your raw data, no manual syncing needed.
export const visaIndexKeywords = [
  ...baseKeywords,
  ...visaCountriesRaw.map((c) => `Best ${c.name} Visa Services`),
];

export const fileProcessingIndexKeywords = [
  ...baseKeywords,
  ...fileProcessingCountriesData.map((c) => `Best ${c.name} Visa File Processing`),
];

// Blog listing page — broad travel/visa content keywords for ranking on
// informational searches, on top of the core brand keywords.
export const blogIndexKeywords = [
  ...baseKeywords,
  "Travel Blog Pakistan",
  "Visa Guide Blog Pakistan",
  "Visa Requirements Blog",
  "Travel Tips Pakistan",
  "Umrah Guide Blog",
  "Visa News Pakistan",
  "How to Apply Visa from Pakistan",
];

// Per-article keyword builder — combines the post's own tags with the
// site-wide base keywords so every blog page still ranks for the brand.
export function blogPostKeywords(post) {
  if (!post) return baseKeywords;
  return [...(post.tags || []), ...baseKeywords];
}

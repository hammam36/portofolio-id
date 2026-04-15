// src/i18n/index.js — Aggregator i18n per-section
import navId from './nav/id.json';
import navEn from './nav/en.json';
import heroId from './hero/id.json';
import heroEn from './hero/en.json';
import journeyId from './journey/id.json';
import journeyEn from './journey/en.json';
import abilitiesId from './abilities/id.json';
import abilitiesEn from './abilities/en.json';
import projectsId from './projects/id.json';
import projectsEn from './projects/en.json';
import awardsId from './awards/id.json';
import awardsEn from './awards/en.json';
import blogId from './blog/id.json';
import blogEn from './blog/en.json';
import contactId from './contact/id.json';
import contactEn from './contact/en.json';

export const id = {
  nav: navId,
  hero: heroId,
  journey: journeyId,
  abilities: abilitiesId,
  projects: projectsId,
  awards: awardsId,
  blog: blogId,
  contact: contactId,
};

export const en = {
  nav: navEn,
  hero: heroEn,
  journey: journeyEn,
  abilities: abilitiesEn,
  projects: projectsEn,
  awards: awardsEn,
  blog: blogEn,
  contact: contactEn,
};
